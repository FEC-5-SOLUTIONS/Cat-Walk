import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';
import Questions from './questions/Questions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      apiResponse: false,
    };

    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
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
      console.log('in set product response.data: ', response.data);
      this.setState({
        product: response.data,
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
  }
}

export default App;
