import React from 'react';
import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../redux/actions/actionTypes';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
   <div className="filter__container">
    {Object.keys(VISIBILITY_FILTER).map((filterkey, i) => {
      const currentFilter = VISIBILITY_FILTER[filterkey];

      return (
      <button className="filter__btn" key={i} onClick={() => dispatch(setFilter(currentFilter))}>
        {currentFilter}
      </button>
      );
    })}
   </div>
  );
};

export default Filter;
