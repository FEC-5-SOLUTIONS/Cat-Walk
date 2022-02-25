import React from 'react';
import styles from '../Ratings.module.css';

function Rating({ rating, data, filterFunc, totalCount }) {
  const percentage = (Number(data[rating]) / totalCount) * 100;
  // console.log(percentage);
  return !rating ? null : (
    <div className={styles.barHolder}>
      <div className={styles.barNumber}>
        <button
          className={styles.filterButton}
          onClick={() => filterFunc(rating)}
          type="button"
        >
          {rating}
        </button>
      </div>
      <div className={styles.barBar}>
        <div style={{
          background: 'green',
          width: `${percentage}%`,
          height: '100%',
        }}
        > </div>

      </div>
      <div>
        {`${data[rating]} reviews`}
      </div>
    </div>
  );
}

export default Rating;
