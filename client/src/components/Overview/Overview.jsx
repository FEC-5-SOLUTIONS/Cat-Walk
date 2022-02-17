/* eslint-disable camelcase */
// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Overview.module.css';

const product =
{
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
};
// {
//   id: 40348, // 40348
//   campus: 'hr-rfp',
//   name: 'Heir Force Ones',
//   slogan: 'A sneaker dynasty',
//   description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
//   category: 'Kicks',
//   default_price: '99.00',
//   created_at: '2021-08-13T14:38:44.509Z',
//   updated_at: '2021-08-13T14:38:44.509Z',
// };

const product_id = product.id;
const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

function Overview() {
  const [variants, setVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState({ });
  const [info, setInfo] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    })
      .then((response) => {
        setVariants(response.data.results);
        setInfo(true);
      })
      .then(() => {
        variants.forEach((v) => {
          if (v['default?']) {
            setSelectedVariant(v);
          }});
      });
  }, [info]);

  if (!selectedVariant.name) { return <div>overview</div>; }
  // console.log(selectedVariant);
  // return <div> hello </div> ;
  return (
    <div id="Overview" className={style.Overview}>
      <div id="Overview-Top" className={style.Overview_Top}>
        <div id="Display-Section" className={style.DisplaySection}>
          <ThumbCarousel variant={selectedVariant} />
          <BigCarousel variant={selectedVariant} />
          {/* <FeaturedImage variant={selectedVariant} /> */}
        </div>
        <div id="Info-Section">
          <div>{'<<placeholder - read all reviews>>'}</div>
          <ProductInfo product={product} variant={selectedVariant} />
          <StylesList
            variants={variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
          <Actions />
        </div>
      </div>
      <div id="Overview-Bottom" className={style.Overview_Bottom}>
        <Description product={product} />
        <FeaturesList />
      </div>
    </div>
  );
}

export default Overview;

function ProductInfo(props) {
  return (
    <div className={style.ProductInfo}>
      <div className={style.info_SmallText}>{props.product.category}</div>
      <div className={style.info_BigText}>{props.product.name}</div>
      <div><Price variant={props.variant} /></div>
      <div className={style.info_SmallText}>{`style > ${props.variant.name}`}</div>
    </div>
  );
}
function Price(props) {
  if (props.variant.sale_price) {
    return (
      <div>
        <div className={style.price_onSale}>{`$${props.variant.original_price}`}</div>
        <div className={style.price_salePrice}>{`    $${props.variant.sale_price}`}</div>
      </div>
    );
  }
  return <sp className={style.info_SmallText}>{`$${props.variant.original_price}`}</sp>;
}

function Actions() {
  return (
    <div className={style.Actions}>
      <div className={style.Actions_Row}>
        <div id="size">
          <select>
            {
            sizes.map((s, i) => <option key={i} value={s}>{s}</option>)
          }
          </select>
        </div>
        <div id="quantity">
          <select>
            {
            quantities.map((q, i) => <option key={i} value={q}>{q}</option>)
          }
          </select>
        </div>
      </div>
      <div className={style.Actions_Row}>
        <div id="addToBag"><button type="submit">add to bag</button></div>
        <div id="addToOutfit"><button type="submit">add to outfit</button></div>
      </div>
    </div>
  );
}

function ThumbCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  let itemsInView = 5;
  let length = props.variant.photos.length;

  const updateIndex = (newIndex) => {
    // console.log(`${newIndex} / ${length}`);

    if (newIndex < 0) {
      newIndex = length - itemsInView;
    } else if (newIndex >= length - itemsInView + 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div id="ThumbCarousel" className={style.ThumbCarousel} >
      <div id="ThumbCarousel-Controls" className={style.ThumbCarousel_Controls}>
          <button onClick={() => {updateIndex(activeIndex - 1)}}>{'↑'}</button>
          <button onClick={() => {updateIndex(activeIndex + 1)}}>{'↓'}</button>
        </div>
      <div id="ThumbCarousel-ViewPort" className={style.ThumbCarousel_Viewport}>
        <div id="ThumbCarousel-Inner"
          className={style.ThumbCarousel_Inner}
          style={{ transform: `translateY(-${activeIndex * (100 * length ** -1)}%` }}
        >
          {
            props.variant.photos.map((v, i) => (
              <div id="ThumbCarousel-ImageContainer" key={i} className={style.ThumbCarousel_ImageContainer}>
                <img
                  id="ThumbCarousel-Image"
                  key={i}
                  className={style.ThumbCarousel_Image}
                  src={v.thumbnail_url}
                  alt={v.name}
                  style={{ height: '100%' }}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function BigCarousel(props) {
  // console.log(props.variant.photos);
  const [activeIndex, setActiveIndex] = useState(0);
  let length = props.variant.photos.length;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = length - 1;
    } else if (newIndex >= length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className={style.BigCarousel_Viewport}>
      <div className={style.BigCarousel_Controls}>
        <button onClick={() => {updateIndex(activeIndex - 1)}}>{'←'}</button>
        <button onClick={() => {updateIndex(activeIndex + 1)}}>{'→'}</button>
      </div>
      <div
        className={style.BigCarousel_Inner}
        style={{ transform: `translateX(-${activeIndex * 100 * (length ** -1)}%` }}
      >
        {
          props.variant.photos.map((v, i) => (
            <div key={i} className={style.BigCarousel_ImageContainer} >
              <img
                key={i}
                className={style.BigCarousel_Image}
                src={v.url}
                alt={v.name}
                // style={{ width: "100%" }}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

function StylesList(props) {
  function setSelectedVariant(v) {
    props.setSelectedVariant(v);
  }

  return (
    <div className={style.StyleButtonContainer}>
      {
        props.variants.map((variant, i) => (
          <StyleButton
            key={i}
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
      src={'https://cdn.pixabay.com/photo/2014/03/25/16/58/check-mark-297739_960_720.png'}
      // alt="✓"
    />
  );
}

function Description(props) {
  return (
    <div className={style.Description}>
      <div className={style.desc_BigText}>{props.product.slogan}</div>
      <div className={style.desc_SmallText}>{props.product.description}</div>
    </div>
  );
}

function FeaturesList(props) {
  return (
    <div className={style.FeaturesList}>
      <div>✓   feature 1</div>
      <div>✓   feature 2</div>
      <div>✓   feature 3</div>
    </div>
  );
}
