import React, { useState, useRef } from 'react';
import axios from 'axios';
import Stars from '../../Shared/StarsRedo';
import Chars from './Characteristics';
import styles from './Modal.module.css';

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

function Modal({ setModal, charObj, productID, name }) {
  const [starRating, setStarRating] = useState(0);
  const [recRating, setRecRating] = useState(2);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);
  const [show, setShow] = useState(false);
  const [thanks, setThanks] = useState(false);

  const [eMail, setEMail] = useState(0);
  const [sumText, setSumText] = useState(0);
  const [nickname, setNickname] = useState(0);
  const [review, setReview] = useState(0);

  const charRatingObj = {
    Comfort: comfortRating,
    Size: sizeRating,
    Width: widthRating,
    Quality: qualityRating,
    Length: lengthRating,
    Fit: fitRating,
  };
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

  // function to check if all of the chars have been selected
  //this is my characterstics array
  const chaToArray = (Object.keys(charObj));
  const objIsTrue = (currentChar) => Number(charRatingObj[currentChar]) !== 0;

  // console.log('checked: ', checkRadios);

  const postArray = [
    starRating,
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
    if (postArray.every(isTrue) && chaToArray.every(objIsTrue)) {
      if (typeof recRating === 'boolean') {
        if (review.length > 50) {
          // must construct object here and make get request
          // first create the object for all the characteristics
          const characteristicObj = {};
          for (let i = 0; i < chaToArray.length; i++) {
            const currentChara = chaToArray[i];
            const currentID = charObj[currentChara].id;
            characteristicObj[currentID] = Number(charRatingObj[currentChara]);
          }
          const dataObj = {
            product_id: productID,
            rating: starRating,
            summary: sumText,
            body: review,
            recommend: recRating,
            name: nickname,
            email: eMail,
            characteristics: characteristicObj,
            photos: [],
          };
          axios({
            method: 'post',
            url: '/api/reviews',
            data: dataObj,
          }).then(() => {
            setShow(false);
            setThanks(true);
          });
        }
        else {
          setShow(true);
        }
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
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div>
          <h1>Write your review about {name} here!</h1>
        </div>
        <div className={styles.starsAndRec}>
          <Stars starRating={starRating} setStarRating={setStarRating} />
          <div className={styles.recommend}>
            {'Do you recommend this product? '}
            <label>
              {' Yes: '}
              <input
                type="radio"
                name="reccomend"
                value={1}
                onClick={handleRecClick}
              />
            </label>

            <label>
              {' No: '}
              <input
                type="radio"
                name="reccomend"
                value={0}
                onClick={handleRecClick}
              />
            </label>
          </div>
        </div>
        <div className={styles.radios}>
          {(chaToArray).map((char) => {
            if (char === 'Comfort') {
              return <Chars char={char} array={comfortArray} setComfortRating={setComfortRating} />;
            } else if (char === 'Size') {
              return <Chars char="Size" array={sizeArray} setSizeRating={setSizeRating} />
            } else if (char === 'Width') {
              return <Chars char="Width" array={widthArray} setWidthRating={setWidthRating} />
            } else if (char === 'Quality') {
              return <Chars char="Quality" array={qualityArray} setQualityRating={setQualityRating} />
            } else if (char === 'Length') {
              return <Chars char="Length" array={lengthArray} setLengthRating={setLengthRating} />
            } else {
              return <Chars char="Fit" array={fitArray} setFitRating={setFitRating} />
            }
          })}
        </div>
        <div className={styles.form}>
          <p>Please enter a Summary:</p>
          <input type="text" maxLength="60" placeholder="Example: Best Purchase Ever!"
            onChange={(e) => setSumText(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <p>Please enter a Review:</p>
          <textArea
            type="text"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            rows="5"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <p>What is your nickname:</p>
          <input type="text"
            maxLength="60"
            placeholder="Please enter a nickname"
            onChange={(e) => setNickname(e.target.value)}
            className={styles.nameform}
          />
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className={styles.form}>
          <p>Please enter your eMail:</p>
          <input
            type="text"
            maxLength="60"
            placeholder="Please enter your eMail"
            onChange={(e) => setEMail(e.target.value)}
            className={styles.nameform}
          />
          <p>For authentication reasons, you will not be emailed</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleSubmit} className={styles.submit} type="submit">Submit</button>
          <button onClick={() => { setModal(false); }} className={styles.cancel} type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
