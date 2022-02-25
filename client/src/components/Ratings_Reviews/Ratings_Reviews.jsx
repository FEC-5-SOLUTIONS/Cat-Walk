import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import Modal from './Modal/Modal';
import PicModal from './Modal/PicModal';
import styles from './Ratings.module.css';

function RatingsAndReviews({ product, meta, avg }) {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [filter, setFilter] = useState([]);
  const [inFilter, setInFilter] = useState([]);
  const [buttonText, setButtonText] = useState('View More');
  const [slice, setSlice] = useState(2);
  const [modalUrl, setModalUrl] = useState(null);

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

  const filterFunc = (rating) => {
    console.log('enter filter func');
    // console.log(rating);
    const filterArray = filter.slice();
    const inFilterArray = inFilter.slice();
    let check = false;
    reviews.results.forEach((result) => {
      // console.log('result.rating', result.rating);
      // console.log('rating', rating);
      if (Number(result.rating) === Number(rating)) {
        filterArray.push(result);
        check = true;
      }
    });
    if (check) {
      inFilterArray.push(rating);
      setInFilter(inFilterArray);
    }
    setFilter(filterArray);
  };

  const setUrl = (url) => {
    setModalUrl(url);
  };
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  let passedData = {};
  if (filter.length > 0) {
    passedData = { results: filter };
  } else {
    passedData = reviews;
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    const diff = passedData.results.length - slice;
    if (diff > 2) {
      setSlice(slice + 2);
    } else if (diff <= 2 && diff > 0) {
      setSlice(slice + 2);
      setButtonText('Collapse');
    } else {
      setSlice(2);
      setButtonText('View More');
    }
  };

  return !product ? <div>Ratings and Reviews loading...</div> : (
    <div className={styles.topLevel} id="topLevel">
      <h1>Ratings & Reviews</h1>
      <div className={styles.reviewRatingsContainer} id="reviewRatingsContainer">
        <Stats
          meta={meta}
          average={avg}
          filterFunc={filterFunc}
          inFilter={inFilter}
          setInFilter={setInFilter}
          setFilter={setFilter}
        />
        <ReviewsList
          reviews={passedData}
          sort={sort}
          handleChange={handleChange}
          text={buttonText}
          click={handleButtonClick}
          setModal={setModal}
          slice={slice}
          setUrl={setUrl}
          filter={filter}
        />
        {modal
          ? (
            <Modal
              setModal={setModal}
              charObj={meta.characteristics}
              productID={product.id}
              name={product.name}
            />
          )
          : null}
        {!modalUrl ? null : <PicModal url={modalUrl} setModalUrl={setModalUrl} />}
      </div>
    </div>
  );
}

export default RatingsAndReviews;
