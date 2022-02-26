import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Questions.module.css';
import Search from './Search';
import QuestionItem from './QuestionItem';
import AddQuestion from './AddQuestion';

export default function Questions({ productId, productName }) {
  const [questions, setQuestions] = useState([]);
  const [moreQ, setMoreQ] = useState(false);
  const [moreThanTwo, setMoreThanTwo] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  // GET FIRST TWO QUESTIONS
  function getTwoQuestions() {
    const params = {
      product_id: productId,
      page: 1,
      count: 100,
    };
    axios.get('/api/questions', { params })
      .then((res) => {
        if (res.data.results.length > 2) {
          setQuestions(res.data.results.slice(0, 2));
          setMoreThanTwo(true);
        } else {
          setQuestions(res.data.results);
          setMoreThanTwo(false);
        }
        setMoreQ(false);
      });
  }

  // GET ALL QUESTIONS
  function getAllQuestions() {
    const params = {
      product_id: productId,
      page: 1,
      count: 100,
    };
    axios.get('/api/questions', { params })
      .then((res) => {
        setQuestions(res.data.results);
        setMoreThanTwo(true);
        setMoreQ(true);
      });
  }

  useEffect(() => {
    getTwoQuestions();
  }, [productId]);

  const search = (userInput) => {
    if (userInput.length > 2) {
      const temp = questions.filter((item) => {
        const q = item.question_body.toLowerCase();
        return q.includes(userInput.toLowerCase());
      });
      setQuestions(temp);
    }
  };

  // UPVOTE A QUESTION
  const upvoteQuestion = (qId) => {
    const data = {
      question_id: qId,
    };
    axios.put(`/api/questions/${qId}`, data)
      .then(() => {
        if (moreQ) {
          getAllQuestions();
        } else {
          getTwoQuestions();
        }
      });
  };

  function loadQuestions(selectedQuestions) {
    return (
      <div className={styles.questions_list}>
        { selectedQuestions.map((item) => (
          <QuestionItem
            question={item.question_body}
            helpfulness={item.question_helpfulness}
            qId={item.question_id}
            handleClick={upvoteQuestion}
            productName={productName}
            key={item.question_id}
          />
        ))}
      </div>
    );
  }

  function displayQuestions() {
    if (questions.length < 1) {
      return 'NO ASKED QUESTIONS';
    }
    return loadQuestions(questions);
  }

  function loadButton() {
    let button;
    if (moreThanTwo) {
      if (!moreQ) {
        button = (
          <button className={styles.qna_button} type="submit" onClick={getAllQuestions}>
            MORE ANSWERED QUESTIONS
          </button>
        );
      } else {
        button = (
          <button className={styles.qna_button} type="submit" onClick={getTwoQuestions}>
            COLLAPSE QUESTIONS
          </button>
        );
      }
    } else {
      button = <div />;
    }
    return button;
  }

  const addQuestion = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const postQuestion = (body, name, email) => {
    const data = {
      body,
      name,
      email,
      product_id: productId,
    };
    axios.post('/api/questions', data);
  };

  return (
    <div className={styles.qna}>
      <div className={styles.title}>
        QUESTIONS & ANSWERS
      </div>
      <Search handleClick={search} />
      {displayQuestions()}
      {loadButton()}
      {' '}
      <button
        className={styles.qna_button}
        type="submit"
        onClick={addQuestion}
      >
        ADD A QUESTION +
      </button>
      <div className={showAddQuestion ? styles.show : styles.hide}>
        <AddQuestion
          productName={productName}
          handleClick={addQuestion}
          postQuestion={postQuestion}
        />
      </div>
    </div>
  );
}
Questions.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};
