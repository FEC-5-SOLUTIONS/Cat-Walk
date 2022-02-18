import React from 'react';
import ReviewList from './ReviewList';
import styles from '../Ratings.module.css';

function ReviewsList({
   reviews, sort, handleChange, text, viewMore, click
}) {
  // function handleChange(e) {
  //   console.log(e.target.value);
  //   // setSort(e.targe.value);
  // }

  return !reviews.results ?
    <div>nothing to see</div> : (
    <div className={styles.reviewsContainer}>
      <div>
        {reviews.results.length} Reviews sorted by
        <select value={sort} onChange={handleChange}>
          <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </div>
      <div className={styles.reviewList}>
        {!viewMore ?
        <ReviewList data = {reviews.results.slice(0,2)} /> : <ReviewList data = {reviews.results} />}
        </div>
        <div>
          <button onClick={click}>{text}</button>
        </div>

    </div>
    );
}


// class ReviewsList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewMore: false,
//       buttonText: 'View More',
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleClick (e) {
//     // e.preventDefault();
//     let newText = '';
//     if (this.state.buttonText === 'View More') {
//       newText = 'View Less';
//     } else {
//       newText = 'View More';
//     }
//     this.setState({
//       viewMore: !this.state.viewMore,
//       buttonText: newText,
//     });
//   }

//   handleChange(e) {
//     this.props.sortFunc(e.target.value);
//   }

//   render() {
//     return !this.props.reviewsData.results ? <div>nothing to see</div> : (
//       <div className={styles.reviewsContainer}>
//         <div>
//           {this.props.reviewsData.results.length} Reviews sorted by
//           <select value={this.props.sort} onChange={this.handleChange}>
//             <option value="relevant">relevant</option>
//             <option value="newest">newest</option>
//             <option value="helpful">helpful</option>
//           </select>
//         </div>
        // <div className={styles.reviewList}>
        // {!this.state.viewMore ?
        // <ReviewList data = {this.props.reviewsData.results.slice(0,2)} /> : <ReviewList data = {this.props.reviewsData.results} />}
        // </div>
        // <div>
        //   <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
        // </div>

//       </div>
//     );
//   }
// }

export default ReviewsList;
