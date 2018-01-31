import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, SafeAreaView, AsyncStorage } from 'react-native';

import Login from './app/screens/Login';
import Loading from './app/components/Loading';
import { signIn, startLoading, stopLoading } from './app/actions';
import login from './app/services/caronae';

const fetchUserData = (dispatch) => {
  const idPromise = AsyncStorage.getItem('@CaronaeStore:id');
  const tokenPromise = AsyncStorage.getItem('@CaronaeStore:token');
  Promise.all([idPromise, tokenPromise]).then(([id, token]) => {
    login(id, token).then((response) => {
      if (response.data.user !== undefined) {
        dispatch(signIn(response.data.user, id, token));
        return;
      }
    }).catch(() => {});
  })
}

const App = (props) => {
  fetchUserData(props.dispatch);
  const screen = props.token ? <SafeAreaView><Text>Logged In</Text></SafeAreaView> : <Login />;
  const loading = props.loading ? <Loading /> : null;

  return ([screen, loading]);
};

const mapStateToProps = state => ({
  token: state.token,
  loading: state.loading,
});

App.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(App);

