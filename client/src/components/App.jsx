import React from 'react';
import ProductCardsData from './RelatedItems/ProductCardsData';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import Carousel from './RelatedItems/Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
}

export default App;
