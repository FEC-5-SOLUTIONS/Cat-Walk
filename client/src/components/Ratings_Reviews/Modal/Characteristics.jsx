import React from 'react';

function Chars({ char, array }) {
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
            />
          </label>
        );
      })}
    </div>
  );
}

export default Chars;
// need onClick function for line 16
