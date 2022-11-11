import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input maxLength="50" type="text" onChange={handleChange} value={input} placeholder="Enter task..." className="form__description" required />
      <input type="submit" className="form__btn" value="Add" />
    </form>
  );
};

export default Form;
