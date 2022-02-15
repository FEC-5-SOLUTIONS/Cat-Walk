import React from 'react';
import Overview from './Overview/Overview';
import RatingsAndReviews from './Ratings_Reviews/Ratings_Reviews';
import RelatedItems from './RelatedItems/RelatedItems';
import Questions from './questions/Questions';

function App() {
  return (
    <div>
      Hello World!
      <div>
        <Overview />
        <RelatedItems />
        <Questions />
        <RatingsAndReviews />
      </div>
    </div>
  );
}

export default App;
