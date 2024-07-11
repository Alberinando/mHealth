import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Public/Login/Login';
import Register from '../Screens/Public/Register/Register';

const Stack = createNativeStackNavigator();

function AuthRoutes(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
