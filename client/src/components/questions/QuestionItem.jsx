import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AnswerItem from './AnswerItem';

export default function QuestionItem({
  question, helpfulness, qId, handleClick,
}) {
  const mounted = useRef(false);
  const [answers, setAnswers] = useState([]);
  const [moreThanTwo, setMoreThanTwo] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  // GET FIRST TWO ANSWERS
  function getTwoAnswers() {
    const params = {
      question_id: qId,
    };
    axios.get('/api/answers', { params })
      .then((res) => {
        if (res.data.results.length > 2) {
          setAnswers(res.data.results.slice(0, 2));
          setMoreThanTwo(true);
        } else {
          setAnswers(res.data.results);
          setMoreThanTwo(false);
        }
        setLoadMore(false);
      });
  }

  // GET ALL ANSWERS
  function getAllAnswers() {
    const params = {
      question_id: qId,
    };
    axios.get('/api/answers', { params })
      .then((res) => {
        setAnswers(res.data.results);
        setLoadMore(true);
        setMoreThanTwo(true);
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
      <div>
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
      return 'No Answers Found';
    }
    return loadAnswers(answers);
  }

  // TOGGLE LOADMORE
  function handleLoadMore() {
    setLoadMore(!loadMore);
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

  return (
    <div>
      Q:
      {' '}
      {question}
      {' '}
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
      <button type="submit">
        Add Answer
      </button>
      <br />
      {displayAnswers()}
      {loadButton()}
      {/* {answers.length > 2 ? <button type="submit" onClick={handleLoadMore}>{loadMore ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}</button> : <div />} */}
    </div>
  );
}
QuestionItem.propTypes = {
  question: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  qId: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
