import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../redux/actions';

const Card = ({ card }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');
  const dispatch = useDispatch();

  const { id } = card;
  const { completed } = card;

  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  const handleEditButton = () => setTodoEditing(id);
  const handleEditText = e => setEditingText(e.target.value);
  const handleEditTodo = () => {
    if (editingText) {
      dispatch(editTodo(id, editingText));
    }
    setEditingText('');
    setTodoEditing(null);
  };

  return (
    <li className={`card ${completed ? 'checked' : ''}`}>

      {todoEditing === id ? <input type="text" className="card__edit" onChange={handleEditText} value={editingText} placeholder={`${card.text}...`} />
        : <p className="card__text" onClick={handleToggle}>{card.text}</p>}

      {todoEditing === id ? <button className={`card__btn--save ${completed ? 'hidden' : ''}`} onClick={handleEditTodo}><i className="fas fa-check" /></button>
        : <button className={`card__btn--edit ${completed ? 'hidden' : ''}`} onClick={handleEditButton}><i className="fas fa-pen" /></button>}

      <button className={`card__btn--delete ${completed ? '' : 'hidden'}`} onClick={handleDelete}><i className="fas fa-trash" /></button>
    </li>
  );
};

export default Card;
