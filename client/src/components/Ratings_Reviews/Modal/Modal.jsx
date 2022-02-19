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
  const [starRating, setStarRating] = useState(0);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);
  // have to make a post request once all of the required info is here
  // call will be initiated by clicking the submit button

  return (
    <div>
      <div>
        <Stars starRating={starRating} setStarRating={setStarRating} />
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
      <div>
        <Chars char="Size" array={sizeArray} setSizeRating={setSizeRating} />
        <Chars char="Width" array={widthArray} setWidthRating={setWidthRating} />
        <Chars char="Comfort" array={comfortArray} setComfortRating={setComfortRating} />
        <Chars char="Quality" array={qualityArray} setQualityRating={setQualityRating} />
        <Chars char="Length" array={lengthArray} setLengthRating={setLengthRating} />
        <Chars char="Fit" array={fitArray} setFitRating={setFitRating} />
      </div>
      <div>
        Please enter a Summary:
        <input type="text" maxLength="60" placeholder="Example: Best Purchase Ever!" />
      </div>
      <div>
        Please enter a Review:
        <input type="text" maxLength="1000" placeholder="Why did you like the product or not?" />
      </div>
      <div>
        What is your nickname:
        <input type="text" maxLength="60" placeholder="Please enter a nickname" />
      </div>
      <div>
        Please enter your email:
        <input type="text" maxLength="60" placeholder="Please enter your email" />
      </div>
      <div>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
