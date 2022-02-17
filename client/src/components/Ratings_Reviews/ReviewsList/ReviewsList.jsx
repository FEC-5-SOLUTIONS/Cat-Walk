import React from 'react';
import ReviewList from './ReviewList'
import styles from '../Ratings.module.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      buttonText: 'View More',
    };
  }

  handleClick (e) {
    // e.preventDefault();
    this.setState({
      viewMore: !this.state.viewMore,
      buttonText: 'View Less',
    });
  }


  render() {
    return !this.props.reviewsData.results ? <div>nothing to see</div> : (
      <div>
        <div>
          {this.props.reviewsData.results.length} Reviews sorted by '{this.props.sort}'
        </div>
        <div>
        {!this.state.viewMore ?
        <ReviewList data = {this.props.reviewsData.results.slice(0,2)} /> : <ReviewList data = {this.props.reviewsData.results} />}
        </div>
        <div>
          <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
        </div>

      </div>
    );
  }
}

export default ReviewsList;
