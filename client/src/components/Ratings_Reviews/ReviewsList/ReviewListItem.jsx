import React from 'react';
import Photos from './photos';
import styles from '../Ratings.module.css';

function ReviewListItem({review}) {
  return (
    <div>
      <div>{review.rating} {review.date.slice(0,10)}</div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>posted by : {review.reviewer_name}</div>
      {review.photos.length > 0 ?
      <Photos pics = {review.photos} /> : null}
      {review.response ?
      <div>{review.response}</div> : null}
      <div>helpful?({review.helpfulness})</div>
    </div>
  );
}

export default ReviewListItem;
