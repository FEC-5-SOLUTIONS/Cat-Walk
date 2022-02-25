import React, { useState } from 'react';
import ReviewListItem from './ReviewListItem';
import styles from '../Ratings.module.css';

function ReviewList({ data, setUrl }) {
  // const [viewPic, setViewPic] = useState(false);
  let datas = [];
  if (data) {
    datas = data;
    // console.log('datas: ', data);
  }
  return !data ? null : (
    <div className={styles.reviewListContainer} id="reviewListContainer">
      {datas.map((review) => <ReviewListItem review={review} setUrl={setUrl} />)}
    </div>
  );
}

export default ReviewList;
