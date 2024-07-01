import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wikiData } from './data/wikiData';
import Button from './Button';
import styles from './WikiPage.module.css';

const WikiPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = wikiData.find((a) => a.id === parseInt(id));

  if (!article) return <div>Article not found</div>;

  const renderContent = (content) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.includes('\n')) {
        const lines = paragraph.split('\n');
        // const firstLine = lines[0];
        const restLines = lines.slice(0);

        return (
          <div key={index} className={styles.section}>
            {/* <p className={styles.paragraph}>{firstLine}</p> */}
            <ul className={styles.list}>
              {restLines.map((item, i) => (
                <li key={i}>{item.replace(/^[- d] /, '')}</li>
              ))}
            </ul>
          </div>
        );
      }
      return <p key={index} className={styles.paragraph}>{paragraph}</p>;
    });
  };

  return (
    <div className={styles.wikiPage}>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <h2 className={styles.title}>{article.title}</h2>
      <div className={styles.content}>{renderContent(article.content)}</div>
    </div>
  );
};

export default WikiPage;