import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WikiList.module.css';

const WikiList = ({ articles }) => {
  return (
    <ul className={styles.wikiList}>
      {articles.map((article) => (
        <li key={article.id} className={styles.wikiItem}>
          <Link to={`/wiki/${article.id}`} className={styles.wikiLink}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default WikiList;