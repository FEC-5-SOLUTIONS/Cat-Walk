import React, { useState } from 'react';
import style from './Overview.module.css';

// to-do: conditional rendering of arrows
// to-do: click handling of thumbnails
// to-do: selected thumbnail highlights

function DisplaySection(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsInView = 5;
  const { length } = props.variant.photos;

  const updateIndex = (newIndex) => {
    // if (newIndex < 0) {
    //   newIndex = length - itemsInView;
    // } else if (newIndex >= length - itemsInView + 1) {
    //   newIndex = 0;
    // }
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

  return (
    <div id="ThumbCarousel" className={style.ThumbCarousel}>
      <div id="ThumbCarousel-Controls" className={style.ThumbCarousel_Controls}>
        <button onClick={() => { props.updateIndex(props.activeIndex - 1); }}>↑</button>
        <button onClick={() => { props.updateIndex(props.activeIndex + 1); }}>↓</button>
      </div>
      <div id="ThumbCarousel-ViewPort" className={style.ThumbCarousel_Viewport}>
        <div
          id="ThumbCarousel-Inner"
          className={style.ThumbCarousel_Inner}
          style={{ transform: `translateY(-${props.activeIndex * (100 * length ** -1)}%` }}
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
                  className={style.ThumbCarousel_Image}
                  src={v.thumbnail_url}
                  alt={v.name}
                  style={{ height: '100%' }}
                />
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function BigCarousel(props) {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const { length } = props.variant.photos;

  // const updateIndex = (newIndex) => {
  //   if (newIndex < 0) {
  //     newIndex = length - 1;
  //   } else if (newIndex >= length) {
  //     newIndex = 0;
  //   }
  //   setActiveIndex(newIndex);
  // };

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
