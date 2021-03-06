import React from 'react';

// function to get percentage, can probable export to util but it's not much so maybe not necessary
const recPer = (obj) => {
  // console.log(obj.true);
  const percentage = (Number(obj.true)) / (Number(obj.true) + Number(obj.false));
  return (Math.round(percentage * 10000) / 100);
};

function Recommended({ meta }) {
  let percentage = 0;
  if (meta.recommended) {
    percentage = recPer(meta.recommended);
  }
  return !meta.recommended ? null : (
    <div> {percentage}% of customers recommend this product!</div>
  );
}

export default Recommended;
