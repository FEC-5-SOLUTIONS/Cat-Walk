import React, { useState, useRef } from 'react';
import Stars from '../../Shared/StarsRedo';
import Chars from './Characteristics';

// characteristic arrays
const sizeArray = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];

const widthArray = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];

const comfortArray = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];

const qualityArray = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

const lengthArray = ['Runs Short',
  'Runs slightly short',
  'Perfect',
  'Runs slightly long',
  'Runs long',
];

const fitArray = ['Runs tight',
  'Runs slightly tight',
  'Perfect',
  'Runs slightly long',
  'Runs long',
];




function Modal() {
  return (
    <div>
      <div>
        <Stars />
        <div>
          Do you recommend this product?
          <label>
            Yes!
            <input
              type="radio"
              name="reccomend"
              value={true}
              onClick={(e) => console.log(e.target.value)}
            />
          </label>
          <label>
            No:
            <input
              type="radio"
              name="reccomend"
              value={false}
              onClick={(e) => console.log(e.target.value)}
            />
          </label>
        </div>
      </div>
      <Chars char="Size" array={sizeArray} />
      <Chars char="Width" array={widthArray} />
      <Chars char="Comfort" array={comfortArray} />
      <Chars char="Quality" array={qualityArray} />
      <Chars char="Length" array={lengthArray} />
      <Chars char="Fit" array={fitArray} />
    </div>
  );
}

export default Modal;
