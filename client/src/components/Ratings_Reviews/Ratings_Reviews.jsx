import React from 'react';
import Stats from './StatsTab/Stats';
import ReviewsList from './ReviewsList/ReviewsList';
import axios from 'axios';
import styles from './Ratings.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: [],
      reviews: [],
      productID: 40348,
    };
  }

  componentDidMount() {
    this.getMeta();
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

  render() {
    return (
      <div className={styles.redText}>
        Hello from RatingsAndReviews in red
        <Stats metaData = {this.state.meta}/>
        <ReviewsList />
      </div>
    );
  }
}

export default RatingsAndReviews;
