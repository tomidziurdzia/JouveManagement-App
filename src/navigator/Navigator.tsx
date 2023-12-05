import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SignInScreen} from '../screens';
import {Loading} from '../components';
import {useAuthEmployee} from '../hooks/useAuthEmployee';
import {useAppSelector} from '../store/store';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {checkAuthTokenEmployee} = useAuthEmployee();
  const {status} = useAppSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      checkAuthTokenEmployee();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'checking') {
    return <Loading visible={true} />;
  }

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
        {status === 'not-authenticated' ? (
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </>
  );
};
