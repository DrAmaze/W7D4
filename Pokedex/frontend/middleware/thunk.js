const funkyThunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

export default funkyThunk;
