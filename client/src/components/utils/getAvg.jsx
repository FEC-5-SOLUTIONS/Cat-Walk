import React from 'react';

export default function getAvg(obj) {
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
}
