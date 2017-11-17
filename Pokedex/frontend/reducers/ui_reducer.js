import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import pokeDisplay from './poke_disp_reducer';

export default combineReducers({
  pokeDisplay
});
