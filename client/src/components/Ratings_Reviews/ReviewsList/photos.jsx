import React from 'react';
import Photo from './photo';
import styles from '../Ratings.module.css';

function Photos( {pics} ) {
  return (
    <div className={styles.photoList}>
      {pics.map((pic) => <Photo pic={pic} />)}
    </div>
  );
}

export default Photos;
