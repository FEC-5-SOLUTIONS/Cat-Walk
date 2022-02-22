import React from 'react';
import axios from 'axios';
import Photos from './photos';
import Stars from '../../Shared/StarsUni';
import styles from '../Ratings.module.css';

function ReviewListItem({ review }) {
  let dateString = 'date';
  if (review.date) {
    const convertedDate = new Date(review.date);
    dateString = convertedDate.toDateString();
  }

  function helpful() {
    // make axsios put request here
    const id = review.review_id
    axios.put(`/api/reviews/${id}`)
      .then((res) => {
        console.log('success');
      })
  }

  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewTopRow}>
        <div style={{ width: 'fit-content' }}>
          <Stars average={review.rating} />
        </div>
        {dateString}
      </div>
      <div className={styles.reviewSum}>{review.summary}</div>
      <div className={styles.reviewBod}>{review.body}</div>
      <div>posted by : {review.reviewer_name}</div>
      {!review.recommend ? null : <div>✓ Recommended!</div>}
      {review.photos.length > 0 ?
        <Photos pics={review.photos} /> : null}
      {review.response ?
        <div>{review.response}</div> : null}
      <div onClick={helpful}>helpful?({review.helpfulness})</div>
    </div>
  );
}

export default ReviewListItem;
