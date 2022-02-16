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
    <div className={style.Overview}>
      <div className={style.Overview_Top}>
        <div>
          <FeaturedImage variant={selectedVariant} />
        </div>
        <div>
          <div>{'<<placeholder - read all reviews>>'}</div>
          <ProductInfo product={product} variant={selectedVariant} />
          <StylesList variants={variants} setSelectedVariant={setSelectedVariant} />
          <Actions />
        </div>
      </div>
      <div className={style.Overview_Bottom}>
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

function FeaturedImage(props) {
  // if (!props.variant) { return <div>test</div> }
  return (
    <div>
      <img
        className={style.FeaturedImage}
        src={props.variant.photos[0].url}
        alt={props.variant.name}
      />
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
            setSelectedVariant={setSelectedVariant}
          />
        ))
      }
    </div>
  );
}

function StyleButton(props) {
  function handleClick() {
    console.log(props.variant.name);
    props.setSelectedVariant(props.variant);
  }

  return (
    <div>
      <img
        className={style.Check}
        // src="https://pngtree.com/freepng/check-mark-icon-design-template-vector-isolated_4085369.html"
        src={props.variant.photos[0].thumbnail_url}
        alt="✓"
      />
      <img
        className={style.StyleButton}
        src={props.variant.photos[0].thumbnail_url}
        alt={props.variant.name}
        onClick={handleClick}
      />
    </div>
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
