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
  const [maxView, setMaxView] = useState(false);
  const [buttonText, setButtonText] = useState('View More');
  const [slice, setSlice] = useState(2);

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
    // let newText = 'View More';
    // if (buttonText === 'View More') {
    //   newText = 'View Less';
    // }
    // setViewMore(!viewMore);
    // setButtonText(newText);

    // let newSlice=slice + 2;
    const diff = reviews.results.length - slice;
    if (diff > 2) {
      setSlice(slice + 2);
    } else if (diff <= 2 && diff > 0) {
      setSlice(slice + 2);
      setButtonText('Collapse');
    }else{
      setSlice(2);
      setButtonText('View More');
    }
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
          maxView={maxView}
          click={handleButtonClick}
          setModal={setModal}
          slice={slice}
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
