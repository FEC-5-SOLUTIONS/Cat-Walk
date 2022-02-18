import React from 'react';
import axios from 'axios';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import styles from './Ratings.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: [],
      reviews: [],
      sortBy: 'relevant',
      count: 2,
      productID: 40346,
    };
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    this.getMeta();
    this.getReviews();
  }

  getMeta() {
    axios.get(`api/reviews/meta/${this.state.productID}`)
      .then((res) => {
        this.setState({ meta: res.data });
      })
      .catch((err) => {
        // console.log('err');
      });
  }

  getReviews() {
    axios.get(`api/all_reviews/${this.state.sortBy}/${this.state.productID}`)
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        // console.log('err');
      });
  }

  sort(value) {
    this.setState({ sortBy: value });
    this.getReviews();
  }

  render() {
    return (
      <div className={styles.topLevel}>
      <div className={styles.reviewRatingsContainer}>
        <Stats metaData={this.state.meta} />
        <ReviewsList reviewsData={this.state.reviews} sort={this.state.sortBy} sortFunc={this.sort} />
      </div>
      </div>
    );
  }
}

export default RatingsAndReviews;
