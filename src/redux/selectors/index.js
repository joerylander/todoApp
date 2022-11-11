import { VISIBILITY_FILTER } from '../actions/actionTypes';

const todosVisibilityFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTER.ACTIVE:
      return todos.filter(todo => !todo.completed);

    case VISIBILITY_FILTER.COMPLETED:
      return todos.filter(todo => todo.completed);

    default:
      return todos;
  }
};

export default todosVisibilityFilter;
