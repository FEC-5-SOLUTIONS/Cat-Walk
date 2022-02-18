import React from 'react';
import ReviewList from './ReviewList';
import styles from '../Ratings.module.css';

function ReviewsList({
  reviews, sort, handleChange, text, viewMore, click
}) {
  return !reviews.results ?
    <div>nothing to see</div> : (
      <div className={styles.reviewsContainer}>
        <div>
          {reviews.results.length}
          Reviews sorted by
          <select value={sort} onChange={handleChange}>
            <option value="relevant">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className={styles.reviewList}>
          {!viewMore ? <ReviewList data={reviews.results.slice(0, 2)} /> :
          <ReviewList data={reviews.results} />}
        </div>
        <div>
          <button onClick={click}>{text}</button>
        </div>

      </div>
    );
}

export default ReviewsList;
