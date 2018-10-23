import { createStore, applyMiddleware, compose } from 'redux';
import { offline, createOffline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import rootReducer from '../reducers';
const preloadedState = {};
const { middleware, enhanceReducer, enhanceStore } = createOffline(offlineConfig);
// const store = createStore(rootReducer);
const customMiddleware = store => next => action => {
  console.log('mmmmaction::', action);
  console.log('mmmmstore::', store);
  return next(action);
};

function tickMiddleware(store) {
  return next => action => {
    console.log('ticker:::', action);
    if (action.type === 'Offline/SCHEDULE_RETRY') {
      console.log('ticking starts');
      const intervalId = setInterval(() => {
        store.dispatch({ type: 'TICK' });
      }, 1000);
      setTimeout(() => clearInterval(intervalId), action.payload.delay);
    }
    return next(action);
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(customMiddleware, middleware, tickMiddleware),
    offline(offlineConfig)
  )
);
export default store;
