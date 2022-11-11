import { combineReducers } from 'redux';
import todoReducer from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter,
});

export default rootReducer;
