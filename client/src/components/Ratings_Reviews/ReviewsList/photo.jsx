import React from 'react';
import styles from '../Ratings.module.css';

function Photos({ pic, setUrl}) {
  // console.log('pic: ', pic.url);
  function handleClick() {
    setUrl(pic.url);
  }
  return (
    <button onClick={handleClick} type="button" className={styles.imageButton} id="imageButton">
      <img
        src={pic.url}
        alt=" pic here"
        className={styles.photo}
      />
    </button>
  );
}

export default Photos;
