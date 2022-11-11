import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import todosVisibilityFilter from '../redux/selectors';

const List = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = todosVisibilityFilter(todos, visibilityFilter);

  return (
      <ul className="todo-container">
        {visibilityFilter === 'ALL' || visibilityFilter === 'ACTIVE' ? <h3 className="todo-container__pending">In-progress</h3>
          : ''}

        {filterTodos.length ? filterTodos.map(card => <Card key={card.id} card={card} />)
          : ''}

        {!filterTodos.length && (visibilityFilter === 'ALL' || visibilityFilter === 'ACTIVE') ? <p className="todo-container__empty-todo">Nothing todo here...</p>
          : ''}

        {visibilityFilter === 'COMPLETED' || visibilityFilter === 'ALL' ? <h3 className="todo-container__finished">Finished</h3>
          : ''}
      </ul>
  );
};

export default List;
