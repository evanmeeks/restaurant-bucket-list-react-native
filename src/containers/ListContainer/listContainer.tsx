import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { IVenue } from '../../types';
import { IApplicationProps } from '../../actions/restaurants';

interface IRestaurantListProps extends IApplicationProps {
  navigation: any;
  classes: any;
  loaded: boolean;
  locationRetrieved: boolean;
  onPress: any;
  restaurants: IVenue[];
}
export default class ListContainer extends Component<IRestaurantListProps, {}> {
  static navigationOptions = {
    title: 'Bucket List',
  };

  public componentDidMount() {
    this.props.fetchGeolocation('Restaurants');
  }

  public searchHandler = (value: any) => {
    this.props.fetchGeolocation(value);
  };

  public keyExtractor = (index: any) => {
    return index.referralId.toString();
  };

  public renderItem = ({ item }: { item: IVenue }) => {
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
    let iconSrc = 'https://ss3.4sqi.net/img/categories_v2/building/default_32.png';
    const { name: venueName } = item;
    const [
      {
        name: categoryName,
        icon: { prefix, suffix },
      },
    ] = item.categories;
    iconSrc = `${prefix}32${suffix}`;

    return (
      <ListItem
        onPress={() => {
          this.props.navigation.navigate('Detail', { itemData: item });
        }}
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

  public RestaurantList = (props: IRestaurantListProps) => {
    const { loaded, restaurants, locationRetrieved } = props;

    switch (locationRetrieved + '|' + loaded) {
      case 'true|true':
        return (
          <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.searchHandler(text)}
              placeholder="Restaurants"
            />
            <FlatList
              data={restaurants}
              // keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </View>
        );
      case 'false|false':
        return <Text>Retrieving Location</Text>;
      case 'true|false':
        return <Text>Loading Restaurants and Venues</Text>;
      default:
        return null;
    }
  };

  public render() {
    const RestaurantList = this.RestaurantList;
    return <RestaurantList {...this.props} />;
  }
}
