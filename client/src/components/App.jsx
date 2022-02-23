<<<<<<< HEAD
/* eslint-disable react/destructuring-assignment */
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> b56e2024f7ef1bc663950b51e131e9c3ade0943b
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import Carousel from './RelatedItems/Carousel';
import Questions from './questions/Questions';
import getAvg from './utils/getAvg';

<<<<<<< HEAD
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      apiResponse: false,
      relatedProducts: {},
    };
=======
function App() {
  // set the states required
  const [product, setProduct] = useState({});
  const [apiResponse, setApiResponse] = useState(false);
  const [meta, setMeta] = useState([]);
  const [average, setAvg] = useState(0);
>>>>>>> b56e2024f7ef1bc663950b51e131e9c3ade0943b

  const selectProduct = (id) => {
    axios({
      method: 'GET',
      url: '/api/product',
      params: {
        product_id: id,
      },
    }).then((response) => {
<<<<<<< HEAD
      this.setState({ relatedProducts: response.data });
      console.log('relatedProducts', this.state.relatedProducts);
      this.setProduct(response.data[0].id);
=======
      // after get a response, set the product list
      // using getProduct function
      setProduct(response.data);
>>>>>>> b56e2024f7ef1bc663950b51e131e9c3ade0943b
    });
  }
  // useEffect that functions like component did mount
  // empty dependecy array ensures that this only runs once

  useEffect(() => {
    // change api call to be api/product
    selectProduct(40344);
  }, []);

<<<<<<< HEAD
  render() {
    if (this.state.apiResponse) {
      return (
        <div id="App" className="App">
          <Overview
            product={this.state.product}
          />
          <Carousel
            relatedProducts={this.state.relatedProducts}
          />
          <Questions
            product={this.state.product}
          />
          <RatingsAndReviews
            product={this.state.product}
          />
        </div>
      );
=======
  // grabbing the meta obj whenever product state is changed
  useEffect(() => {
    if (product) {
      axios.get(`api/reviews/meta/${product.id}`)
        .then((res) => {
          // setMeta state accordingly
          setMeta(res.data);
        })
        .catch((err) => {
        // console.log('err');
        });
>>>>>>> b56e2024f7ef1bc663950b51e131e9c3ade0943b
    }
  }, [product]);

  // establish an average whenever meta changes
  // default 0

  useEffect(() => {
    if (!Array.isArray(meta)) {
      setAvg(getAvg(meta.ratings));
      setApiResponse(true);
    }
  }, [meta]);

  return !apiResponse ? <div>Loading...</div> : (
    <div id="App" className="App">
      <Overview
        product={product}
        average={average}
      />
      <RelatedItems
        product={product}
        selectProduct={selectProduct}
      />
      <Questions
        product={product}
      />
      <RatingsAndReviews
        product={product}
        meta={meta}
        avg={average}
      />
    </div>
  );
}

export default App;
