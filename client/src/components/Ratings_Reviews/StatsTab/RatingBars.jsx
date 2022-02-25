import React from 'react';
import Rating from './Rating';
import styles from '../Ratings.module.css';

// const bars = (obj) => {
//   // our input object is the metadata.ratings obj
//   // create an array to store our jsx
//   const returnJSX = [];
//   // want to loop 5 times to return 5 bars
//   //need to have the total count aswell, do that in a seperate function
//   let totalCount = 0;
//   for (let j = 0; j < Object.values(obj).length; j++) {
//     totalCount += Number(Object.values(obj)[j]);
//   }
//   //loop here
//   for (let i = 1; i <= 5; i++) {
//     if (obj[i]) {
//       let percentage = (Number(obj[i]) / totalCount) * 100;
//       returnJSX.push(
//         <div className={styles.barHolder}>
//           <div className={styles.barNumber}>
//             <button
//               className={styles.filterButton}
//               onClick={() => filterFunc(i)}
//               type="button"
//             >{i}</button>
//           </div>
//           <div className={styles.barBar}>
//             <div style={{
//               background: 'green',
//               width: `${percentage}%`,
//               height: '100%',
//             }}
//             > </div>

//           </div>
//         </div>
//       )
//     } else {
//       returnJSX.push(
//         <div className={styles.barHolder}>
//           <div className={styles.barNumber}>
//             {i}
//           </div>
//           <div className={styles.barBar}>
//           </div>
//         </div>
//       );
//     }
//     //grab the number of reviews at this point
//     //divide by the number of total reviews to find the percentage
//     //create a jsx element and push it into our array
//     // in return will loop throught and post every bar
//   }
//   return returnJSX;
// };


function RatingBars({
  meta, filterFunc, inFilter, setInFilter, setFilter
}) {
  let barList = [];
  let totalCount = 0;
  if (meta.ratings) {
    // console.log('ratings: ', metaData.ratings);
    barList = Object.keys(meta.ratings);
    // console.log('barList: ', barList);
    for (let j = 0; j < Object.values(meta.ratings).length; j++) {
      totalCount += Number(Object.values(meta.ratings)[j]);
    }
  }

  return !meta.ratings ? null : (
    <div>
      {[...Array(5)].map((rating, i) => (
        <Rating
          rating={i+1}
          data={meta.ratings}
          filterFunc={filterFunc}
          totalCount={totalCount}
        />
      ))}
      {inFilter.length === 0 ? null : (
        <div className={styles.clearContainer}>
          <div className={styles.clearText}>
            {`In filter: ${inFilter}`}
          </div>
          <button
            type="button"
            className={styles.clearContainerButton}
            onClick={() => {
              setInFilter([]);
              setFilter([]);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default RatingBars;
