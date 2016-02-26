import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createStore from './redux/createStore';
import { Provider } from 'react-redux';

const store = createStore(window.__data);
const { DevTools } = require('./redux/createDevTools');

ReactDOM.render(
      <DevTools store={store} />,
      document.getElementById('tools')
      );

// Render the main component into the dom
ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>),
  document.getElementById('master-root'));
