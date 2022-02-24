/* eslint-disable camelcase */
// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Overview.module.css';

import StyleSelector from './ov_StyleSelector';
import { DisplaySection, ThumbCarousel, BigCarousel } from './ov_Carousels';
import Actions from './ov_Actions';

function Overview(props) {
  const product = props.product;
  const product_id = props.product.id;

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
    <div id="Overview" className={style.Overview} data-testid="Overview">
      <div id="Overview-Grid" className={style.Overview_Grid}>
        <DisplaySection variant={selectedVariant} />
        <div id={"Details"} className={style.Details}>
          <ProductInfo product={product} variant={selectedVariant} />
          <StyleSelector
            variants={variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
          <Actions selectedVariant={selectedVariant} />
        </div>
        <Description product={product} />
        <FeaturesList product={product} />
      </div>
    </div>
  );
}

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
          <div key={feature}>{` ✓ ${feature.feature}: ${feature.value}`}</div>)
      }
    </div>
  );
}

export default Overview;
export { Overview, ProductInfo };
