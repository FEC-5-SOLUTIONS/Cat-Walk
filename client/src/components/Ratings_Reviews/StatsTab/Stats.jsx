import React, { useState } from 'react';
import Stars from '../../Shared/StarsUni';
import Recommended from './recommended';
import RatingBars from './RatingBars';
import Characteristics from './Characteristics';
// import getAvg from '../../utils/getAvg';
import styles from '../Ratings.module.css';

function Stats({
  meta, average, filterFunc, inFilter, setInFilter, setFilter
}) {
  return !meta ? null : (
    <div className={styles.statsTab} id="statsTab">
      <div className={styles.statsStars} id="statsStars">
        {String(average).slice(0, 4)}
        <Stars average={average} />
      </div>
      <div className={styles.statsRec} id="statsRec">
        <Recommended meta={meta} />
      </div>
      <div className={styles.statsBars} id="statsBars">
        <RatingBars
          meta={meta}
          filterFunc={filterFunc}
          inFilter={inFilter}
          setInFilter={setInFilter}
          setFilter={setFilter}
        />
      </div>
      <div className={styles.statsFit} id="statsFit">
        <Characteristics meta={meta.characteristics} />
      </div>
    </div>
  );
}
export default Stats;
