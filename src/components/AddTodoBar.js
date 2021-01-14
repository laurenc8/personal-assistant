import React from 'react';
import { AddTodo, AddButton, InputBox } from '../styles';

function AddTodoBar(props) {
  function handleSubmit(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    props.addTodos(formdata.getAll("item")[0]);
    event.target.reset();
  }
  return (
    <div>
      <AddTodo onSubmit={handleSubmit}>
        <InputBox type="text" name="item" style={{fontFamily: "Literata"}}/>
        <AddButton type="submit" value="add todo" style={{fontFamily: "Literata"}}/>
      </AddTodo>
    </div>
  );
}

export default AddTodoBar;