import merge from 'lodash/merge';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      const items = action.payload.items;
      return merge({}, state, items);
    default:
      return state;
  }
};

export default itemsReducer;
