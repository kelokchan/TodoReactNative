import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const allReducers = combineReducers({
  count: counterReducer,
  todos: todoReducer,
});

export default allReducers;