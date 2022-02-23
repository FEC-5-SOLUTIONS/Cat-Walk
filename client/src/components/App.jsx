import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';
import Questions from './questions/Questions';
import getAvg from './utils/getAvg';

function App() {
  // set the states required
  const [product, setProduct] = useState({});
  const [apiResponse, setApiResponse] = useState(false);
  const [meta, setMeta] = useState([]);
  const [average, setAvg] = useState(0);

  const selectProduct = (id) => {
    axios({
      method: 'GET',
      url: '/api/product',
      params: {
        product_id: id,
      },
    }).then((response) => {
      // after get a response, set the product list
      // using getProduct function
      setProduct(response.data);
    });
  }
  // useEffect that functions like component did mount
  // empty dependecy array ensures that this only runs once

  useEffect(() => {
    // change api call to be api/product
    selectProduct(40344);
  }, []);

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
