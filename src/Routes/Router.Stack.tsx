import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Private/Home/Home';
import Settings from '../Screens/Private/Settings/Settings';
import Monitoring from '../Screens/Private/Monitoring/Monitoring';
import Intervention from '../Screens/Private/Intervention/Intervention';
import Identification from '../Screens/Private/Identification/Identification';
import Team from '../Screens/Private/Team/Team';
import RescueUnit from '../Screens/Private/RescueUnit/RescueUnit';
import PointsSupport from '../Screens/Private/PointsSupport/PointsSupport';

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
      <Screen
        name="Intervention"
        component={Intervention}
        options={{headerShown: false}}
      />
      <Screen
        name="Identification"
        component={Identification}
        options={{headerShown: false}}
      />
      <Screen name="Team" component={Team} options={{headerShown: false}} />
      <Screen
        name="RescueUnit"
        component={RescueUnit}
        options={{headerShown: false}}
      />
      <Screen
        name="PointsSupport"
        component={PointsSupport}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

export default StackRoutes;
