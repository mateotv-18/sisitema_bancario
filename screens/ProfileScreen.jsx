import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from '../assets/styles/Styles';
import Banner from '../components/Banner';

function ProfileScreen({ route }) {
    return (      
      <View style={styles.container}>
        {/* <Banner img="bank.webp" /> */}
        <Text>Cuenta: {route.params.user}</Text>
        <Text>Cuenta: {route.params.rol}</Text>
      
      </View>
    );
  }

  export default ProfileScreen;