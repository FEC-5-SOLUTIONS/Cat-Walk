import React, { useState } from 'react';
import axios from 'axios';
import Photos from './photos';
import Stars from '../../Shared/StarsUni';
import styles from '../Ratings.module.css';

function ReviewListItem({ review }) {

  const [helpBool, setHelpBool] = useState(false);
  const [reportBool, setReportBool] = useState(false);

  let dateString = 'date';
  if (review.date) {
    const convertedDate = new Date(review.date);
    dateString = convertedDate.toDateString();
  }

  function helpful() {
    // make axsios put request here
    if (!helpBool) {
      const id = review.review_id
      axios.put(`/api/reviews/${id}`)
        .then((res) => {
          //console.log('success');
          setHelpBool(true);
        });
    }
  }

  function report() {
    // make axsios put request here
    if (!reportBool) {
      const id = review.review_id
      axios.put(`/api/report/${id}`)
        .then((res) => {
          //console.log('success');
          setReportBool(true);
        });
    }
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
      <div className={styles.help}>
        <div>Helpful?</div>
        <div onClick={helpful}>{`Yes (${review.helpfulness}) | `}</div>
        <div onClick={report}>No</div>
      </div>
    </div>
  );
}

export default ReviewListItem;
