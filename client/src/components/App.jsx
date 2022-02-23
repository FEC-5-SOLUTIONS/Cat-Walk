/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/Carousel';
import Questions from './questions/Questions';
import getAvg from './utils/getAvg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      apiResponse: false,
      relatedProducts: {},
    };

    const selectProduct = (id) => {
      axios({
        method: 'GET',
        url: '/api/product',
        params: {
          product_id: id,
        },
      }).then((response) => {
        this.setState({ relatedProducts: response.data });
        console.log('relatedProducts', this.state.relatedProducts);
        this.setProduct(response.data[0].id);
      });
    };
    // useEffect that functions like component did mount
    // empty dependecy array ensures that this only runs once

    useEffect(() => {
    // change api call to be api/product
      selectProduct(40344);
    }, []);

    render() {
      if (this.state.apiResponse) {
        return (
          <div id="App" className="App">
            <Overview
              product={this.state.product}
            />
            <RelatedItems
              product={this.state.product}
            />
            <Questions
              product={this.state.product}
            />
            <RatingsAndReviews
              product={this.state.product}
            />
          </div>
        );
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
}

export default App;
