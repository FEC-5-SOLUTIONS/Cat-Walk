import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import styles from './ReviewStar.module.css';

function Stars({ starRating, setStarRating }) {
  const[hover, setHover] = useState(null);

  function handleHover(e) {
    setHover(e.target.value);
  }

  function handleLeave(e) {
    setHover(null);
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
        <label>
          <input
            type='radio'
            name='rating'
            className={styles.starButton}
            value={ratingValue}
            onClick={() => {
              // console.log('clicked')
              setStarRating(ratingValue);
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={styles.star}
            color={ratingValue <= (hover || starRating) ? 'gold' : 'gray'}
            font-size="30px"
          />
        </label>
        );
      })}
    </div>
  );
}

export default Stars;
