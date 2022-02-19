import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import styles from './ReviewStar.module.css';

function Stars({ metaData }) {
  const[rating, setRating] = useState(0);
  const[hover, setHover] = useState(null);

  return (
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
