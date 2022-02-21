import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function AnswerItem({
  id, answer, user, date, helpfulness, photos, handleClick,
}) {
  const [status, setStatus] = useState(false);

  function updateAnswerStatus(e) {
    if (!status) {
      setStatus(true);
      handleClick(id, e.target.id);
    }
  }

  return (
    <div>
      A:
      {' '}
      {answer}
      <br />
      by
      {' '}
      {user}
      ,
      {' '}
      {moment(date).format('MMMM Do, YYYY')}
      {' '}
      |
      Helpful?
      {' '}
      <button
        type="submit"
        id="helpful"
        onClick={updateAnswerStatus}
      >
        Yes
      </button>
      (
      {helpfulness}
      )
      {' '}
      |
      {' '}
      <button
        type="submit"
        id="report"
        onClick={updateAnswerStatus}
      >
        Report
      </button>
      <br />
      <br />
    </div>
  );
}
AnswerItem.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
};
