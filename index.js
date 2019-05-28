/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import WelcomePage from './js/page/WelcomPage'
import AppNavigator from './js/navigation/AppNavigator'
// import App from './js/App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
