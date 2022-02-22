import React from 'react';
import styles from '../Ratings.module.css';

function Photos( {pic} ) {
  // console.log('pic: ', pic.url);
  return <img src={pic.url} alt=" pic here" className={styles.photo} />;
}

export default Photos;
