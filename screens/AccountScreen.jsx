import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from '../assets/styles/Styles';
import { Controller, useForm } from 'react-hook-form';


function AccountScreen({route}) {
    return (
      <View style={styles.container}>
        <Text>Movimientos</Text>
        <Text style={[styles.texts]}>Bienvenido: {route.params.id}</Text>
        <Text style={[styles.texts]}>{route.params.titular}</Text>
      </View>
    );
  }

  export default AccountScreen;