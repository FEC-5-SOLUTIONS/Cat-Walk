import React from 'react';
import Search from './Search';
import styles from './Questions.module.css';

function Questions() {
  return (
    <div className={styles.test}>
      QUESTIONS & ANSWERS
      <Search />
    </div>
  );
}

export default Questions;
