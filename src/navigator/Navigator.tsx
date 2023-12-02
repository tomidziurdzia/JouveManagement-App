import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens';
import {Loading} from '../components';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const [initialRouteName, setInitialRouteName] = useState('');

  // useEffect(() => {
  //   authEmployee();
  // }, []);

  // const authEmployee = async () => {
  //   try {
  //     let employeeData = await AsyncStorage.getItem('employee');
  //     console.log(employeeData);
  //     if (employeeData) {
  //       employeeData = JSON.parse(employeeData);
  //       if (!employeeData) {
  //         setInitialRouteName('SignInScreen');
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setInitialRouteName('SignInScreen');
  //   }
  // };
  useEffect(() => {
    setInitialRouteName('SignInScreen');
  }, []);

  return (
    <>
      {!initialRouteName ? (
        <Loading visible={true} />
      ) : (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: 'white',
            },
          }}>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};
