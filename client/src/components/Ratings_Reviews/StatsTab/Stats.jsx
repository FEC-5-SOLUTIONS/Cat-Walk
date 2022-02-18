import React, { useState } from 'react';
import Stars from '../../Shared/StarsUni';
import Recommended from './recommended';
import RatingBars from './RatingBars';
import Characteristics from './Characteristics';
import getAvg from '../../utils/getAvg';
import styles from '../Ratings.module.css';

function Stats({ meta, average }) {
  return !meta ? null : (
    <div className={`${styles.statsTab} ${styles.statsFlex}`}>
      <div className={styles.statsStars}>
        {String(average).slice(0, 4)}
        <Stars average={average} />
      </div>
      <div className={styles.statsRec}>
        <Recommended meta={meta} />
      </div>
      {/* <div className={styles.statsBars}>
        <RatingBars meta={meta} />
      </div>
      <div className={styles.statsFit}>
        <Characteristics meta={meta} />
      </div> */}
    </div>
  );
}


  export default Stats;
    // <div className={`${styles.statsTab} ${styles.statsFlex}`}>
    //   <div className={styles.statsStars}>
    //     {String(average).slice(0, 4)}
    //     <Stars average={average} />
    //   </div>
    //   <div className={styles.statsRec}>
    //     <Recommended meta={meta} />
    //   </div>
    //   <div className={styles.statsBars}>
    //     <RatingBars meta={meta} />
    //   </div>
    //   <div className={styles.statsFit}>
    //     <Characteristics meta={meta} />
    //   </div>
    // </div>
