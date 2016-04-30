import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import reducers from './reducers/index';
const store = createStore(reducers);

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}