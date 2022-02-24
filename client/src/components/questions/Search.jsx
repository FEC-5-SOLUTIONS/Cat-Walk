import React from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';

export default function Search({ handleClick }) {
  function handleInput(e) {
    handleClick(e.target.value);
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.search_field}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={handleInput}
      />
    </form>
  );
}
Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
