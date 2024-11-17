import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './SearchBar.scss';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <label htmlFor="search-input" className="sr-only">Search</label>
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        aria-label={placeholder}
      />
      <button
        className="search-button"
        onClick={handleSearch}
        aria-label="Search"
      >
        <span className="search-icon" aria-hidden="true">
          <CiSearch />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
