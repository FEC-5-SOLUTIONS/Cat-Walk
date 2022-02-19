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

function Modal({ setModal, charObj }) {
  const [starRating, setStarRating] = useState(0);
  const [recRating, setRecRating] = useState(2);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);

  const [eMail, setEMail] = useState(0);
  const [sumText, setSumText] = useState(0);
  const [nickname, setNickname] = useState(0);
  const [review, setReview] = useState(0);
  // below is code for when was using useRef
  // issue was that it was not checking truthy as desired
  // // useref for nickname
  // const nicknameRef = useRef(0);

  // // useref for eMail
  // const eMailRef = useRef(0);
  // // useref for sumText
  // const sumTextRef = useRef(0);

  // // useref for review
  // const reviewRef = useRef(0);

  // function handleRefChange() {
  //   console.log('reviewRef: ', reviewRef.current.value)
  // }

  // nicknameRef.current.value,
  // eMailRef.current.value,
  // sumTextRef.current.value,
  // reviewRef.current.value,

  function handleRecClick(e) {
    if (e.target.value === '1') {
      setRecRating(true);
    } else {
      setRecRating(false);
    }
  }

  const postArray = [
    starRating,
    Number(starRating),
    Number(sizeRating),
    Number(widthRating),
    Number(comfortRating),
    Number(qualityRating),
    Number(lengthRating),
    Number(fitRating),
    eMail,
    sumText,
    nickname,
    review,
  ];
  // the funciton below will itterate throught the array and check for any 0 in postarray
  // if there is no 0 in postarray -> we have all required fields filled
  // post request can now be submitted
  const isTrue = (subject) => subject !== 0;
  // the post request should be handled within here
  function handleSubmit() {
    if (postArray.every(isTrue)) {
      if(typeof recRating === 'boolean') {
        // must construct object here and make get request
        const dataObj = {
          product_id: productID,
          rating: starRating,
          summary: sumText,
          body: review,
          recommend: recRating,
          name: nickname,
          email: eMail,
          characteristic: {
          },
        };
        console.log('letsgo');
      } else {
        console.log('missing something ');
      }
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
        {(Object.keys(charObj)).map((char)=>{
          if (char === 'Comfort') {
            return <Chars char={char} array={comfortArray} setComfortRating={setComfortRating} />;
          } else if (char === 'Size') {
            return <Chars char="Size" array={sizeArray} setSizeRating={setSizeRating} />
          } else if (char === 'width') {
            return <Chars char="Width" array={widthArray} setWidthRating={setWidthRating} />
          } else if (char === 'Quality') {
            return <Chars char="Quality" array={qualityArray} setQualityRating={setQualityRating} />
          }else if (char === 'Length') {
            return <Chars char="Length" array={lengthArray} setLengthRating={setLengthRating} />
          } else {
            return <Chars char="Fit" array={fitArray} setFitRating={setFitRating} />
          }
        })}
        {/* <Chars char="Size" array={sizeArray} setSizeRating={setSizeRating} />
        <Chars char="Width" array={widthArray} setWidthRating={setWidthRating} />
        <Chars char="Comfort" array={comfortArray} setComfortRating={setComfortRating} />
        <Chars char="Quality" array={qualityArray} setQualityRating={setQualityRating} />
        <Chars char="Length" array={lengthArray} setLengthRating={setLengthRating} />
        <Chars char="Fit" array={fitArray} setFitRating={setFitRating} /> */}
      </div>
      <div>
        Please enter a sumText:
        <input type="text" maxLength="60" placeholder="Example: Best Purchase Ever!"
        onChange={(e)=>setSumText(e.target.value)}
        />
      </div>
      <div>
        Please enter a Review:
        <input type="text"
        maxLength="1000"
        placeholder="Why did you like the product or not?"
        onChange={(e)=>setReview(e.target.value)}
        />
      </div>
      <div>
        What is your nickname:
        <input type="text"
        maxLength="60"
        placeholder="Please enter a nickname"
        onChange={(e)=>setNickname(e.target.value)}
        />
      </div>
      <div>
        Please enter your eMail:
        <input type="text"
        maxLength="60"
        placeholder="Please enter your eMail"
        onChange={(e)=>setEMail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={ ()=>{setModal(false)} }>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
