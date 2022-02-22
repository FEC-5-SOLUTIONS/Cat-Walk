/*
* @jest-environment jsdom
*/

import React from 'react';
import {
  render, getByText, getByTestId, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { Overview } from './Overview.jsx';

const product = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],
};

const variant = {
  style_id: 240500,
  name: 'Forest Green & Black',
  original_price: '140.00',
  sale_price: null,
  'default?': true,
  photos: [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  skus: {
    1394769: {
      quantity: 8,
      size: 'XS',
    },
    1394770: {
      quantity: 16,
      size: 'S',
    },
    1394771: {
      quantity: 17,
      size: 'M',
    },
    1394772: {
      quantity: 10,
      size: 'L',
    },
    1394773: {
      quantity: 15,
      size: 'XL',
    },
    1394774: {
      quantity: 4,
      size: 'XL',
    },
  },
};
const selectedVariant = variant;

// test('Overview component mounts', () => {
//   const {container, getByText } = render(<Overview product={product}/>);
//   expect(getByText('overview')).toBeInTheDocument();
// });

test('Overview component mounts', () => {
  render(<Overview product={product} variant={variant} />);
  expect(screen.getByTestId('Overview')).toBeInTheDocument();
});

// test('Default product text mounts', () => {
//   const {container, getByText } = render(<ProductInfo product={product} variant={variant}/>);
//   expect(getByText('Camo Onesie')).toBeInTheDocument();

// });

/*

Overview renders to app

Overview sends an http request

TopBar renders Logo
TopBar renders SearchField

SearchField is Searchable and Clickable?

ThumbCarousel renders images
ThumbCarousel images are clickable
ThumbCarousel has clickable up-down buttons
ThumbCarousel onclicks render new image to main display

BigCarousel renders image(s)
BigCarousel has clickable left-right buttons
BigCarousel handles clicking past min and max indexes of array
BigCarousel zoom createts popup/modal

ProductInfo renders text

StylesList renders images
Styleslist clickable, and render new style images to Display
StylesList shows checkmark on selected style
StylesList modifies price if item onsale in ProductInfo
StylesList shows text of selected style in ProductInfo

Actions component renders buttons and dropdowns
Actions-qty and AddToCart interact with Cart
Actions-qty interacts with Actions-Size
Actions-addToOutfit interacts with Outfit

Description renders text
FeaturesList renders text

*/
