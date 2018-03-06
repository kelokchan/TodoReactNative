import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore();

const jsx = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent('TodoPrac', () => jsx);
