/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import classes from './RelatedItems.module.css';

function RelatedItemsCard(props) {
  const { product, i } = props;
  const imageURL = product.styles[0].photos[0].thumbnail_url;
  return (
    <div className={classes.carouselItem} id={`carouselItemRelated${i}`}>
      <div>
        <MdStarBorder className="action-btn" />
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

export default RelatedItemsCard;
