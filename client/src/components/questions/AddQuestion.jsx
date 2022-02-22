import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';

export default function AddQuestion({ handleClick, postQuestion }) {
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
  });

  function closeModal(e) {
    e.preventDefault();
    handleClick(false);
  }

  function handleInput(e) {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postQuestion(state.body, state.name, state.email);
    handleClick(false);
  }

  return (
    <form className={styles.modal}>
      <h3>Ask Your Question</h3>
      <h4>
        About the Heir Force Ones
      </h4>
      Your Question (*)
      <input type="text" id="body" onChange={handleInput} />
      <br />
      What is your nickname (*)
      <input type="text" id="name" placeholder="Example: jackson11!" onChange={handleInput} />
      <br />
      For privacy reasons, do not use your full name or email address
      <br />
      Your email (*)
      <input type="text" id="email" placeholder="Why did you like the product or not?" onChange={handleInput} />
      <br />
      For authentication reasons, you will not be emailed
      <br />
      <button type="submit">Upload your photos</button>
      <br />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit question
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
AddQuestion.propTypes = {
  handleClick: PropTypes.func.isRequired,
  postQuestion: PropTypes.func.isRequired,
};
