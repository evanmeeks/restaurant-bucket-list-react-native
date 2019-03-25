import React from 'react';
import MapView, { Marker, MapViewProps } from 'react-native-maps';
import { Container } from 'native-base';

interface ILocationProps extends MapViewProps {
  lat: number;
  lng: number;
  name: string;
  categoryName: string;
}

class Location extends React.Component<ILocationProps, {}> {
  public render() {
    const { lat, lng, name, categoryName } = this.props;
    return (
      <Container style={{ backgroundColor: 'red' }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0411,
            longitudeDelta: 0.011,
          }}
          zoomControlEnabled={true}
          zoomEnabled={true}
        >
          <Marker
            title={name}
            coordinate={{
              latitude: lat,
              longitude: lng,
            }}
            description={categoryName}
          />
        </MapView>
      </Container>
    );
  }
}

export default Location;
