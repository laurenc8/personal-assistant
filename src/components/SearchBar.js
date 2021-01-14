import React from 'react';
import { Search, InputBox } from '../styles';

function SearchBar(props) {
  function handleChange(event) {
    event.preventDefault();
    props.searchTodos(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Search onChange={handleChange} onSubmit={handleSubmit}>
        <InputBox type="text" placeholder="search" style={{fontFamily: "Literata"}}/>
      </Search>
    </div>
  );
}

export default SearchBar;