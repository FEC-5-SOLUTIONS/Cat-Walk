import React from 'react';
import styles from '../Ratings.module.css';

function Rating({ rating, data, filterFunc, totalCount }) {
  const percentage = (Number(data[rating]) / totalCount) * 100;
  // console.log(percentage);
  return !rating ? null : (
    <div className={styles.barHolder} id="barHolder">
      <div className={styles.barNumber} id="barNumber">
        <button
          className={styles.filterButton}
          onClick={() => filterFunc(rating)}
          type="button"
          id="filterButton"
        >
          <div className={styles.Numerobutton} id="buttonNumero">{rating}</div>
        </button>
      </div>
      <div className={styles.barBar} id="barBar">
        <div style={{
          background: 'green',
          width: `${percentage}%`,
          height: '100%',
        }}
        > </div>

      </div>
      <div>
        {`(${data[rating]})`}
      </div>
    </div>
  );
}

export default Rating;
