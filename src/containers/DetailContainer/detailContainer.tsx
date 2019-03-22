import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface P {
  navigation: any;
}

export default class DetailContainer extends Component<P, {}> {
  public onPressHandler = () => {
    this.props.navigation.navigate('List');
  };

  static navigationOptions = {
    title: 'Detail',
  };

  public render() {
    return (
      <View style={styles.container} nav={this.props.navigation}>
        <Text onPress={this.onPressHandler}>List Container Stub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
});
