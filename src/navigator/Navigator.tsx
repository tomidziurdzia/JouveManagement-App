import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens';
import {useAuthEmployee} from '../hooks/useAuthEmployee';
import {useAppSelector} from '../store/store';
import {TabsNavigator} from './TabsNavigator';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {checkAuthTokenEmployee} = useAuthEmployee();
  const {status} = useAppSelector(state => state.auth);

  useEffect(() => {
    checkAuthTokenEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        {status === 'not-authenticated' || status === 'checking' ? (
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        ) : (
          <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        )}
      </Stack.Navigator>
    </>
  );
};
