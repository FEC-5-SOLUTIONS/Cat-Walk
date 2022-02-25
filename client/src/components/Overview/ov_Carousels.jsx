import React, { useState } from 'react';
import style from './Overview.module.css';

// to-do: conditional rendering of arrows
// to-do: improve look of buttons
const arrows = {
  left: 'https://img.icons8.com/external-jumpicon-line-ayub-irawan/50/000000/external-arrow-arrows-jumpicon-line-jumpicon-line-ayub-irawan-40.png',
  right: 'https://img.icons8.com/external-jumpicon-line-ayub-irawan/50/000000/external-arrow-arrows-jumpicon-line-jumpicon-line-ayub-irawan-13.png',
  up: 'https://img.icons8.com/external-jumpicon-line-ayub-irawan/50/000000/external-arrow-arrows-jumpicon-line-jumpicon-line-ayub-irawan-10.png',
  down: 'https://img.icons8.com/external-jumpicon-line-ayub-irawan/50/000000/external-arrow-arrows-jumpicon-line-jumpicon-line-ayub-irawan-44.png',
};

function DisplaySection(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsInView = 7;
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
    const { length } = props;
    setCarouselIndex((newIndex + length) % length);
  };

  return (
    <div id="ThumbCarousel" className={style.ThumbCarousel}>
      <div id="ThumbCarousel-ViewPort" className={style.ThumbCarousel_Viewport}>
        <div
          id="ThumbCarousel-Inner"
          className={style.ThumbCarousel_Inner}
          style={{ transform: `translateY(-${carouselIndex * (100 * props.length ** -1)}%` }}
        >
          {' '}
          {
            props.variant.photos.map((v, i) => (
              <button
                id={`ThumbCarousel-ImageContainer-unit${i}`}
                key={`button-${v.url}`}
                className={style.ThumbCarousel_ImageContainer}
                onClick={() => props.updateIndex(i)}
                type="button"
                aria-label={`set main image to number ${i}`}

              >
                <img
                id={`ThumbCarousel-Image-photo${i}`}
                key={`image-${v.url}`}
                  className={
                    i === props.activeIndex
                      ? style.ThumbCarousel_Image_Selected
                      : style.ThumbCarousel_Image
                  }
                  src={v.thumbnail_url}
                  alt={`photo #${i}`}
                  style={{ height: '100%' }}
                />
              </button>
            ))
          }
        </div>
      </div>
      <div id="ThumbCarousel-Controls" className={style.ThumbCarousel_Controls}>
        <button onClick={() => { updateThumbCarouselPosition(carouselIndex - 1); }}>
          <img src={arrows.up} alt="scroll thumbnail section up" />
        </button>
        <button onClick={() => { updateThumbCarouselPosition(carouselIndex + 1); }}>
          <img src={arrows.down}  alt="scroll thumbnail section down"/>
        </button>
      </div>
    </div>
  );
}

function BigCarousel(props) {
  return (
    <div className={style.BigCarousel} id="Big Carousel">
      <div className={style.BigCarousel_Viewport}>
        <div className={style.BigCarousel_Controls}>
          <button
            aria-label="scroll main display to previous image"
            onClick={() => { props.updateIndex(props.activeIndex - 1); }}>
              <img src={arrows.left} alt="<<"/>
          </button>
          <button
            aria-label="scroll main display to next image"
            onClick={() => { props.updateIndex(props.activeIndex + 1); }}>
              <img src={arrows.right}  alt=">>"/>
          </button>
        </div>
        <div
          className={style.BigCarousel_Inner}
          style={{ transform: `translateX(-${props.activeIndex * 100 * (props.length ** -1)}%` }}
        >
          {
            props.variant.photos.map((v, i) => (
              <div key={`${v.name}${i}`} className={style.BigCarousel_ImageContainer}>
                <img
                  key={v.name}
                  className={style.BigCarousel_Image}
                  src={v.url}
                  alt={`image #${i}`}
                  name={`image number ${i}`}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export { DisplaySection, ThumbCarousel, BigCarousel };
