import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'



const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('Sports')

  const onInputChange = (event) => {
    setTerm(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term)
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder='Search'
          />
          <i className="fa-solid fa-magnifying-glass">
            <FaSearch />
          </i>
        </div>
      </form>
    </div>
  )
}

export default SearchBar