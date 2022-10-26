import React from 'react';
import { Text, View, } from 'react-native';
import { styles } from '../assets/styles/Styles';



function AccountScreen({ route }) {
  return (
    <View style={[styles.container]}>
      <Text>Movimientos</Text>
      <Text style={[styles.texts]}>Bienvenido: {route.params.titular}</Text>
    </View>
  );
}

export default AccountScreen;