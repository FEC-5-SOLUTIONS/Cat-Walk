import React from 'react';

import styles from './Stars.module.css';

function Stars({ average }) {
  const percentage = (average / 5) * 100;

  return average === 0 ? null : (
    <div>
      <div className={styles.star}>
        ☆☆☆☆☆
        <div className={styles.darkStar}>★★★★★</div>
      </div>
    </div>
  )
}

export default Stars;
