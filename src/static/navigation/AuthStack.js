import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Auth from '../screens/Auth/Auth';

const Stack = createStackNavigator();

export default function AuthStack() {
  const theme = useSelector((state) => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerTitle: 'Authorization',
          headerStyle: {
            backgroundColor: theme.$headerBackground,
          },
        }}
      />
    </Stack.Navigator>
  );
}
