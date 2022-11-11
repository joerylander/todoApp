import {
  ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO,
} from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload,
      ];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.todo,
          };
        }
        return todo;
      });

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
