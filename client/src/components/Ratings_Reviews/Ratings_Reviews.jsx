import React from 'react';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import styles from './Ratings.module.css';

function RatingsAndReviews() {
  return (
    <div className={styles.redText}>
      Hello from RatingsAndReviews in red
      <Stats />
      <ReviewsList />
    </div>
  );
}

export default RatingsAndReviews;
