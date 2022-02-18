import React from 'react';
import ReviewListItem from './ReviewListItem';
import styles from '../Ratings.module.css';

function ReviewList({ data }) {
  let datas = [];
  if (data) {
    datas = data;
    // console.log('datas: ', data);
  }
  return !data ? null : (
    <div className={styles.reviewListContainer}>
      {datas.map((review) =>
      <ReviewListItem review={review} />
      )}
    </div>
  );
}

export default ReviewList;

// {datas.map((review)=>{
//   <ReviewListItem />;
//   console.log('review: ', review);
// })}