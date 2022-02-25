import React, { useState } from 'react';
import axios from 'axios';
import Photos from './photos';
import Stars from '../../Shared/StarsUni';
import styles from '../Ratings.module.css';

function ReviewListItem({ review, setUrl }) {
  const [viewMore, setViewMore] = useState(false);
  const [helpBool, setHelpBool] = useState(false);
  const [reportBool, setReportBool] = useState(false);

  let dateString = 'date';
  if (review.date) {
    const convertedDate = new Date(review.date);
    dateString = convertedDate.toDateString();
  }

  function view() {
    setViewMore(!viewMore);
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
    <div className={styles.reviewItem} id="reviewItem">
      <div className={styles.reviewTopRow} id="reviewTopRow">
        <div style={{ width: 'fit-content' }} id="inlineRLI">
          <Stars average={review.rating} />
        </div>
        {dateString}
      </div>
      <div className={styles.reviewSum} id="reviewSum">{review.summary}</div>
      {(viewMore === false && review.body.length > 250) ? (
        <div>
          <div className={styles.reviewBod} id="reviewBod">
            {review.body.slice(0, 250)}
          </div>
          <p onClick={view} className={styles.paraP} id="paraP">expand...</p>
        </div>
      ) : (
        <div className={styles.reviewBod} id="reviewBod">
          {review.body}
        </div>
      )}
      <div>posted by : {review.reviewer_name}</div>
      {!review.recommend ? null : <div>✓ Recommended!</div>}
      {review.photos.length > 0 ?
        <Photos pics={review.photos} setUrl={setUrl} /> : null}
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
