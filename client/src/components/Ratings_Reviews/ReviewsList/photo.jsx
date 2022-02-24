import React from 'react';
import styles from '../Ratings.module.css';

function Photos({ pic, setUrl}) {
  // console.log('pic: ', pic.url);
  function handleClick() {
    setUrl(pic.url);
  }
  return (
    <img
      src={pic.url}
      alt=" pic here"
      className={styles.photo}
      onClick={handleClick}
    />
  );
}

export default Photos;
