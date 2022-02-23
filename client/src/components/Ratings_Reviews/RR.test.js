/*
* @jest-environment jsdom
*/

import React from 'react';
import {
  render, getByText, getByTestId, screen, waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import RatingsAndReviews from './Ratings_Reviews';
// const sum = require('./../sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const route = '/todos';

// const server = setupServer(
//   rest.get(route, (req, res, ctx) => {
//     return res(ctx.json([{
//       "userId": 1,
//       "id": 1,
//       "title": "todo one",
//       "completed": false
//     }, {
//       "userId": 2,
//       "id": 2,
//       "title": "todo two",
//       "completed": false
//     }]))
//   }),
// )
// //Need to mock out route
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

const product = {
  i: 40344,
  campu: 'hr-rfp',
  nam: 'Camo Onesie',
  sloga: 'Blend in to your crowd',
  descriptio: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  categor: 'Jackets',
  default_pric: '140.00',
  created_a: '2021-08-13T1:3:44.509Z',
  updated_a: '2021-08-13T1:3:44.509Z',
  feature: [
    {
      featur: 'Fabric',
      valu: 'Canvas',
    },
    {
      featur: 'Buttons',
      valu: 'Brass',
    },
  ],
};

const meta = {
  product_id: '40344',
  ratings: {
    1: '26',
    2: '34',
    3: '90',
    4: '82',
    5: '180',
  },
  recommended: {
    false: '109',
    true: '303',
  },
  characteristics: {
    Fit: {
      id: 135219,
      value: '2.8142076502732240',
    },
    Length: {
      id: 135220,
      value: '2.8961748633879781',
    },
    Comfort: {
      id: 135221,
      value: '3.2500000000000000',
    },
    Quality: {
      id: 135222,
      value: '3.4466019417475728',
    },
  },
};

const average = 3.8640776699029127;

// test('Should See The Average on the Screen', () => {
//   render(<RatingsAndReviews product={product} meta={meta} average={average} />);
//   await waitFor(()=>screen.getByText('todo one'))
//   expect(screen.getByTestId('Overview')).toBeInTheDocument();
// });




test('Should See The Average and stars on the Screen', async () => {
  // TODO test the todo list app!
  // render the component
  render(<RatingsAndReviews product={product} meta={meta} avg={average} />);
  await waitFor(() => screen.getByText('3.86'));

  expect(screen.getByText('3.86'));
  expect(screen.getByText('☆☆☆☆☆'));
  //test if the todos are on the screen
});
