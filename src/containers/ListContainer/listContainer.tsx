import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IRestaurant } from '../../types';
import { fetchGeolocation, IApplicationProps } from '../../actions/restaurants';

interface IRestaurantListProps extends IApplicationProps {
  navigation: any;
  classes: any;
  success: boolean;
  onPress: any;
  restaurants: IRestaurant[];
}
export default class ListContainer extends Component<IRestaurantListProps, {}> {
  static navigationOptions = {
    title: 'List',
  };

  public componentDidMount() {
    this.props.fetchGeolocation('Restaurants');
  }

  public onPressHandler = () => {
    this.props.navigation.navigate('Detail');
  };

  public RestaurantList = (props: any) => {
    const { success, restaurants } = this.props;

    if (success) {
      return (
        <View>
          <FlatList data={restaurants} renderItem={({ item }) => <Text>{item.venue.name}</Text>} />
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  };

  public render() {
    const RestaurantList = this.RestaurantList;
    return <RestaurantList onPress={this.onPressHandler} />;
  }
}
