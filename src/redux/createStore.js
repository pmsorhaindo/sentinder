import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

export default function(initialData) {
  const middlewares = [thunk];
  let finalCreateStore;

  const { persistState } = require('redux-devtools');
  const { DevTools } = require('./createDevTools');

  finalCreateStore = compose(
      applyMiddleware(...middlewares),
      DevTools.instrument(),
      persistState((typeof window !== 'undefined') ? window.location.href.match(/[?&]debug_session=([^&]+)\b/) : null)
      );

  return finalCreateStore(createStore)(reducer, initialData);
}
