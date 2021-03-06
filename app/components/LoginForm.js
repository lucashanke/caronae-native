import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';

import appStyles from '../styles';
import login from '../services/caronae';
import { signIn, startLoading, stopLoading } from '../actions';

const unauthorizedAlert = () => {
  Alert.alert(
    'Ops!',
    'Chave não autorizada. Verifique se a mesma foi digitada corretamente e tente de novo.',
    [{ text: 'OK' }],
  );
};

const saveUserData = (id, token) => {
  AsyncStorage.setItem('@CaronaeStore:id', id);
  AsyncStorage.setItem('@CaronaeStore:token', token);
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      token: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(startLoading());
    const { id, token } = this.state;

    login(id, token).then((response) => {
      this.props.dispatch(stopLoading());
      if (response.data.user !== undefined) {
        this.props.dispatch(signIn(response.data.user, token));
        saveUserData(id, token);
        return;
      }
      unauthorizedAlert();
    }).catch(() => {
      this.props.dispatch(stopLoading());
      unauthorizedAlert();
    });
  }

  render() {
    return (
      <View>
        <TextInput
          style={[appStyles.input, { textAlign: 'center' }]}
          placeholder="Sua identificação aqui"
          autoCapitalize="none"
          returnKeyType="next"
          onChangeText={id => this.setState({ id })}
          value={this.state.id}
        />
        <TextInput
          style={[appStyles.input, { textAlign: 'center' }]}
          placeholder="Sua chave aqui"
          autoCapitalize="none"
          returnKeyType="next"
          secureTextEntry
          onChangeText={token => this.setState({ token })}
          value={this.state.token}
        />
        <Button
          style={appStyles.button}
          color="#2b388a"
          onPress={this.handleSubmit}
          title="Acessar"
          disabled={this.state.id === '' || this.state.token === ''}
          accessibilityLabel="Acessar"
        />
      </View>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
