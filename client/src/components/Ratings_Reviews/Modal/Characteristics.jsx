import React from 'react';
import styles from './Modal.module.css';
function Chars({
  char, array, setSizeRating, setWidthRating, setComfortRating,
  setFitRating, setQualityRating, setLengthRating
}) {
  function handleChange(e) {
    if (char === 'Size') {
      setSizeRating(e.target.value);
    } else if (char === 'Width') {
      setWidthRating(e.target.value);
    } else if (char === 'Comfort') {
      setComfortRating(e.target.value);
    } else if (char === 'Quality') {
      setQualityRating(e.target.value);
    } else if (char === 'Length') {
      setLengthRating(e.target.value);
    } else if (char === 'Fit') {
      setFitRating(e.target.value);
    }
  }
  return (
    <div className={styles.cat}>
      <div>
        {char}
        :
      </div>
      <div className={styles.catRadios}>
        {array.map((cat, i) => {
          const rating = i + 1;
          return (
            <div className={styles.indRadios}>
            {cat}
            <label>
              <input
                type="radio"
                name={`${char} rating`}
                value={rating}
                onChange={handleChange}
              />
            </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chars;
// need onClick function for line 16
