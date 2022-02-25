import React from 'react';
import styles from '../Ratings.module.css';

function Bar({ char, array, rating }) {
  const col = Math.round(rating);
  return (
    <div className={styles.reBar}>
      <div style={{ gridColumn: `${col}` }}>
        {char}
      </div>
      <div className={styles.BarHolders}>
        <div className={styles.unitGrid}>
          <div style={{
            gridColumn: `${col}`,
            fontSize: '25px',
            color: 'green' }}>🔻</div>
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