import React from 'react';

const recPer = (obj) => {
  // console.log(obj.true);
  const percentage = (Number(obj.true)) / (Number(obj.true) + Number(obj.false));
  return percentage * 100;
};

function Recommended({ metaData }) {
  let percentage = 0;
  if (metaData.recommended) {
    percentage = recPer(metaData.recommended);
  }
  return !metaData.recommended ? null : (
    <div> {percentage}% of customers recommend this product!</div>
  );
}

export default Recommended;
