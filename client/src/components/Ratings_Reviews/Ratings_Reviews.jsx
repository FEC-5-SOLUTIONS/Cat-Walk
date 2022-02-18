import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
// import { MetaContext, ReviewsContext, ProductIDContext, SortContext } from '../Context/reviewsContext';
import { AverageContext } from '../Context/reviewsContext';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import getAvg from '../utils/getAvg';
import styles from './Ratings.module.css';

function RatingsAndReviews() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     meta: [],
  //     reviews: [],
  //     sortBy: 'relevant',
  //     count: 2,
  //     productID: 40346,
  //   };
  //   this.sort = this.sort.bind(this);
  // }
  const [meta, setMeta] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [avg, setAverage] = useState(0);
  const [sort, setSort] = useState('relevant');
  const [productID, setProductID] = useState(40346);
  const [viewMore, setViewMore] = useState(false);
  const [buttonText, setButtonText] = useState('View More');

  useEffect(() => {
    axios.get(`api/reviews/meta/${productID}`)
      .then((res) => {
        setMeta(res.data);
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
  // componentDidMount() {
  //   this.getMeta();
  //   this.getReviews();
  // }
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

  // getMeta() {
  //   axios.get(`api/reviews/meta/${this.state.productID}`)
  //     .then((res) => {
  //       this.setState({ meta: res.data });
  //     })
  //     .catch((err) => {
  //       // console.log('err');
  //     });
  // }

  // getReviews() {
  //   axios.get(`api/all_reviews/${this.state.sortBy}/${this.state.productID}`)
  //     .then((res) => {
  //       this.setState({ reviews: res.data });
  //     })
  //     .catch((err) => {
  //       // console.log('err');
  //     });
  // }

  // sort(value) {
  //   this.setState({ sortBy: value });
  //   this.getReviews();
  // }
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
        />
      </div>
    </div>
  );
}

export default RatingsAndReviews;

      // <div className={styles.topLevel}>
      // <div className={styles.reviewRatingsContainer}>
      //   <Stats metaData={this.state.meta} />
      //   <ReviewsList reviewsData={this.state.reviews} sort={this.state.sortBy} sortFunc={this.sort} />
      // </div>
      // </div>