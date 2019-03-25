import React from 'react';
import Location from '../../components/Map/Location';
import { NavigationScreenProp } from 'react-navigation';

import { Container, Content, Text, Button } from 'native-base';

interface IRestaurantDetailProps {
  navigation: NavigationScreenProp;
}

export default class DetailContainer extends React.Component<IRestaurantDetailProps, {}> {
  static navigationOptions = {
    title: 'Restauraunt',
  };

  public render() {
    const { navigation } = this.props;
    const item = navigation.getParam('itemData');
    const {
      name,
      location: { formattedAddress, lat, lng },
    } = item.venue;
    const [
      {
        name: categoryName,
        icon: { prefix, suffix },
      },
    ] = item.venue.categories;
    const iconSrc = `${prefix}32${suffix}`;

    return (
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
    );
  }
}
