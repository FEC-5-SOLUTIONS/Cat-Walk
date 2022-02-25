import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';
import SubmitError from './SubmitError';
import UploadError from './UploadError';

export default function AddAnswer({
  question, productName, handleClick, postAnswer,
}) {
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
  });
  const [validEmail, setValidEmail] = useState(true);
  const [photos, setPhotos] = useState([]);
  // const [files, setFiles] = useState([]);
  const [hasFive, setHasFive] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [errorField, setErrorField] = useState([]);

  function clearUpFields() {
    setPhotos([]);
    setState({
      body: '',
      name: '',
      email: '',
    });
  }

  function closeModal(e) {
    e.preventDefault();
    handleClick(false);
    clearUpFields();
    setSubmitError(false);
    setImgError(false);
  }

  function handleInput(e) {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  }

  function emailValidation(e) {
    const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setState({
      ...state,
      email: e.target.value,
    });
    if (!regexp.test(state.email)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }

  function selectImg(e) {
    setImgError(false);
    const img = e.target.files[0];
    if (!hasFive) {
      if (img) {
        const imgType = `.${img.type.split('/')[1]}`;
        const validTypes = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (validTypes.test(imgType)) {
          setPhotos((prev) => [...prev, URL.createObjectURL(img)]);
          // setFiles((prev) => [...prev, img]);
        } else {
          setImgError(true);
        }
      }
    }
  }

  function upload(e) {
    e.preventDefault();
    // const fd = new FormData();
    // fd.append('image', files[0], files[0].name);
    // axios.post('https://api.cloudinary.com/v1_1/demo/image/upload', fd)
    //   .then((res) => {
    //     console.log(res, 'res');
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err');
    //   });
  }

  function handleSubmit() {
    postAnswer(state.body, state.name, state.email, photos);
    handleClick(false);
    clearUpFields();
  }

  function checkSubmit(e) {
    e.preventDefault();
    const temp = [];
    Object.keys(state).forEach((key) => {
      if (state[key] === '') {
        temp.push(key);
      }
    });
    if (temp.length > 0) {
      setErrorField(temp);
      setSubmitError(true);
    } else {
      setSubmitError(false);
      handleSubmit();
    }
  }

  return (
    <form className={styles.modal}>
      <p className={styles.answer_title}>Submit your Answer</p>
      <p className={styles.answer_subtitle}>
        {productName}
        {' '}
        {question}
      </p>
      Your Answer (*)
      <input
        type="text"
        id="body"
        maxLength="1000"
        value={state.body}
        onChange={handleInput}
      />
      <br />
      What is your nickname (*)
      <input
        type="text"
        id="name"
        maxLength="60"
        value={state.name}
        placeholder="Example: jack543!"
        onChange={handleInput}
      />
      <br />
      For privacy reasons, do not use your full name or email address
      <br />
      Your email (*)
      <input
        type="text"
        id="email"
        maxLength="60"
        value={state.email}
        placeholder="Example: jack@email.com"
        onChange={emailValidation}
      />
      <div className={validEmail ? styles.hide : styles.show}>
        Please enter a valid email
      </div>
      <br />
      For authentication reasons, you will not be emailed
      <br />
      <input
        // className={hasFive ? styles.hide : styles.show}
        type="file"
        onChange={selectImg}
        multiple
      />
      {photos && photos.map((item) => <img className={styles.thumbnails} src={item} alt="" />)}
      <div className={imgError ? styles.show : styles.hide}>
        <UploadError err="jpg, jpeg, png, gif only" />
      </div>
      {/* <button type="submit" onClick={upload}>
        Upload
      </button> */}
      <br />
      <div className={submitError ? styles.show : styles.hide}>
        <SubmitError errorField={errorField} />
      </div>
      <button
        type="submit"
        onClick={checkSubmit}
      >
        Submit answer
      </button>
      <button
        type="submit"
        onClick={closeModal}
      >
        close
      </button>
    </form>
  );
}
AddAnswer.propTypes = {
  question: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  postAnswer: PropTypes.func.isRequired,
};
