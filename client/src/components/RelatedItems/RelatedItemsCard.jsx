/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';
import classes from './RelatedItems.module.css';

function RelatedItemsCard(props) {
  const { product, i } = props;
  const [styles, setStyles] = useState([]);
  // const [info, setInfo] = useState(false);
  const product_id = product.id;
  // console.log('productId', product_id);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    })
      .then((response) => {
        setStyles(response.data.results);
        // setInfo(true);
      });
  });
  console.log('productId :', product_id);
  console.log('STYLES related:', styles);

  // const imageURL = styles.photos.thumbnail_url;
  return (
    <div className={classes.carouselItem} id={`carouselItemRelated${i}`}>
      <div>
        <MdStarBorder className="action-btn" />
        {/* <div className="card-item"><img className={classes.carouselItemImage} alt="outfit-card" src={imageURL !== null ? imageURL : 'https://bit.ly/2Tg8g4s'} /></div> */}
        <div className="card-item text category">{ product.category }</div>
        <div className="card-item text name">{ product.name }</div>
        <div className="card-item text">
          $
          { product.price }
        </div>
        <div className="card-item text rating">{ product.rating }</div>
      </div>
    </div>
  );
}

export default RelatedItemsCard;
