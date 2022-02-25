import React from 'react';
import Bar from './bar';
import styles from '../Ratings.module.css';

// needed Arrays
const sizeArray = ['A size too small', 'Perfect', 'A size too wide'];

const widthArray = ['Too narrow', 'Perfect', 'Too wide'];

const comfortArray = ['Uncomfortable', 'Ok', 'Perfect'];

const qualityArray = ['Poor', 'What I expected', 'Perfect'];

const lengthArray = ['Runs Short', 'Perfect', 'Runs long'];

const fitArray = ['Runs tight', 'Perfect', 'Runs long'];

function Characteristics({meta}) {
  return !meta ? <div>hello</div> : (
    <div>
      {
        (Object.keys(meta)).map((bar) => {
          if (bar === 'Comfort') {
            return <Bar char={bar} array={comfortArray} rating={meta.Comfort.value}/>;
          } else if (bar === 'Size') {
            return <Bar char={bar} array={sizeArray} meta={meta.Size.value}/>
          } else if (bar === 'Width') {
            return <Bar char={bar} array={widthArray} rating={meta.Width.value} />
          } else if (bar === 'Quality') {
            return <Bar char={bar} array={qualityArray} rating={meta.Quality.value} />
          } else if (bar === 'Length') {
            return <Bar char={bar}array={lengthArray} rating={meta.Length.value} />
          } else {
            return <Bar char={bar} array={fitArray} rating={meta.Fit.value} />
          }
        })
      }
    </div>
  );
}

export default Characteristics;
