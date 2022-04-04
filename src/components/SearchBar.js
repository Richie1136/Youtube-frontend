import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'



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
    <div className="search-bar ui segment" style={{ 'width': '86.5%', 'backgroundColor': 'rgba(33, 33, 33, 0.98)' }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field" style={{ 'display': 'flex' }}>
          <input
            style={{ 'backgroundColor': '#121212', 'color': 'white', 'width': '95%' }}
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder='Search'
          />
          <i className="fa-solid fa-magnifying-glass" style={{ 'backgroundColor': 'hsla(0, 0%, 100%, 0.08)', 'color': 'white', 'width': '40px' }}>
            <FaSearch style={{ 'display': 'inline-block', 'width': '100%', 'marginTop': '10px' }} />
          </i>
        </div>
      </form>
    </div>
  )
}

export default SearchBar