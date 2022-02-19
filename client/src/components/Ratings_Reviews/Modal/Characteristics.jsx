import React from 'react';

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
    <div>
      {char}
      {array.map((cat, i) => {
        const rating = i + 1;
        return (
          <label>
            {cat}
            <input
              type="radio"
              name={`${char} rating`}
              value={rating}
              onChange={handleChange}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Chars;
// need onClick function for line 16
