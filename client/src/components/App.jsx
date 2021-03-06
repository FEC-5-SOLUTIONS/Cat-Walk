import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default
import styles from './App.module.css';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';
import Questions from './questions/Questions';
import getAvg from './utils/getAvg';

function App() {
  // set the states required
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [apiResponse, setApiResponse] = useState(false);
  const [meta, setMeta] = useState([]);
  const [average, setAvg] = useState(0);

  useEffect(() => {
    // if (relatedProducts.length !== 0) {
    // if (product.id) {
    axios.get('api/products')
      .then((res) => {
        // set state accordingly
        setRelatedProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, [product]);

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
  };
  // useEffect that functions like component did mount
  // empty dependecy array ensures that this only runs once

  useEffect(() => {
    // change api call to be api/product
    selectProduct(40344);
  }, []);

  // grabbing the meta obj whenever product state is changed
  useEffect(() => {
    if (product.id) {
      axios.get(`api/reviews/meta/${product.id}`)
        .then((res) => {
          // setMeta state accordingly
          setMeta(res.data);
        })
        .catch((err) => {
          console.log(err);
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
    <div id="App" className={styles.App}>
      <Overview
        product={product}
        average={average}
      />
      <RelatedItems
        relatedProducts={relatedProducts}
        selectProduct={selectProduct}
      />
      <Questions
        productId={product.id}
        productName={product.name}
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
