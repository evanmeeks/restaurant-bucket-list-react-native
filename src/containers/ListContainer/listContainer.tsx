import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface P {
  navigation: any;
}

export default class ListContainer extends Component<P, {}> {
  static navigationOptions = {
    title: 'List',
  };

  public onPressHandler = () => {
    this.props.navigation.navigate('Detail');
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onPressHandler}>List Container Stub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
});
