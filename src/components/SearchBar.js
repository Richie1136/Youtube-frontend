import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')
  const onInputChange = (event) => {
    setTerm(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term)
  };
  return (
    <div className="search-bar ui segment" style={{ 'width': '86.5%' }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <input
            style={{ 'backgroundColor': '#121212', 'color': 'white', 'width': '100%' }}
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder='Search'
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar