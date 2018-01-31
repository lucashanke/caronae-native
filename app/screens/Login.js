import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from 'react-native';

import LoginForm from '../components/LoginForm';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    marginBottom: 20,
  },
  text: {
    flex: 1,
    margin: '10%',
  },
  greetings: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,
  },
});

const Login = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.text}>
        <Text style={styles.greetings}>
            Olá :)
        </Text>
        <Text style={styles.instructions}>
            Bem vinda(o) ao aplicativo de caronas da UFRJ.
            O acesso é restrito a usuária(o)s vinculada(o)s à Universidade.
            Para continuar, clique aqui para obter sua chave de acesso,
            usando seu login da Intranet UFRJ.
        </Text>
        <LoginForm />
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Login;
