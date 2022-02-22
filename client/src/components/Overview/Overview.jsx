/* eslint-disable camelcase */
// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Overview.module.css';

import StyleSelector from './ov_StyleSelector';
import { ThumbCarousel, BigCarousel } from './ov_Carousels';
import Actions from './ov_Actions';

const product = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],
};

const product_id = product.id;

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
          }
        });
      });
  }, [info]);

  if (!selectedVariant.name) { return <div>overview</div>; }

  return (
    <div id="Overview" className={style.Overview}>
      <div id="Overview-Grid" className={style.Overview_Grid} >
        <ThumbCarousel variant={selectedVariant} />
        <BigCarousel variant={selectedVariant} />
        <ProductInfo product={product} variant={selectedVariant} />
        <StyleSelector
          variants={variants}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
        <Actions selectedVariant={selectedVariant}/>
        <Description product={product} />
        <FeaturesList product={product} />
      </div>
    </div>
  );
}

export default Overview;

function ProductInfo(props) {
  return (
    <div className={style.ProductInfo}>
      <div>★★★★☆</div>
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
      {
        props.product.features.map((feature) =>
          <div>{` ✓ ${feature.feature}: ${feature.value}`}</div>)
      }
    </div>
  );
}
