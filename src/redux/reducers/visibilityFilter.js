import { SET_VISIBILITY_FILTER, VISIBILITY_FILTER } from '../actions/actionTypes';

const visibilityFilter = (state = VISIBILITY_FILTER.ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
