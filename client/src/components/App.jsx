import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';
import Questions from './questions/Questions';
=======
import ProductCardsData from './RelatedItems/ProductCardsData';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import Carousel from './RelatedItems/Carousel';
>>>>>>> RelatedCard

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      product: {},
      apiResponse: false,
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
    return <div>{' '}</div>;
=======
      relatedProducts: ProductCardsData,
    };
  }

  render() {
    const { relatedProducts } = this.state;
    return (
      <div>
        <div>
          <Overview />
          <Carousel relatedProducts={relatedProducts} />
          <RatingsAndReviews />
        </div>
      </div>
    );
>>>>>>> RelatedCard
  }
}

export default App;
