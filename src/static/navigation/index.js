function createAuthStack() {
  return `
  import React from 'react';
  import { createStackNavigator } from '@react-navigation/stack';
  import { useSelector } from 'react-redux';

  import Auth from '../screens/Auth/Auth';
  import RestorePassword from '../screens/Auth/RestorePassword';
  import SignIn from '../screens/Auth/SignIn';
  import SignUp from '../screens/Auth/SignUp';

  const Stack = createStackNavigator();

  export default function AuthStack() {
      const theme = useSelector(state => state.theme);
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
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="RestorePassword" component={RestorePassword} />
          </Stack.Navigator>
      );
  }
`;
}

function createNavigationIndex() {
  return `
  import 'react-native-gesture-handler';
  import React from 'react';
  import { createStackNavigator } from '@react-navigation/stack';
  import { NavigationContainer } from '@react-navigation/native';
  
  import AuthStack from './AuthStack';
  
  const Stack = createStackNavigator();
  
  function MainNavigation() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    );
  }
  
  function AppNavigation() {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;`;
}

export { createAuthStack, createNavigationIndex };
