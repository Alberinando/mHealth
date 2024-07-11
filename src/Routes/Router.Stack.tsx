import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Private/Home/Home';
import Settings from '../Screens/Private/Settings/Settings';
import Monitoring from '../Screens/Private/Monitoring/Monitoring';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Monitoring"
        component={Monitoring}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

export default StackRoutes;
