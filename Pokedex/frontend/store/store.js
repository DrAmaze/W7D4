import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import funkyThunk from '../middleware/thunk';

const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(funkyThunk, logger)
  )
);

export default configureStore;
