import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import AppNavigator from './navigation/AppNavigator'
import store from './Store'

export default class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
  }
}


