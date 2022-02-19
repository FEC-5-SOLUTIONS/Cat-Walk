import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import Modal from './Modal/Modal';
import getAvg from '../utils/getAvg';
import styles from './Ratings.module.css';

function RatingsAndReviews() {
  const [modal, setModal] = useState(false);
  const [meta, setMeta] = useState([]);
  const [charObj, setCharObj] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [avg, setAverage] = useState(0);
  const [sort, setSort] = useState('relevant');
  const [productID, setProductID] = useState(40348);
  const [viewMore, setViewMore] = useState(false);
  const [buttonText, setButtonText] = useState('View More');

  useEffect(() => {
    axios.get(`api/reviews/meta/${productID}`)
      .then((res) => {
        setMeta(res.data);
        setCharObj(res.data.characteristics);
      })
      .catch((err) => {
        // console.log('err');
      });
  }, [productID]);

  useEffect(() => {
    if (!Array.isArray(meta)) {
      setAverage(getAvg(meta.ratings));
    }
  }, [meta]);

  useEffect(() => {
    axios.get(`api/all_reviews/${sort}/${productID}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        // console.log('err');
      });
  },[productID, sort]);

  const handleChange = (e) => {
    setSort(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    let newText = 'View More';
    if (buttonText === 'View More') {
      newText = 'View Less';
    }
    setViewMore(!viewMore);
    setButtonText(newText);
  };

  return (
    <div className={styles.topLevel}>
      <div className={styles.reviewRatingsContainer}>
        <Stats meta={meta} average = {avg} />
        <ReviewsList
          reviews={reviews}
          sort={sort}
          handleChange={handleChange}
          text={buttonText}
          viewMore={viewMore}
          click={handleButtonClick}
          setModal={setModal}
        />
      </div>
      {modal ? <Modal setModal={setModal} charObj={charObj} productID={productID} /> : null}
    </div>
  );
}

export default RatingsAndReviews;
