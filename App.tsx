import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const tabStyles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            if (!iconName) {
              return null; 
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
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
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
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
