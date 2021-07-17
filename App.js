import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/pages/home';
import Login from './src/pages/login';
import 'react-native-gesture-handler';

const AppNav = createStackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
});

export default createAppContainer(AppNav);
