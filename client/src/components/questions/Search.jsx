import React from 'react';
import styles from './Questions.module.css';

export default function Search() {
  return (
    <form className={styles.form}>
      <input
        className={styles.search_field}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      {/* <button
        className={styles.search_button}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
          alt="search"
        />
      </button> */}
    </form>
  );
}
