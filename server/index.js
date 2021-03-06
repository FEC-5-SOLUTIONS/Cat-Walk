const express = require('express');
const axios = require('axios');
const auth = require('../config');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const headers = { authorization: auth.key };
const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// GET ALL PRODUCTS
app.get('/api/all_products', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products/`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// GET PRODUCT
app.get('/api/product', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products/${req.query.product_id}`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

app.get('/api/products', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/products`,
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
app.get('/api/reviews/meta/:productID', (req, res) => {
  axios({
    method: 'GET',
    url: `${baseUrl}/reviews/meta/?product_id=${req.params.productID}`,
    headers,
  }).then((axiosResponse) => res.status(200).send(axiosResponse.data))
    .catch(() => res.status(400).send());
});

app.get('/api/all_reviews/:sort/:productID', (req, res) => {
  // console.log('here')
  axios({
    method: 'GET',
    url: `${baseUrl}/reviews/?product_id=${req.params.productID}&sort=${req.params.sort}&count=109`,
    headers,
  }).then((axiosResponse) => res.send(axiosResponse.data));
});

// helpful click
app.put('/api/reviews/:id', (req, res) => {
  // console.log(req.params.id);
  // console.log(`${baseUrl}/reviews/${req.params.id}/helpful`);
  axios({
    method: 'PUT',
    url: `${baseUrl}/reviews/${req.params.id}/helpful`,
    headers,
  })
    .then((response) => response.status(204).send())
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

// report click
app.put('/api/report/:id', (req, res) => {
  // console.log(req.params.id);
  // console.log(`${baseUrl}/reviews/${req.params.id}/helpful`);
  axios({
    method: 'PUT',
    url: `${baseUrl}/reviews/${req.params.id}/report`,
    headers,
  })
    .then((result) => res.status(204).send())
    .catch((err) => {
      // console.log(err)
      res.status(400).send();
    });
});

// POST REVIEWS
app.post('/api/reviews', (req, res) => {
  console.log('entered');
  console.log('req.body: ', req.body);
  axios({
    method: 'POST',
    url: `${baseUrl}/reviews`,
    data: req.body,
    headers,
  })
    .then(() => res.send())
    .catch((err) => {
      // console.log(err);
      res.status(400).send();
    });
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
      page: req.query.page || 1,
      count: req.query.count || 5,
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
    .catch(() => {
      res.sendStatus(400);
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
    .catch(() => {
      res.sendStatus(400);
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
    .catch(() => {
      res.sendStatus(400);
    });
});

// POST AN ANSWER
app.post('/api/answers/:id', (req, res) => {
  console.log(req.body, 'req.body');
  axios({
    method: 'POST',
    url: `${baseUrl}/qa/questions/${req.body.question_id}/answers`,
    headers,
    data: req.body,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

// POST A QUESTION
app.post('/api/questions', (req, res) => {
  axios({
    method: 'POST',
    url: `${baseUrl}/qa/questions`,
    headers,
    data: req.body,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
