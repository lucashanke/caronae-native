import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import appStyles from '../styles';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      id: '',
      key: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image style={styles.logo} source={require('../img/logo.png')} />
          <View style={styles.text}> 
            <Text style={styles.greetings}>
              Olá :)
            </Text>
            <Text style={styles.instructions}>
              Bem vinda(o) ao aplicativo de caronas da UFRJ. 
              O acesso é restrito a usuária(o)s vinculada(o)s à Universidade. 
              Para continuar, clique aqui para obter sua chave de acesso, usando seu login da Intranet UFRJ. 
            </Text>
            <TextInput
              style={[appStyles.input, { textAlign: 'center' } ]}
              editable
              placeholder='Sua identificação aqui'
              onChangeText={(id) => this.setState({id})}
              value={this.state.id}
            />
            <TextInput
              style={[appStyles.input, { textAlign: 'center' } ]}
              editable
              placeholder='Sua chave aqui'
              onChangeText={(key) => this.setState({key})}
              value={this.state.key}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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