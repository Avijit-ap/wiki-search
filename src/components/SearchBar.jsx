import React, { useState } from 'react';
import Button from './Button';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search wiki..."
        className={styles.input}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;