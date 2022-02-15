/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import style from './Overview.module.css';

const product = {
  id: 40348, //40348
  campus: 'hr-rfp',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
};
const product_id = product.id;
const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [],
      selectedVariant: {},
      info: false,
    };

    this.setSelectedVariant = this.setSelectedVariant.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    }).then(
      (response) => {
        this.setState({ variants: response.data.results });
      },
    ).then( () => {
      this.state.variants.forEach(
        (v) => {
          if (v['default?']) {
            this.setState({ selectedVariant: v });
          }
        });
      }
    ).then( () => { this.setState({ info: true })}
    );
  }

  setSelectedVariant(v) {
    this.setState({ selectedVariant: v });
  }

  render() {
    if (!this.state.info) { return <div> test </div>; }

    return (
      <div className={style.Overview}>
        <div className={style.Overview_Top}>
          <div>
            <FeaturedImage variant={this.state.selectedVariant} />
          </div>
          <div>
            <div>{'<<placeholder - read all reviews>>'}</div>
            <ProductInfo product={product} variant={this.state.selectedVariant} />
            <StylesList variants={this.state.variants} setSelectedVariant={this.setSelectedVariant} />
            <Actions />
          </div>
        </div>
        <DescriptionAndFeatures product={product} />
      </div>
    );
  }
}

export default Overview;

function ProductInfo(props) {
  return (
    <div>
      <div className={style.info_SmallText}>{props.product.category}</div>
      <div className={style.info_BigText}>{props.product.name}</div>
      {/* <div className={style.info_SmallText}>{`$${props.variant.original_price}`}</div> */}
      <Price variant={props.variant}/>
      <div className={style.info_SmallText}>{`style > ${props.variant.name}`}</div>
    </div>
  );
}
function Price(props) {
  if(props.variant.sale_price) {
    return (
      <div>
        <sp className={style.price_onSale}>{`$${props.variant.original_price}`}</sp>
        <sp className={style.price_salePrice}>{`    $${props.variant.sale_price}`}</sp>
      </div>
    );
  } else {
    return <sp className={style.info_SmallText}>{`$${props.variant.original_price}`}</sp>
  }
}

function Actions(props){
  return (
    <div>
      <div id="size"><select>
        {
          sizes.map( (s) => <option value={s}>{s}</option>)
        }
      </select></div>
      <div id="quantity"><select>
        {
          quantities.map( (q) => <option value={q}>{q}</option>)
        }
      </select></div>
      <div id="addToBag"><button>add to bag</button></div>
      <div id="addToOutfit"><button>add to outfit</button></div>
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
        props.variants.map((variant, i) =>
        <StyleButton
          key={i}
          variant={variant}
          setSelectedVariant={setSelectedVariant}
        /> )
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

function DescriptionAndFeatures(props) {
  return (
    <div className={style.DescriptionAndFeatures}>
      <div className={style.desc_BigText}>{props.product.slogan}</div>
      <div className={style.desc_SmallText}>{props.product.description}</div>
    </div>
  );
}
