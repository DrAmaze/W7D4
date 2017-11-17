import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveSinglePokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchSinglePokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.dispatch = store.dispatch;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  ReactDOM.render(<Root store={store}/>, root);
});
