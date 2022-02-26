import React from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';

export default function SubmitError({ errorField }) {
  return (
    <div className={styles.error_message}>
      You must enter the following:
      {errorField.map((item, index) => (
        index === errorField.length - 1 ? ` ${item}` : ` ${item},`
      ))}
    </div>
  );
}
SubmitError.propTypes = {
  errorField: PropTypes.instanceOf(Array).isRequired,
};
