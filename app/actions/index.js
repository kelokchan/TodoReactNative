import { counter, todos } from './actionTypes';

/**
 * COUNTER REDUCER ACTION CREATOR 
 */

export const increaseAction = (step) => ({
  type: counter.INCREMENT,
  step
});

export const decreaseAction = (step) => ({
  type: counter.DECREMENT,
  step
});

/**
 * TODO REDUCER ACTION CREATOR
 */

export const addItem = (text) => ({ 
  type: todos.ADD_ITEM, 
  payload: text 
});

export const removeItem = (index) => ({ 
  type: todos.REMOVE_ITEM, 
  payload: index 
});

export const toggleItemCompleted = (index) => ({ 
  type: todos.TOGGLE_ITEM_COMPLETED, 
  payload: index 
});

export const removeCompleted = () => ({ 
  type: todos.REMOVE_COMPLETED
});

