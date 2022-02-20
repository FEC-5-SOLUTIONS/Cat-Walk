const express = require('express');
const axios = require('axios');
const auth = require('../config');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const headers = { authorization: auth.key };
const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// GET PRODUCT
app.get('/api/product', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products/${req.query.product_id}`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET STYLES
app.get('/api/styles', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products/${req.query.product_id}/styles`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET RELATED
app.get('/api/related', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products/${req.query.product_id}/related`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET REVIEWS
app.get('/api/reviews', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/reviews/`,
    params: {
      page: req.query.page || 1,
      count: req.query.count || 5,
      sort: req.query.sort || 'newest',
      product_id: req.query.product_id,
    },
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET QUESTIONS
app.get('/api/questions', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/qa/questions`,
    params: {
      page: req.query.page || 1,
      count: req.query.count || 5,
      product_id: req.query.product_id,
    },
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET ANSWERS
app.get('/api/answers', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/qa/questions/${req.query.question_id}/answers`,
    params: {
      question_id: req.query.question_id,
    },
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// MARK QUESTION AS HELPFUL
app.put('/api/questions/:id', (req, res) => {
  axios({
    method: 'PUT',
    url: `${baseUrl}/qa/questions/${req.body.question_id}/helpful`,
    headers,
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err, 'err in mark question as helpful');
    });
});

// MARK ANSWER AS HELPFUL
app.put('/api/answers/:id/helpful', (req, res) => {
  axios({
    method: 'PUT',
    url: `${baseUrl}/qa/answers/${req.body.answer_id}/helpful`,
    headers,
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err, 'err in mark answer as helpful');
    });
});

// REPORT ANSWER
app.put('/api/answers/:id/report', (req, res) => {
  axios({
    method: 'PUT',
    url: `${baseUrl}/qa/answers/${req.body.answer_id}/report`,
    headers,
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err, 'err in report answer');
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
