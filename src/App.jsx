import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/ Header';
import SearchBar from './components/SearchBar';
import WikiList from './components/WikiList';
import WikiPage from './components/ WikiPage';
import { wikiData } from './components/data/wikiData';
import styles from './App.module.css';

function App() {
  const [searchResults, setSearchResults] = useState(wikiData);

  const handleSearch = (query) => {
    const results = wikiData.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<WikiList articles={searchResults} />} />
            <Route path="/wiki/:id" element={<WikiPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;