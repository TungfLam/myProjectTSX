import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import Setting from './screens/setting';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator(); // tạo StackNavigator cho màn hình mới

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);
const CartStackScreen = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={Cart} />
  </CartStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const MyNewScreenStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Setting" component={Setting} />
  </SettingStack.Navigator>
);

const tabStyles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});



export default function App(): JSX.Element {
  const handleHapticFeedback = () => {
    Haptics.selectionAsync();
  };

  return (


    <NavigationContainer>


      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={tabStyles.tabBarIcon}
              />
            );
          },
        })}

      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
          listeners={{
            tabPress: handleHapticFeedback,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
          listeners={{
            tabPress: handleHapticFeedback,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
          listeners={{
            tabPress: handleHapticFeedback,
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
