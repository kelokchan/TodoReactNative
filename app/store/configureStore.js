import { applyMiddleware, combineReducers } from 'redux';
import allReducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import counterReducer from '../reducers/counterReducer';
import todoReducer from '../reducers/todoReducer';
import Reactotron from 'reactotron-react-native'

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  count: counterReducer,
  todos: todoReducer
}));

export default () => {
  const store = Reactotron.createStore(
    persistedReducer,
    applyMiddleware(...middleware),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
