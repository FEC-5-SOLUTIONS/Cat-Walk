import React from 'react';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';

function App() {
  return (
    <div>
      Hello World!
      <div>
        <Overview />
        <RelatedItems />
        <RatingsAndReviews />
      </div>
    </div>
  );
}

export default App;
