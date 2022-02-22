import React from 'react';
import Photo from './photo';

function Photos( {pics} ) {
  return (
    <div>
      {pics.map((pic) => <Photo pic={pic} />)}
    </div>
  );
}

export default Photos;
