import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import App from './App';
import reducers from './app/reducers';

const initialState = {
  signedIn: false,
};

const store = createStore(reducers, initialState);

class CaronaeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Caronae', () => CaronaeApp);
