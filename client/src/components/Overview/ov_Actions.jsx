import React, { useState } from 'react';
import style from './Overview.module.css';

// current bug: size dropdown does not reset either on style change or on addToCart/Outfit
const socialIconPinterest = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-512.png";
const socialIconInstagram = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png";
const socialIconFacebook = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png";
const socialIconTwitter = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png";

function Actions(props) {
  const [selectedSKU, setSelectedSKU] = useState(0);
  const [selectedQTY, setSelectedQTY] = useState(0);

  const variant = props.selectedVariant;

  const handleClick = () => {
    console.log(`add ${selectedQTY} of sku: ${selectedSKU}`);
  };

  const quantity = variant.skus[selectedSKU] ? variant.skus[selectedSKU].quantity : 0;

  return (
    <div className={style.Actions}>
      <div className={style.Actions_Row}>
        <SizeOptions
          variant={variant}
          setSelectedSKU={(s) => setSelectedSKU(s)}
        />
        <QuantityOptions
          quantity={quantity}
          setSelectedQTY={(q) => setSelectedQTY(q)}
        />
      </div>
      <div className={style.Actions_Row}>
        <div id="addToBag" className={style.AddToBag}><button type="submit" onClick={handleClick}>add to bag</button></div>
        <div id="addToOutfit" className={style.AddToOutfit}><button type="submit" onClick={handleClick}>add to outfit</button></div>
      </div>
      <div className={style.Actions_Row}>
        <div id="Socials" className={style.SocialsIconContainer}>
            <img className={style.Socials_Icon} src={socialIconPinterest} />
            <img className={style.Socials_Icon} src={socialIconInstagram} />
            <img className={style.Socials_Icon} src={socialIconFacebook} />
            <img className={style.Socials_Icon} src={socialIconTwitter} />
        </div>
      </div>
    </div>
  );
}

function SizeOptions(props) {
  return (
    <div id="size" className={style.SelectSize}>
      <select onChange={(event) => props.setSelectedSKU(event.target.value)}>
        <option hidden>{'--'}</option>
        {
          Object.entries(props.variant.skus).map((unit, i) => {
            if (unit[1].quantity > 0) {
              let size = unit[1].size;
              let sku = unit[0];
              return <option key={i} value={sku}>{size}</option>;
            }
          })
        }
      </select>
    </div>
  );
}

function QuantityOptions(props) {
  const qty = props.quantity < 15 ? props.quantity : 15;
  return (
    <div id="quantity" className={style.SelectQuantity}>
      <select onChange={(event) => props.setSelectedQTY(event.target.value)}>
        <option hidden>{'--'}</option>
        {
          [...Array(qty).keys()]
            .map((i) => {
              let j = i + 1;
              return <option key={j} value={j}>{j}</option>;
            })
        }
      </select>
    </div>
  );
}

export default Actions;
