import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { styles } from '../assets/styles/Styles';
import { Controller, useForm } from 'react-hook-form';
import Banner from '../components/Banner';



function UserScreen({ navigation }) {
  // const [user, setFullUser] = useState('');
  // const [password, setPassword] = useState('');
  // const [rol, SetRol] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      user: '',
      rol: '',
      password: '',
    }
  });
  // const validate = () => {
  //   if (email == "tv@gmail.com") {
  //     setPassword("");
  //     setFullUser("")
  //     navigation.navigate('Profile', { fullname: fullname })
  //   }
  // }
  const onSubmit = data => {
    console.log(data);
        if (data.user == "matiiutv") {
            // setFullUser("");
            // setPassword("");
            navigation.navigate('Cuenta', { user: data.user });
            navigation.navigate('Cuenta', { rol: data.rol });
          }

  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Banner img="bank.webp" />
      <Text style={[styles.texts]}>Usuario:</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-zÑñáéíóú]+$/i,
        }}

        render={({ field: { onChange, onBlur, value } }) => (
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
      {errors.user?.type == "pattern" && <Text style={{ color: 'red' }}>El usuario solo debe tener letras y/o espacios</Text>}

      <Text style={styles.texts}> Rol: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (         
          <TextInput
          style={[styles.inputs]}
          placeholder="¿Administrador o usuario?"
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
        //onPress={() => navigation.navigate('Settings')}
        //onPress={validate}  
        onPress={(handleSubmit(onSubmit))}

        // onPress={() => {
        //   if (user == "matiiutv") {
        //     setFullUser("");
        //     setPassword("");
        //     navigation.navigate('Cuenta', { user: user });
        //     navigation.navigate('Cuenta', { rol: rol });
        //   }
        // }}
      >
        <Text style={styles.textbuttons}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserScreen;