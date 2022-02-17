import React from 'react';
import Stars from '../../Shared/StarsUni';
import Recommended from './recommended';
import RatingBars from './RatingBars';
import Characteristics from './Characteristics';
import getAvg from '../../utils/getAvg';
import styles from '../Ratings.module.css';

function Stats({ metaData }) {
  // if (metadata) {
  //   console.log('fxn test here: ', getAvg(metaData.ratings))
  // }
  // const a = metaData;
  let average = 0;
  if (!Array.isArray(metaData)) {
    average = getAvg(metaData.ratings);
  }
  return (
    <div className={`${styles.statsTab} ${styles.statsFlex}`}>
      <div className={styles.statsStars}>
        {String(average).slice(0, 4)} <Stars average = {average}/>
      </div>
      <div className={styles.statsRec}>
        <Recommended metaData={metaData} />
      </div>
      <div className={styles.statsBars}>
        <RatingBars metaData={metaData} />
      </div>
      <div className={styles.statsFit}>
        <Characteristics metaData={metaData} />
      </div>
    </div>
  );
}

export default Stats;
