/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import classes from './RelatedItems.module.css';

function OutfitCard(props) {
  const { product, j } = props;
  const imageURL = product.styles[0].photos[0].thumbnail_url;

  return (
    <div className={classes.carouselItem} id={`carouselItemOutfit${j}`}>
      <div>
        <IoMdCloseCircleOutline className="action-btn" />
        <div className="card-item"><img className={classes.carouselItemImage} alt="outfit-card" src={imageURL !== null ? imageURL : 'https://bit.ly/2Tg8g4s'} /></div>
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
