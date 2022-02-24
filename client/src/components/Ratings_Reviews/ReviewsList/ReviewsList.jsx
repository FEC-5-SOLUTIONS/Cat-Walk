import React, { useState } from 'react';
import ReviewList from './ReviewList';
// import Modal from '../Modal/Modal';
import styles from '../Ratings.module.css';

function ReviewsList({
  reviews, sort, handleChange, text, maxView, click, setModal, slice

}) {
  let reviewNum;
  if (reviews.results) {
    if (slice <= reviews.results.length) {
      reviewNum = slice;
    } else {
      reviewNum = reviews.results.length
    }
  }
  return !reviews.results ?
    <div>nothing to see</div> : (
      <div className={styles.reviewsContainer}>
        <div>
          {`displaying ${reviewNum} of ${reviews.results.length} Reviews. Sorted by `}
          <select value={sort} onChange={handleChange}>
            <option value="relevant">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className={styles.reviewList}>
          <ReviewList data={reviews.results.slice(0, slice)} />
          {/* {!viewMore ? <ReviewList data={reviews.results.slice(0, 2)} /> :
            <ReviewList data={reviews.results} />} */}
        </div>
        {reviews.results.length <= 2 ? (
          <div className={styles.buttons}>
            <button
              onClick={() => { setModal(true); }}
              className={styles.soloAddButton}
              type="button"
            >
              Add A review!
            </button>
          </div>
        )
          : (
            <div className={styles.buttons}>
              <button onClick={click} className={styles.viewButton} type="button">{text}</button>
              <button onClick={() => { setModal(true); }} className={styles.addButton} type="button">Add A review! </button>
            </div>
          )
        }
      </div>
    );
}

export default ReviewsList;
