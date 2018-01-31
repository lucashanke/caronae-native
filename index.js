import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './app/reducers';

const initialState = {
  id: undefined,
  token: undefined,
  user: undefined,
  loading: false,
};

const store = createStore(reducers, initialState);

const CaronaeApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('Caronae', () => CaronaeApp);
