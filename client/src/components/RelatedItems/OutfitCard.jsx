/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import classes from './RelatedItems.module.css';

function OutfitCard(props) {
  const { product, j } = props;
  const [styles, setStyles] = useState([]);
  const [info, setInfo] = useState(false);
  const product_id = product.id;

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    })
      .then((response) => {
        setStyles(response.data.results);
        setInfo(true);
      });
  }, [info]);
  console.log('productId :', product_id);
  console.log('STYLES outfit:', styles);
  // const imageURL = product.styles[0].photos[0].thumbnail_url;

  return (
    <div className={classes.carouselItem} id={`carouselItemOutfit${j}`}>
      <div>
        <IoMdCloseCircleOutline className="action-btn" />
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

export default OutfitCard;
