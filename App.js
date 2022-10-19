import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from './assets/styles/Styles';
import UserScreen from './screens/UserScreen';
import ProfileScreen from './screens/ProfileScreen';
import AccountScreen from './screens/AccountScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* tabBarStyle: desactiva el menú bottom */}
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='person'
              color={'gray'}
              size={30}
            />
          )
        }}

      />
      <Tab.Screen
        name="Cuenta"
        component={ProfileScreen}
        options={{          
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='home'
              color={'gray'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="Movimiento"
        component={AccountScreen}
        options={{
           tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='settings'
              color={'gray'}
              size={30}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Sistema Bancario' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


