import React from 'react';
import styles from '../Ratings.module.css';

const bars = (obj) => {
  // our input object is the metadata.ratings obj
  // create an array to store our jsx
  const returnJSX = [];
  // want to loop 5 times to return 5 bars
  //need to have the total count aswell, do that in a seperate function
  let totalCount = 0;
  for (let j = 0; j < Object.values(obj).length; j++) {
    totalCount += Number(Object.values(obj)[j]);
  }
  //loop here
  for (let i = 1; i <= 5; i++) {
    if (obj[i]) {
      let percentage = (Number(obj[i]) / totalCount) * 100;
      returnJSX.push(
        <div className={styles.barHolder}>
          <div className={styles.barNumber}>
            {i}
          </div>
          <div className={styles.barBar}>
            <div style={{ background: 'green',
              width: `${percentage}%`,
              height: '100%',
            }}
            > </div>

          </div>
        </div>
      )
    } else {
      returnJSX.push(
        <div className={styles.barHolder}>
          <div className={styles.barNumber}>
            {i}
          </div>
          <div className={styles.barBar}>
          </div>
        </div>
      );
    }
    //grab the number of reviews at this point
    //divide by the number of total reviews to find the percentage
    //create a jsx element and push it into our array
    // in return will loop throught and post every bar
  }
  return returnJSX;
};


function RatingBars({ meta }) {
  let barList = [];
  if (meta.ratings) {
    // console.log('ratings: ', metaData.ratings);
    barList = bars(meta.ratings);
    // console.log(barList);
  }

  return !meta.ratings ? null : (
    <div>
      {barList.map((bar) => bar)}
    </div>
  )
}

export default RatingBars;
