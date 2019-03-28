import React from 'react';
import Location from '../../components/Map/Location';
import { NavigationParams } from 'react-navigation';
import { IVenue } from '../../types';

import { Container, Content, Text, Button } from 'native-base';

interface IRestaurantDetailProps {
  navigation: NavigationParams;
}

export default class DetailContainer extends React.Component<IRestaurantDetailProps, {}> {
  static navigationOptions = {
    title: 'Restauraunt',
  };

  public render() {
    const { navigation } = this.props;
    const venue: IVenue = navigation.getParam('itemData');
    console.log('venue', venue);
    const {
      name,
      location: { formattedAddress, lat, lng },
    } = venue;
    const [
      {
        name: categoryName,
        icon: { prefix, suffix },
      },
    ] = venue.categories;
    const iconSrc = `${prefix}32${suffix}`;

    return (
      lat &&
      lng && (
        <Container>
          <Location lat={lat} lng={lng} categoryName={categoryName} name={name} />
          <Content>
            <Container style={{ height: 55, color: '#000000' }}>
              <Text>{formattedAddress}</Text>
            </Container>
            <Button onPress={() => this.props.navigation.navigate('List')}>
              <Text>Back To List</Text>
            </Button>
          </Content>
        </Container>
      )
    );
  }
}
