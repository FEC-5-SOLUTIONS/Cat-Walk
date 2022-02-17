import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import styles from './Stars.module.css';

// const returnString = (begin, average) => {
//   if (average === 0) {
//     return 'No Reviews Yet';
//   }
//   let start = begin;
//   let returnJSX = [];
//   while (start < average) {
//     const diff = average - start;
//     if (diff >= 1) {
//       returnJSX.push(<FontAwesomeIcon icon={faStar} />);
//       start += 1;
//     } else if (diff > 0 && diff < 1) {
//       returnJSX.push(<FontAwesomeIcon icon={faStarHalfStroke} />);
//       start += 1;
//     }
//   }
//   return returnJSX;
// }

const getAvg = (obj) => {
  let totalCount = 0;
  let totalSum = 0;
  for (let i = 0; i < Object.values(obj).length; i += 1) {
    totalCount += Number(Object.values(obj)[i]);
    totalSum += ((Object.keys(obj)[i]) * Object.values(obj)[i]);
  }
  if ((totalSum / totalCount).isNaN) {
    return 0;
  }
  return totalSum / totalCount;
};

function Stars({ metaData }) {
  const[rating, setRating] = useState(4);
  const[hover, setHover] = useState(null);
  // console.log('metaData: ', metaData);
  let avg = 0;
  // console.log('avg: ', avg);
  // let stars = {};
  // if (metaData.ratings) {
  //   setRating(getAvg(metaData.ratings));
  //   // stars = returnString(0, avg);
  // }

  // !metaData.ratings ? null :

  return !metaData.ratings ? null : (
    <div>
      {[...Array(5)].map( (star, i) => {
        const ratingValue = i + 1;
        return (
        <label>
          <input
            type='radio'
            name='rating'
            className={styles.starButton}
            value = {ratingValue}
            onClick={() => {
              // console.log('clicked')
              setRating(ratingValue)}
            }
            onMouseEnter ={()=> setHover(ratingValue)}
            onMouseLeave = {()=>setHover(null)} />
          <FontAwesomeIcon icon={faStar}
          className={styles.star}
          color={ratingValue <= (hover || rating) ? "yellow": "gray"}
          size={25} />
        </label>
        );
      })}
    </div>
  );
}

export default Stars;
