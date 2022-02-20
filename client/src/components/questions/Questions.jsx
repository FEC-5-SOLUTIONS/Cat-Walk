import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Questions.module.css';
import Search from './Search';
import QuestionItem from './QuestionItem';

export default function Questions() {
  const mounted = useRef(false);
  const [allQ, setallQ] = useState([]);
  const [moreQ, setMoreQ] = useState(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      const params = { product_id: 40348 };
      axios.get('/api/questions', { params })
        .then((res) => {
          setallQ(res.data.results);
        });
    }
  });

  const upvoteQuestion = (qId) => {
    const data = {
      question_id: qId,
    };
    axios.put(`/api/questions/${qId}`, data)
      .then(() => {
        const params = { product_id: 40348 };
        axios.get('/api/questions', { params })
          .then((res) => {
            setallQ(res.data.results);
          });
      });
  };

  function displayFourQuestions() {
    let display = [];
    if (allQ.length > 4) {
      display = allQ.slice(0, 4);
    } else {
      display = allQ;
    }
    return (
      <div className={styles.questions_list}>
        { display.map((item) => (
          <QuestionItem
            question={item.question_body}
            helpfulness={item.question_helpfulness}
            qId={item.question_id}
            handleClick={upvoteQuestion}
            key={item.question_id}
          />
        ))}
      </div>
    );
  }

  function loadAllQuestions() {
    return (
      <div className={styles.questions_list}>
        { allQ.map((item) => (
          <QuestionItem
            question={item.question_body}
            helpfulness={item.question_helpfulness}
            qId={item.question_id}
            handleClick={upvoteQuestion}
            key={item.question_id}
          />
        )) }
      </div>
    );
  }

  function getMoreQ(e) {
    e.preventDefault();
    setMoreQ(!moreQ);
  }

  return (
    <div className={styles.qna}>
      QUESTIONS & ANSWERS
      <Search />
      {moreQ ? loadAllQuestions() : displayFourQuestions()}
      <form className={styles.buttons}>
        <button type="submit" onClick={getMoreQ}>{moreQ ? 'COLLAPSE QUESTIONS' : 'MORE ANSWERED QUESTIONS'}</button>
        {' '}
        <button type="submit">ADD A QUESTION +</button>
      </form>
    </div>
  );
}
