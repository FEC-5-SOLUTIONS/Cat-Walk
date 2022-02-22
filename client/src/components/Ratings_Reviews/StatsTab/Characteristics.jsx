import React from 'react';
import styles from '../Ratings.module.css';

const bars = (obj) => {
  const returnJSX = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let currentChar = Object.keys(obj)[i];
    let percentage = ((obj[currentChar].value) / 5) * 100;
    returnJSX.push(
      <div className={styles.charHolder}>
        <div>{Object.keys(obj)[i]}:</div>
        <div className={styles.charBar}>
          <div style={{ background: 'black',
            width: `${percentage}%`,
            height: '100%',
          }}> </div>
        </div>
      </div>
    )
  }
  return returnJSX;
}

function Characteristics({meta}) {
  let barList = [];
  if (meta.characteristics) {
    // console.log('characteristics: ', metaData.characteristics);
    barList = bars(meta.characteristics);
    // console.log(barList);
  }

  return !meta.characteristics ? null : (
    <div>
      {barList.map((bar) => bar)}
    </div>
  )
}

export default Characteristics;
