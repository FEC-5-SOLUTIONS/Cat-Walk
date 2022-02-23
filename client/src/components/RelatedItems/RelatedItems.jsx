/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import classes from './RelatedItems.module.css';
// import { FiPlusCircle } from 'react-icons/fi';
import RelatedItemsCard from './RelatedItemsCard';
import OutfitCard from './OutfitCard';
import RelatedProductsHeader from './RelatedProductsHeader';
import OutfitHeader from './OutfitHeader';

const widthSpan = 100;

function RelatedItems(props) {
  const [sliderPositionRelated, setSliderPositionRelated] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  // const { product } = props;
  console.log('PROPS :', props);

  const translateFullSlidesRelated = (newPosition) => {
    const toTranslate = -widthSpan * newPosition;
    for (let i = 0; i < relatedProducts.length; `${i += 1}`) {
      const elem = document.getElementById(`carouselItemRelated${i}`);
      elem.style.transform = `translateX(${toTranslate}%)`;
    }
  };

  const prevSlideHandlerRelated = () => {
    let newPosition = sliderPositionRelated;
    if (newPosition > 0) {
      newPosition -= 1;
    }
    translateFullSlidesRelated(newPosition);
    setSliderPositionRelated(newPosition);
  };

  const nextSlideHandlerRelated = () => {
    let newPosition = sliderPositionRelated;
    if (newPosition < relatedProducts.length - 1) {
      newPosition += 1;
    }
    translateFullSlidesRelated(newPosition);
    setSliderPositionRelated(newPosition);
  };

  const translateFullSlidesOutfit = (newPosition) => {
    const toTranslate = -widthSpan * newPosition;
    for (let i = 0; i < relatedProducts.length; `${i += 1}`) {
      const elem = document.getElementById(`carouselItemOutfit${i}`);
      elem.style.transform = `translateX(${toTranslate}%)`;
    }
  };

  const prevSlideHandlerOutfit = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition -= 1;
    }
    translateFullSlidesOutfit(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandlerOutfit = () => {
    let newPosition = sliderPosition;
    if (newPosition < relatedProducts.length - 1) {
      newPosition += 1;
    }
    translateFullSlidesOutfit(newPosition);
    setSliderPosition(newPosition);
  };

  // eslint-disable-next-line max-len
  const displayItemsRelated = relatedProducts.map((product, index) => <RelatedItemsCard product={product} i={index} className={classes.carouselItem} id={`carouselItemRelated${index}`} />);
  const displayItemsOutfit = relatedProducts.map((product, index) => <OutfitCard product={product} j={index} className={classes.carouselItem} id={`carouselItemOutfit${index}`} />);

  return (
    <div>
      <RelatedProductsHeader id="header" />
      <section className={classes.Container}>
        <div>
          <MdKeyboardArrowLeft className={classes.leftArrow} onClick={prevSlideHandlerRelated} />
        </div>
        <div className={classes.displayFrame}>
          {
          displayItemsRelated
          }
        </div>
        <div>
          <MdKeyboardArrowRight className={classes.rightArrow} onClick={nextSlideHandlerRelated} />
        </div>
      </section>
      <OutfitHeader className={classes.Header} />
      <section className={classes.Container}>
        <div>
          <MdKeyboardArrowLeft className={classes.leftArrow} onClick={prevSlideHandlerOutfit} />
        </div>
        <div className={classes.displayFrame}>
          {
          displayItemsOutfit
          }
        </div>
        <div>
          <MdKeyboardArrowRight className={classes.rightArrow} onClick={nextSlideHandlerOutfit} />
        </div>
      </section>
    </div>
  );
}

export default RelatedItems;
