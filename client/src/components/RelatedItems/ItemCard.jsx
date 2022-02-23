/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React from 'react';
// import StarRating from './StarRating.jsx';
import classes from './RelatedItems.module.css';

function ItemCard(props) {
  const {
    category,
    image, name, noImage, price, clickOnItem, compareModal,
  } = props;
  { return (
    <div>
      <div onClick={clickOnItem}>
        {image === undefined
          ? (
            <div className={classes}>
              <div className={classes.loader} />
            </div>
          )
          : <img className={classes.image} src={image === null ? noImage : image} />}
        <h4 className="card-item text category">{category}</h4>
        <h2 className={classes.nameTitle}>{name}</h2>
        <p className={classes.par}>{`$${price}`}</p>
        {/* <StarRating
            id={id}
            parentId={parentId}
          /> */}
        <button className={classes.buttonCompare} onClick={compareModal}>Compare</button>
      </div>
    </div>
  );
  }
}

export default ItemCard;
