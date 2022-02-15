import React from 'react';
import Stars from '../../Shared/Stars';
import styles from '../Ratings.module.css';

function Stats({ metaData }) {
  return (
      <div className={`${styles.statsTab} ${styles.statsFlex}`}>
        <div className={styles.statsAvg}>
          #
        </div>
        <div className={styles.statsStars}>
          <Stars ratings={metaData.ratings} />
        </div>
        <div className={styles.statsRec}>
          recomended
        </div>
        <div className={styles.statsBars}>
          rating barss
        </div>
        <div className={styles.statsFit}>
          fit
        </div>
        <div className={styles.statsFit}>
          comfort
        </div>
      </div>
  );
}

export default Stats;
