import React, { Component } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import { IRestaurant } from '../../types';
import { IApplicationProps } from '../../actions/restaurants';

interface IRestaurantListProps extends IApplicationProps {
  navigation: any;
  classes: any;
  loaded: boolean;
  onPress: any;
  restaurants: IRestaurant[];
  restaurantsSelector: any;
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

  public keyExtractor = (item: any, index: any) => index.toString();

  public renderItem = ({ item }: { item: IRestaurant }) => {
    const styles = StyleSheet.create({
      subtitleView: {
        flexDirection: 'row',
        paddingLeft: 2,
        paddingTop: 5,
      },
      ratingText: {
        paddingLeft: 2,
        color: 'blue',
      },
    });

    const { name: venueName } = item.venue;
    let iconSrc = 'https://ss3.4sqi.net/img/categories_v2/building/default_32.png';

    const [
      {
        name: categoryName,
        icon: { prefix, suffix },
      },
    ] = item.venue.categories;
    iconSrc = prefix + '32' + suffix;

    return (
      <ListItem
        onPress={this.onPressHandler}
        title={venueName}
        leftAvatar={{ source: { uri: iconSrc } }}
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{categoryName}</Text>
          </View>
        }
      />
    );
  };

  public RestaurantList = (props: any) => {
    const { loaded, restaurants } = props;

    if (loaded) {
      return (
        <View>
          <FlatList
            data={restaurants}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  };

  public render() {
    const RestaurantList = this.RestaurantList;
    return <RestaurantList {...this.props} />;
  }
}
