import React from 'react';

function Photos( {pic} ) {
  // console.log('pic: ', pic.url);
  return <img src={pic.url} alt=" pic here" />;
}

export default Photos;
