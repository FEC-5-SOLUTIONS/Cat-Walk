import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';

export default function AddAnswer({ question, handleClick, postAnswer }) {
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
    postAnswer(state.body, state.name, state.email);
    handleClick(false);
  }

  return (
    <form className={styles.modal}>
      <h3>Submit your Answer</h3>
      <h4>
        Heir Force Ones:
        {' '}
        {question}
      </h4>
      Your Answer (*)
      <input type="text" id="body" onChange={handleInput} />
      <br />
      What is your nickname (*)
      <input type="text" id="name" placeholder="Example: jack543!" onChange={handleInput} />
      <br />
      For privacy reasons, do not use your full name or email address
      <br />
      Your email (*)
      <input type="text" id="email" placeholder="Example: jack@email.com" onChange={handleInput} />
      <br />
      For authentication reasons, you will not be emailed
      <br />
      <button type="submit">Upload your photos</button>
      <br />
      <button
        type="submit"
        onClick={handleSubmit}
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
  handleClick: PropTypes.func.isRequired,
  postAnswer: PropTypes.func.isRequired,
};
