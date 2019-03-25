import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import configureStore from './store/configureStore';
import { Font } from 'expo';
import Router from './router';

const store = configureStore();

interface IAppState {
  loading: boolean;
}

export default class App extends Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Provider store={store}>
          <Text>Loading...</Text>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }
}
