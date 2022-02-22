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
      productID: 0,
      apiResponse: false,
    };

    this.setProductID = this.setProductID.bind(this);
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
      this.setState({
        productID: response.data[0].id,
      });
      // console.log(response.data[0].id);
    }).then(() => {
      this.setState({ apiResponse: true });
    });
  }

  setProductID(id) {
    this.setState({ productID: id });
  }

  render() {
    if (this.state.apiResponse) {
      return (
        <div id="App" className="App">
          <Overview
            productID={this.state.productID}
          />
          <RelatedItems
            productID={this.state.productID}
          />
          <Questions
            productID={this.state.productID}
          />
          <RatingsAndReviews
            productID={this.state.productID}
          />
        </div>
      );
    }
    return <div>{' '}</div>;
  }
}

export default App;
