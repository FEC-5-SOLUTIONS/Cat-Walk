import React, { useState } from 'react';
import style from './Overview.module.css';

// to-do: conditional rendering of arrows
// to-do: improve look of buttons

function DisplaySection(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsInView = 5;
  const { length } = props.variant.photos;

  const updateIndex = (newIndex) => {
    setActiveIndex((newIndex + length) % length);
  };

  if (!props.variant.name) return <div>...</div>;

  return (
    <div className={style.DisplaySection} id="display">
      <ThumbCarousel
        activeIndex={activeIndex}
        updateIndex={updateIndex}
        variant={props.variant}
        length={length}
      />
      <BigCarousel
        activeIndex={activeIndex}
        updateIndex={updateIndex}
        variant={props.variant}
        length={length}
      />
    </div>
  );
}

function ThumbCarousel(props) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const updateThumbCarouselPosition = (newIndex) => {
    let length = props.length;
    setCarouselIndex((newIndex + length) % length);
  };

  return (
    <div id="ThumbCarousel" className={style.ThumbCarousel}>
      <div id="ThumbCarousel-ViewPort" className={style.ThumbCarousel_Viewport}>
        <div
          id="ThumbCarousel-Inner"
          className={style.ThumbCarousel_Inner}
          style={{ transform: `translateY(-${carouselIndex * (100 * props.length ** -1)}%` }}
        > {
            props.variant.photos.map((v, i) => (
              <button
                id="ThumbCarousel-ImageContainer"
                key={i}
                className={style.ThumbCarousel_ImageContainer}
                onClick={() => props.updateIndex(i)}
                type="button"
              >
                <img
                  id="ThumbCarousel-Image"
                  key={i}
                  className={
                    i === props.activeIndex ?
                      style.ThumbCarousel_Image_Selected :
                      style.ThumbCarousel_Image }
                  src={v.thumbnail_url}
                  alt={v.name}
                  style={{ height: '100%' }}
                />
              </button>
            ))
          }
        </div>
      </div>
      <div id="ThumbCarousel-Controls" className={style.ThumbCarousel_Controls}>
        <button onClick={() => { updateThumbCarouselPosition(carouselIndex - 1); }}>↑</button>
        <button onClick={() => { updateThumbCarouselPosition(carouselIndex + 1); }}>↓</button>
      </div>
    </div>
  );
}

function BigCarousel(props) {
  return (
    <div className={style.BigCarousel} id="Big Carousel">
      <div className={style.BigCarousel_Viewport}>
        <div className={style.BigCarousel_Controls}>
          <button onClick={() => { props.updateIndex(props.activeIndex - 1); }}>←</button>
          <button onClick={() => { props.updateIndex(props.activeIndex + 1); }}>→</button>
        </div>
        <div
          className={style.BigCarousel_Inner}
          style={{ transform: `translateX(-${props.activeIndex * 100 * (props.length ** -1)}%` }}
        >
          {
            props.variant.photos.map((v, i) => (
              <div key={i} className={style.BigCarousel_ImageContainer}>
                <img
                  key={i}
                  className={style.BigCarousel_Image}
                  src={v.url}
                  alt={v.name}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export { DisplaySection, ThumbCarousel, BigCarousel };
