import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Questions.module.css';
import AnswerItem from './AnswerItem';
import AddAnswer from './AddAnswer';

export default function QuestionItem({
  question, helpfulness, qId, handleClick,
}) {
  const mounted = useRef(false);
  const [answers, setAnswers] = useState([]);
  const [moreThanTwo, setMoreThanTwo] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [showAddAnswer, setShowAddAnswer] = useState(false);

  // SEPERATE ANSWERS
  function sortAnswers(a) {
    const seller = [];
    for (let i = 0; i < a.length; i += 1) {
      if (a[i].answerer_name === 'Seller') {
        seller.push(a[i]);
        a.splice(i, 1);
      }
    }
    return seller.concat(a);
  }

  // GET FIRST TWO ANSWERS
  function getTwoAnswers() {
    const params = {
      question_id: qId,
    };
    axios.get('/api/answers', { params })
      .then((res) => {
        if (res.data.results.length > 2) {
          setAnswers(sortAnswers(res.data.results).slice(0, 2));
          setMoreThanTwo(true);
        } else {
          setAnswers(sortAnswers(res.data.results));
          setMoreThanTwo(false);
        }
        setLoadMore(false);
      });
  }

  // GET ALL ANSWERS
  function getAllAnswers() {
    const params = {
      question_id: qId,
      count: 100,
      page: 1,
    };
    axios.get('/api/answers', { params })
      .then((res) => {
        setAnswers(sortAnswers(res.data.results));
        setLoadMore(true);
      });
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getTwoAnswers();
    }
  });

  // UPVOTE A QUESTION
  function upvoteQuestion() {
    if (!helpful) {
      setHelpful(true);
      handleClick(qId);
    }
  }

  // UPVOTE OR REPORT AN ANSWER
  const upvoteOrReport = (answerId, event) => {
    const data = {
      answer_id: answerId,
    };
    axios.put(`/api/answers/${answerId}/${event}`, data)
      .then(() => {
        if (!loadMore) {
          getTwoAnswers();
        } else {
          getAllAnswers();
        }
      });
  };

  function loadAnswers(selectedAnswers) {
    return (
      <div className={styles.answers_list}>
        {selectedAnswers.map((item) => (
          <AnswerItem
            id={item.answer_id}
            answer={item.body}
            user={item.answerer_name}
            date={item.date.slice(0, 10)}
            helpfulness={item.helpfulness}
            photos={item.photos}
            handleClick={upvoteOrReport}
            key={item.answer_id}
          />
        ))}
      </div>
    );
  }

  function displayAnswers() {
    if (answers.length < 1) {
      return 'NO ANSWERS';
    }
    // const seller = [];
    // for (let i = 0; i < answers.length; i += 1) {
    //   if (answers[i].answerer_name === 'Seller') {
    //     seller.push(answers[i]);
    //     answers.splice(i, 1);
    //   }
    // }
    return loadAnswers(answers);
  }

  function loadButton() {
    let button;
    if (moreThanTwo) {
      if (!loadMore) {
        button = (
          <button type="submit" onClick={getAllAnswers}>
            LOAD MORE ANSWERS
          </button>
        );
      } else {
        button = (
          <button type="submit" onClick={getTwoAnswers}>
            COLLAPSE ANSWERS
          </button>
        );
      }
    } else {
      button = <div />;
    }
    return button;
  }

  const addAnswer = () => {
    setShowAddAnswer(!showAddAnswer);
  };

  const postAnswer = (body, name, email, photos) => {
    const data = {
      question_id: qId,
      body,
      name,
      email,
      photos,
    };
    axios.post(`/api/answers/${qId}`, data)
      .then(() => {
        getTwoAnswers();
      });
  };

  return (
    <div className={styles.question_item}>
      <div className={styles.question_line}>
        <div className={styles.question}>
          Q:
          {' '}
          {question}
        </div>
        <div className={styles.q_vote}>
          Helpful?
          {' '}
          <button type="submit" onClick={upvoteQuestion}>
            Yes
          </button>
          (
          {helpfulness}
          )
          {' '}
          |
          {' '}
          <button type="submit" onClick={addAnswer}>
            Add Answer
          </button>
        </div>
      </div>
      <div className={showAddAnswer ? styles.show : styles.hide}>
        <AddAnswer
          question={question}
          handleClick={addAnswer}
          postAnswer={postAnswer}
        />
      </div>
      <br />
      {displayAnswers()}
      {loadButton()}
    </div>
  );
}
QuestionItem.propTypes = {
  question: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  qId: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
