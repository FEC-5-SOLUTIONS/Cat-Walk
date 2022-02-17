import React from 'react';

import styles from './Stars.module.css';

function Stars({ average }) {
  const percentage = (average / 5) * 100;

  return average === 0 ? null : (
    <div className={styles.star}>
      ☆☆☆☆☆
      <div style={{ width: `${percentage}%` }} className={styles.darkStar}>★★★★★</div>
    </div>
  )
}

export default Stars;

    // <div className={styles.starContainer}>
    //   <div className={styles.star}>☆☆☆☆☆</div>
    //   <div className={styles.darkStar}>★★★★★</div>
    // </div>