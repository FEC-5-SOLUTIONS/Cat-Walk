/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdCompareArrows } from 'react-icons/md';
// import StarRating from './StarRating.jsx';
import classes from './RelatedItems.module.css';

function ItemCard(props) {
  const {
    category,
    image, name, noImage, price, clickOnItem, compareModal,
  } = props;
  { return (
    <div classes={classes.carouselItem} onClick={clickOnItem}>
      <div>
        {image === undefined
          ? (
            <div className={classes}>
              <div className={classes.loader} />
            </div>
          )
          : <img className={classes.image} src={image === null ? noImage : image} />}
        <div className={classes.productCardInfo}>
          <div className={classes.productMsgInfo}>
            <h4 className={classes.productCardSubtitle}>{category}</h4>
            <h2 className={classes.productCardTitle}>{name}</h2>
          </div>
          <div className={classes.productCardAnimationWrapper}>
            <p className={classes.par}>{`$${price}`}</p>
          </div>
          <span onClick={compareModal}><MdCompareArrows className="action-btn" /></span>
          {/* <StarRating
            id={id}
            parentId={parentId}
          /> */}
          {/* <button className={classes.buttonCompare} onClick={compareModal}>Compare</button> */}
        </div>
      </div>
    </div>
  );
  }
}

export default ItemCard;
