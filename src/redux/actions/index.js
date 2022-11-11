import {
  ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER, DELETE_TODO,
} from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text: todo,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const editTodo = (id, todo) => ({
  type: EDIT_TODO,
  payload: { id, todo },
});

export const setFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});
