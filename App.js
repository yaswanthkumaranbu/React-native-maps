import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Coupens from './Coupens';
import Wallet from './Wallet';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon set, like MaterialIcons or Ionicons
// import './assets/home.JPG'
import { FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="black" />
            ),
            tabBarLabelStyle: { color: 'black' }, // Set the color of tabBarLabel

        }}
        />
        <Tab.Screen name="Wallet" component={Wallet}
                options={{
                  tabBarLabel: 'WALLET',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="credit-card" size={30} color="black" />
                    ),
                    tabBarLabelStyle: { color: 'black' }, // Set the color of tabBarLabel
        
                }}
        />
        <Tab.Screen name="Coupens" component={Coupens}
                options={{
                  tabBarLabel: 'COUPENS',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="ticket" size={30} color="black" />
                    ),
                    tabBarLabelStyle: { color: 'black' }, // Set the color of tabBarLabel
        
                }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
