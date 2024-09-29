import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../screens/Chat';
import {NavigationContainer} from '@react-navigation/native';
import Call from '../screens/Call';
import Scan from '../screens/Scan';
import WishList from '../screens/WishList';
import Vip from '../screens/Vip';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 80,
          },
        }}>
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="wechat"
                size={30}
                color={focused ? 'orange' : '#000'}
              />
            ),
            tabBarIconStyle: {
              color: 'red',
            },
          }}
        />
        <Tab.Screen
          name="Call"
          component={Call}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="phone-call"
                size={30}
                color={focused ? 'orange' : '#000'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="qr-code-scanner"
                size={30}
                color={focused ? 'orange' : '#000'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishList}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="favorite-border"
                size={30}
                color={focused ? 'orange' : '#000'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Vip"
          component={Vip}
          options={{
            tabBarIcon: ({focused}) => (
              <Entypo
                name="star-outlined"
                size={30}
                color={focused ? 'orange' : '#000'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
