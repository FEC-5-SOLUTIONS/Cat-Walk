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

function Modal({ setModal }) {
  const [starRating, setStarRating] = useState(0);
  const [recRating, setRecRating] = useState(null);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);

  // useref for nickname
  const nicknameRef = useRef(0);

  // useref for email
  const emailRef = useRef(0);
  // useref for summary
  const summaryRef = useRef(0);

  // useref for review
  const reviewRef = useRef(0);

  function handleRefChange() {
    console.log('reviewRef: ', reviewRef.current.value)
  }

  function handleRecClick(e) {
    setRecRating(e.target.value);
  }

  const postArray = [
    starRating,
    Number(recRating),
    Number(starRating),
    Number(sizeRating),
    Number(widthRating),
    Number(comfortRating),
    Number(qualityRating),
    Number(lengthRating),
    Number(fitRating),
    nicknameRef.current.value,
    emailRef.current.value,
    summaryRef.current.value,
    reviewRef.current.value,
  ];
  // the funciton below will itterate throught the array and check for any 0 in postarray
  // if there is no 0 in postarray -> we have all required fields filled
  // post request can now be submitted
  const isTrue = (subject) => subject !== 0;
  // the post request should be handled within here
  function handleSubmit() {
    if (postArray.every(isTrue)) {
      for (let i = 0; i < postArray.length; i++){
        console.log(`i is ${i} and the value is ${postArray[i]}`)
      };
    } else {
      console.log('something missing');
    }
  }

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
              value={1}
              onClick={handleRecClick}
            />
          </label>
          <label>
            No:
            <input
              type="radio"
              name="reccomend"
              value={0}
              onClick={handleRecClick}
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
        <input type="text" maxLength="60" placeholder="Example: Best Purchase Ever!" ref={summaryRef} />
      </div>
      <div>
        Please enter a Review:
        <input type="text" maxLength="1000" placeholder="Why did you like the product or not?" ref={reviewRef} onChange={handleRefChange} />
      </div>
      <div>
        What is your nickname:
        <input type="text" maxLength="60" placeholder="Please enter a nickname" ref={nicknameRef} />
      </div>
      <div>
        Please enter your email:
        <input type="text" maxLength="60" placeholder="Please enter your email" ref={emailRef}/>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={ ()=>{setModal(false)} }>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
