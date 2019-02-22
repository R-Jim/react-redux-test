import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FormA from './containers/FormA';
import configureStore from './configureStore';
import './App.css';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormA />
      </Provider>
    );
  }
}
