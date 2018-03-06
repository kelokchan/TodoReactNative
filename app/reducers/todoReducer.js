import { todos } from '../actions/actionTypes';

const initialState = [
  { label: 'Learn React Native', isCompleted: false },
  { label: 'Write Code', isCompleted: false },
  { label: 'Ship App', isCompleted: false }
];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case (todos.ADD_ITEM):
      return [
        { label: payload, isCompleted: false },
        ...state,
      ];

    case todos.REMOVE_COMPLETED:
      return state.filter((todo) => !todo.isCompleted);

    case todos.REMOVE_ITEM:
      return state.filter((todo, i) => i !== payload);

    case todos.TOGGLE_ITEM_COMPLETED:
      return state.map((todo, i) => {
        if (i === payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        } else {
          return todo;
        }
      });
      
    default:
      return state;
  }
}

export default todoReducer;