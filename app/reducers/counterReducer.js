import { counter } from '../actions/actionTypes';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counter.INCREMENT:
      return ++state;
    case counter.DECREMENT:
      return --state;
    default:
      return state;
  }
}

export default counterReducer;