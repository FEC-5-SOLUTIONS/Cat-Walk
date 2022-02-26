import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Questions.module.css';

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
      <div className={styles.answer_line}>
        <div className={styles.answer}>
          A:
        </div>
        <div className={styles.answer_answer}>
          {answer}
        </div>
      </div>
      <br />
      <div className={styles.answer_imgs}>
        {photos.map((item) => (
          <img className={styles.answer_img} src={item.url} alt="user answer" key={item.id} />
        ))}
      </div>
      <div className={styles.answer_info}>
        <div className={styles.answerer}>
          by
          {' '}
          <p className={user === 'Seller' ? styles.seller_answer : styles.answerer}>
            {user}
          </p>
          ,
          {' '}
          {moment(date).format('MMMM Do, YYYY')}
          {' '}
          |
        </div>
        <div className={styles.answer_vote}>
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
        </div>
      </div>
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
