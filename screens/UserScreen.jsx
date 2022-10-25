import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from '../assets/styles/Styles';
import { Controller, useForm } from 'react-hook-form';
import Banner from '../components/Banner';



function UserScreen({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      user: '',
      rol: '',
      password: '',    
    }
  });

  let users = [
    { user: 'matiiutv', rol: 'admin', password: 'Elpapasito.123' },
    { user: 'mery', rol: 'admin', password: 'Elpapasito.123' },
    { user: 'Leoncios', rol: 'user', password: 'Carabali123+' },
  ];

  const onSubmit = data => {
    console.log(data);
    let userSearch = users.find(user => user.user === data.user && user.rol === data.rol && user.password === data.password);
    if (userSearch === undefined) {
      return alert('Usuario contraseña o rol no valido, por favor verificar la información');
    }
    navigation.navigate('Cuenta', { user: data.user });

  };

  return (
    <View style={styles.container}>
      <Banner img="bank.png" />

      <Text style={[styles.texts]}>Usuario:</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-ZÑñ]*$/,
          maxLength: 8
        }}

        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="Ingrese su usuario"
            // onChangeText={value => setFullUser(value)}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
          />
        )}
        name='user'
      />
      {errors.user?.type == "required" && <Text style={{ color: 'red' }}>El nombre es obligatorio</Text>}
      {errors.user?.type == "pattern" && <Text style={{ color: 'red' }}>El usuario solo debe tener letras sin espacios o caracteres especiales</Text>}
      {errors.user?.type == "maxLength" && <Text style={{ color: 'red' }}>El usuario no debe contener mas de 8 letras</Text>}

      <Text style={styles.texts}> Rol: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="Admin / Usuer"
            // onChangeText={value => SetRol(value)}
            onBlur={onBlur}
            value={value}
            onChange={onChange}

          />
        )}
        name='rol'
      />
      {errors.rol?.type == "required" && <Text style={{ color: 'red' }}>El Rol es obligatorio</Text>}

      <Text style={styles.texts}> Contraseña: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&+.])[A-Za-z\d$@$!%*?&]{8,15}/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            onBlur={onBlur}
            placeholder='Elija su contraseña'
            secureTextEntry={true}
            // onChangeText={value => setPassword(value)}
            onChange={onChange}
            value={value}
          />
        )}
        name='password'
      />
      {errors.password?.type == "required" && <Text style={{ color: 'red' }}>La contraseña es obigatorio</Text>}
      {errors.password?.type == "pattern" && <Text style={{ color: 'red' }}>La contraseña debe tener entro 8 y 15 caracteres, contener letras mayusculas, numeros y por lo menos un caracter especial</Text>}

      <TouchableOpacity
        style={styles.buttons}
        onPress={(handleSubmit(onSubmit))}
      >
        <Text style={styles.textbuttons}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserScreen;