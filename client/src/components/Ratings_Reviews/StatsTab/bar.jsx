import React from 'react';
import styles from '../Ratings.module.css';

function Bar({ char, array, rating }) {
  // const col = Math.round(rating);
  const percentage = (rating / 5) * 100;
  return (
    <div className={styles.reBar} id="reBar">
      <div id="Barinline">
        {char}
      </div>
      <div className={styles.topLevelPoint} id="topLevelPoint">
        <div className={styles.midLevelPoint} id="midLevelPoint">
          <div
            id="pointerInLine"
            style={{
              margin: '0',
              padding: '0',
              marginLeft: `${percentage}%`,
            }}
          >
            🔻
          </div>
        </div>
        <div className={styles.grayBar} id="grayBar" />
      </div>
      <div className={styles.charArrayHolder} id="charArrayHolder">
        <div>{array[0]}</div>
        <div>{array[1]}</div>
        <div>{array[2]}</div>
      </div>
    </div>
  );
}

export default Bar;
