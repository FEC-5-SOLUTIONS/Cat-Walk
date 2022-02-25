/*
* @jest-environment jsdom
*/

import React from 'react';
import { render, getByText, getByTestId, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import regeneratorRuntime from 'regenerator-runtime';

import { Overview, ProductInfo, Description, FeaturesList } from './Overview.jsx';
import { product, products, productStyles } from './_SampleData';
import { StyleSelector, StyleButton, CheckMark } from './ov_StyleSelector';
import { Actions } from './ov_Actions';
import { ThumbCarousel, BigCarousel } from './ov_Carousels';

test('Overview component mounts', async () => {
  render(<Overview product={product} />);
  await waitFor(() => screen.getByTestId("Overview"));
  expect(screen.getByTestId("Overview")).toBeInTheDocument();
});

// test('Features List Component Mounts', () => {
//   const { container, getByText } = render(<FeaturesList product={product} />);
//   expect(getByText('✓ Fabric: Canvas')).toBeInTheDocument;
// });

// test('Default product text mounts', () => {
//   const { container, getByText } = render(<ProductInfo product={product} variant={productStyles} />);
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
