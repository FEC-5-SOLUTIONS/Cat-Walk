import React from 'react';
import Stars from '../../Shared/Stars';
import Recommended from './recommended';
import RatingBars from './RatingBars'
import styles from '../Ratings.module.css';

function Stats({ metaData }) {
  return (
    <div className={`${styles.statsTab} ${styles.statsFlex}`}>
      <div className={styles.statsAvg}>
        #
      </div>
      <div className={styles.statsStars}>
        <Stars metaData={metaData} />
      </div>
      <div className={styles.statsRec}>
        <Recommended metaData={metaData} />
      </div>
      <div className={styles.statsBars}>
        <RatingBars metaData={metaData} />
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
