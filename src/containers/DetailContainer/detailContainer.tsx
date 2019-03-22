import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface P {
  navigation: any;
}

export default class DetailContainer extends Component<P, {}> {
  public static navigationOptions = {
    title: 'Detail',
  };

  public onPressHandler = () => {
    this.props.navigation.navigate('List');
  };

  public render() {
    return (
      <View>
        <Text onPress={this.onPressHandler}>List Container Stub</Text>
      </View>
    );
  }
}
