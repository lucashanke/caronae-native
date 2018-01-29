import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Text, View } from 'react-native';

import Login from './app/screens/Login';

class App extends Component {
  render() {
    if (this.props.signedIn){
      return (
        <View>
          <Text>
            Logged In
          </Text>
        </View>
      );
    }
    return (
      <Login />
    );
  }
}

function mapStateToProps(state) {
  return {
    signedIn: state.signedIn,
  };
}

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(App);



