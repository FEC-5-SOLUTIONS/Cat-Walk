import React, { useState } from 'react';
import style from './Overview.module.css';

function StyleSelector(props) {
  function setSelectedVariant(v) {
    props.setSelectedVariant(v);
  }

  return (
    <div className={style.StyleSelector}>
      {
        props.variants.map((variant) => (
          <StyleButton
            key={variant}
            variant={variant}
            selectedVariant={props.selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        ))
      }
    </div>
  );
}

function StyleButton(props) {
  function handleClick() {
    // console.log(props.variant.name);
    props.setSelectedVariant(props.variant);
  }

  return (
    <div>
      { props.variant.style_id === props.selectedVariant.style_id ? <CheckMark /> : null }
      <img
        className={style.StyleButton}
        src={props.variant.photos[0].thumbnail_url}
        alt={props.variant.name}
        onClick={handleClick}
      />
    </div>
  );
}

function CheckMark() {
  return (
    <img
      className={style.Check}
      src="https://cdn.pixabay.com/photo/2014/03/25/16/58/check-mark-297739_960_720.png"
      // alt="✓"
    />
  );
}

export default StyleSelector;