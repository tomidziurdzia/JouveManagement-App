import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  MapScreen,
  ResumeScreen,
  TravelScreen,
  UserScreen,
} from '../screens';
import {COLORS} from '../constants/colors';
import {Platform} from 'react-native';

export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: COLORS.primary}}
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;
            case 'ResumeScreen':
              iconName = 'list-outline';
              break;
            case 'MapScreen':
              iconName = 'map-outline';
              break;
            case 'TravelScreen':
              iconName = 'navigate-outline';
              break;
            case 'UserScreen':
              iconName = 'person-outline';
              break;
          }
          return <Icon name={iconName} size={24} color={COLORS.white} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <BottomTabAndroid.Screen
        name="ResumeScreen"
        options={{title: 'Resume'}}
        component={ResumeScreen}
      />
      <BottomTabAndroid.Screen
        name="MapScreen"
        options={{title: 'Map'}}
        component={MapScreen}
      />
      <BottomTabAndroid.Screen
        name="TravelScreen"
        options={{title: 'Travel'}}
        component={TravelScreen}
      />
      <BottomTabAndroid.Screen
        name="UserScreen"
        options={{title: 'User'}}
        component={UserScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: COLORS.white}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.primary, height: 100},
        tabBarLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;
            case 'ResumeScreen':
              iconName = 'list-outline';
              break;
            case 'MapScreen':
              iconName = 'map-outline';
              break;
            case 'TravelScreen':
              iconName = 'navigate-outline';
              break;
            case 'UserScreen':
              iconName = 'person-outline';
              break;
          }
          return <Icon name={iconName} size={24} color={COLORS.white} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
      <BottomTabIOS.Screen
        name="ResumeScreen"
        options={{title: 'Resume'}}
        component={ResumeScreen}
      />
      <BottomTabIOS.Screen
        name="MapScreen"
        options={{title: 'Map'}}
        component={MapScreen}
      />
      <BottomTabIOS.Screen
        name="TravelScreen"
        options={{title: 'Travel'}}
        component={TravelScreen}
      />
      <BottomTabIOS.Screen
        name="UserScreen"
        options={{title: 'User'}}
        component={UserScreen}
      />
    </BottomTabIOS.Navigator>
  );
};
