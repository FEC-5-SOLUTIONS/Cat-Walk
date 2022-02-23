import React from 'react';
import styles from '../Ratings.module.css';

function Bar({ char, array, rating }) {
  const percentage = (rating / 5) * 100;
  return (
    <div className={styles.reBar}>
      <div className={styles.chaName}>
        {char}
      </div>
      <div className={styles.BarHolders}>
        <div>
          <div>🔻</div>
        </div>
        <div className={styles.grayBar} />
      </div>
      <div className={styles.charArrayHolder}>
        <div>{array[0]}</div>
        <div>{array[1]}</div>
        <div>{array[2]}</div>
      </div>
    </div>
  )
}

export default Bar;
// ?<div className={styles.marginBar}>🔻</div>