import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from '../assets/styles/Styles';
import { Controller, useForm } from 'react-hook-form';

function ProfileScreen({ route, navigation }) {
  const [infoCliente, setInfoCliente] = useState([]);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: '',
      titular: '',
      fecha: '',
      saldo: '',
    }
  });

  const guardar = data => {
    console.log(data);
    setInfoCliente(cliente => [...cliente, { id: data.id, titular: data.titular, fecha: data.fecha, saldo: data.saldo }]);
    navigation.navigate('Movimiento', { id: data.id });
    navigation.navigate('Movimiento', {titular: data.titular});

  };

  return (
    <View style={styles.container}>

      <Text style={[styles.title]}>{route.params.user}</Text>

      <Text style={styles.texts}> Idetificación: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]/,
          minLength: 8,
          maxLength: 10,

        }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="Identificación del titular"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
          />
        )}
        name='id'
      />
      {errors.id?.type == "required" && <Text style={{ color: 'red' }}> La identificación es obligatoria </Text>}
      {errors.id?.type == "pattern" && <Text style={{ color: 'red' }}> La identificación solo depe bontener numeros </Text>}
      {errors.id?.type == "minLength" && <Text style={{ color: 'red' }}>La identificación debe tener de 8 a 10 caracteres</Text>}
      {errors.id?.type == "maxLength" && <Text style={{ color: 'red' }}>La identificación debe tener de 8 a 10 caracteres</Text>}

      <Text style={styles.texts}> Nombre del titular: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/,
        }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="Nombre del titular"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
          />
        )}
        name='titular'
      />
      {errors.titular?.type == "required" && <Text style={{ color: 'red' }}> El nombre del titular es obligatoria </Text>}
      {errors.titular?.type == "pattern" && <Text style={{ color: 'red' }}> El nombre del titular solo debe contener letras y/o espacios </Text>}

      <Text style={styles.texts}>Nº Cuenta:</Text>
      <TextInput
        style={[styles.inputs, { textAlign: 'center', color: '#505455', letterSpacing: 2, fontWeight: 'bold', }]}
        value={Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000)}
      />

      <Text style={styles.texts}> Fecha: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/
        }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="dd/mm/aaaa"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
          />
        )}
        name='fecha'
      />
      {errors.fehca?.type == "required" && <Text style={{ color: 'red' }}> La fecha es obligarotria </Text>}
      {errors.fecha?.type == "pattern" && <Text style={{ color: 'red' }}> Formato de fecha no valido debe ir en orden: dd/mm/aaaa </Text>}

      <Text style={styles.texts}> Saldo: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]/,
          min: 1000000,
          max: 100000000,
        }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <TextInput
            style={[styles.inputs]}
            placeholder="Saldo de la cuenta"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
          />
        )}
        name='saldo'
      />
      {errors.saldo?.type == "required" && <Text style={{ color: 'red' }}> El saldo es obligatorio </Text>}
      {errors.saldo?.type == "pattern" && <Text style={{ color: 'red' }}> El saldo solo debe tener números </Text>}
      {errors.saldo?.type == "min" && <Text style={{ color: 'red' }}> El saldo minimo es 1000000</Text>}
      {errors.saldo?.type == "max" && <Text style={{ color: 'red' }}> El saldo maximo es 100000000</Text>}

      <TouchableOpacity
        style={styles.buttons}
        onPress={(handleSubmit(guardar))}
      >
        <Text style={styles.textbuttons}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;