import React from 'react';
import { StackNavigator } from 'react-navigation';
import {LoginPage} from './screens/LoginPage';
export const Root = StackNavigator({
    login: {
        screen: LoginPage,
        navigationOptions: { header: null }
    },
   
});

