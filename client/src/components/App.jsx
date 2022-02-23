/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import Carousel from './RelatedItems/Carousel';
import Questions from './questions/Questions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      apiResponse: false,
      relatedProducts: {},
    };

    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/all_products',
      params: {
        page: 1,
        count: 10,
      },
    }).then((response) => {
      this.setState({ relatedProducts: response.data });
      console.log('relatedProducts', this.state.relatedProducts);
      this.setProduct(response.data[0].id);
    });
  }

  setProduct(id) {
    axios({
      method: 'GET',
      url: '/api/product',
      params: { product_id: id },
    }).then((response) => {
      this.setState({
        product: response.data[0],
        apiResponse: true,
      });
    });
  }

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
    }
    return <div>{' '}</div>;
  }
}

export default App;
