import React from 'react';
import { List } from '../styles';

function TodoList(props) {
  const todoItems = props.todos.map((todo) => {
    function handleChange() {
      props.deleteTodos(todo.id);
    }
    return (
      <li key={todo.id}>
        <input type="checkbox" onChange={handleChange}/>
        {todo.text}
      </li>
    );
  });
  return (
    <div style={{maxWidth: "40em", margin: "auto", textAlign: "left"}}>
      <List>{todoItems}</List>
    </div>
  );
}

export default TodoList;