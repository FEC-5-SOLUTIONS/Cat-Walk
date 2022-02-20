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
    <div>
      <div>
        <div style={{ width: 'fit-content' }}>
          <Stars average={review.rating} />
        </div>
        {dateString}
      </div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>posted by : {review.reviewer_name}</div>
      {review.photos.length > 0 ?
        <Photos pics={review.photos} /> : null}
      {review.response ?
        <div>{review.response}</div> : null}
      <div onClick={helpful}>helpful?({review.helpfulness})</div>
    </div>
  );
}

export default ReviewListItem;
