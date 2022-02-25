import React, { useState } from 'react';
import ReviewList from './ReviewList';
// import Modal from '../Modal/Modal';
import styles from '../Ratings.module.css';

function ReviewsList({
  reviews, sort, handleChange, text, click, setModal, slice, setUrl, filter

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
      <div className={styles.reviewsContainer} id="reviewsContainer">
        <div>
          {`displaying ${reviewNum} of ${reviews.results.length} Reviews from Page 1. Sorted by `}
          <select value={sort} onChange={handleChange}>
            <option value="relevant">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className={styles.reviewList} id="reviewList">
          <ReviewList data={reviews.results.slice(0, slice)} setUrl={setUrl} />
          {/* {!viewMore ? <ReviewList data={reviews.results.slice(0, 2)} /> :
            <ReviewList data={reviews.results} />} */}
        </div>
        {reviews.results.length <= 2 ? (
          <div className={styles.buttons} id="RRbuttons">
            <button
              onClick={() => { setModal(true); }}
              className={styles.soloAddButton}
              type="button"
              id="soloAddButton"
            >
              Add A review!
            </button>
          </div>
        )
          : (
            <div className={styles.buttons} id="RRbuttons">
              <button onClick={click} className={styles.viewButton} type="button" id="ViewButton">{text}</button>
              <button onClick={() => { setModal(true); }} className={styles.addButton} type="button" id="addButton">Add A review! </button>
            </div>
          )
        }
      </div>
    );
}

export default ReviewsList;
