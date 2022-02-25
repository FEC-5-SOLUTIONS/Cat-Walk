import React from 'react';
import Photo from './photo';
import styles from '../Ratings.module.css';

function Photos( {pics, setUrl } ) {
  return (
    <div className={styles.photoList} id="photoList">
      {pics.map((pic) => <Photo pic={pic} setUrl={setUrl} />)}
    </div>
  );
}

export default Photos;
