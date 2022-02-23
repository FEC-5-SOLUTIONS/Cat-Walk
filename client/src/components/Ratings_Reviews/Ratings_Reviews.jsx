import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import Modal from './Modal/Modal';
import styles from './Ratings.module.css';

function RatingsAndReviews({ product, meta, avg }) {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [viewMore, setViewMore] = useState(false);
  const [buttonText, setButtonText] = useState('View More');

  useEffect(() => {
    if (product) {
      axios.get(`api/all_reviews/${sort}/${product.id}`)
        .then((res) => {
          setReviews(res.data);
        })
        .catch((err) => {
          // console.log('err');
        });
    }
  }, [product, sort]);

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

  return !product ? <div>Ratings and Reviews loading...</div> : (
    <div className={styles.topLevel}>
      <div className={styles.reviewRatingsContainer}>
        <Stats meta={meta} average={avg} />
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
      { modal
        ? (
          <Modal
            setModal={setModal}
            charObj={meta.characteristics}
            productID={product.id}
            name={product.name}
          />
        )
        : null}
    </div>
  );
}

export default RatingsAndReviews;
