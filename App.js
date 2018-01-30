import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Text, View } from 'react-native';

import Login from './app/screens/Login';
import Loading from './app/components/Loading';

const App = (props) => {
  const screen = props.signedIn ? <View><Text>Logged In</Text></View> : <Login />;
  const loading = props.loading ? <Loading /> : null;

  return ([screen, loading]);
}

const mapStateToProps = (state) => ({
  signedIn: state.signedIn,
  loading: state.loading,
});

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
}

export default connect(mapStateToProps)(App);



