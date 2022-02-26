import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';
import SubmitError from './SubmitError';

export default function AddQuestion({ productName, handleClick, postQuestion }) {
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
  });
  const [validEmail, setValidEmail] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorField, setErrorField] = useState([]);

  function clearUpFields() {
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

  function handleSubmit() {
    postQuestion(state.body, state.name, state.email);
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
      setHasError(true);
    } else {
      setHasError(false);
      handleSubmit();
    }
  }

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <button
          className={styles.close_button}
          type="submit"
          onClick={closeModal}
        >
          x
        </button>
        <h3 className={styles.modal_title}>Ask Your Question</h3>
        <h5 className={styles.modal_subtitle}>
          About the
          {' '}
          {productName}
        </h5>
        <p className={styles.require_text}>Required (*)</p>
        <div className={styles.modal_body}>
          Your Question
          <p className={styles.required}>(*)</p>
        </div>
        <input
          type="text"
          id="body"
          maxLength="1000"
          value={state.body}
          onChange={handleInput}
        />
        <div />
        <div className={styles.modal_body}>
          What is your nickname
          <p className={styles.required}>(*)</p>
        </div>
        <input
          type="text"
          id="name"
          maxLength="60"
          value={state.name}
          placeholder="Example: jackson11!"
          onChange={handleInput}
        />
        <br />
        <p className={styles.warnings}>
          For privacy reasons, do not use your full name or email address
        </p>
        <br />
        <div className={styles.modal_body}>
          Your email
          <p className={styles.required}>(*)</p>
        </div>
        <input
          className={styles.email_input}
          type="text"
          id="email"
          maxLength="60"
          value={state.email}
          placeholder="Why did you like the product or not?"
          onChange={emailValidation}
        />
        <div className={validEmail ? styles.hide : styles.show}>
          <p className={styles.error_message}>Please enter a valid email</p>
        </div>
        <br />
        <p className={styles.warnings}>For authentication reasons, you will not be emailed</p>
        <br />
        <div className={hasError ? styles.show : styles.hide}>
          <SubmitError errorField={errorField} />
        </div>
        <button
          className={styles.modal_submit}
          type="submit"
          onClick={checkSubmit}
        >
          Submit question
        </button>
      </div>
    </div>
  );
}
AddQuestion.propTypes = {
  productName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  postQuestion: PropTypes.func.isRequired,
};
