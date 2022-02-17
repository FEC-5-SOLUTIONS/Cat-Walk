import React from 'react';

function Photos( {pic} ) {
  console.log('pic: ', pic.url);
  return <img src={pic.url} alt="" />;
}

export default Photos;
