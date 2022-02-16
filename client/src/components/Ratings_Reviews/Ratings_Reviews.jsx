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
      productID: 40348,
    };
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
        console.log('err');
      });
  }

  getReviews() {
    axios.get(`api/all_reviews/${this.state.sortBy}/${this.state.productID}/${this.state.count}`)
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log('err');
      });
  }

  render() {
    return (
      <div className={styles.reviewBorder}>
        <Stats metaData={this.state.meta} />
        <ReviewsList reviewsData={this.state.reviews} sort={this.state.sortBy} />
      </div>
    );
  }
}

export default RatingsAndReviews;
