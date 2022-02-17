import React from 'react';

const getAvg = (obj) => {
  let totalCount = 0;
  let totalSum = 0;
  for (let i = 0; i < Object.values(obj).length; i += 1) {
    totalCount += Object.values(obj)[i];
    totalSum += ((i + 1) * Object.values(obj)[i]);
  }
  return totalSum / totalCount;
};

export default getAvg;
