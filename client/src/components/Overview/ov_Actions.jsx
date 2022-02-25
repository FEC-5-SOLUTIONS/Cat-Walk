import React, { useState } from 'react';
import style from './Overview.module.css';

const socialMediaIcons = {
  pinterest: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-512.png',
  instagram: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png',
  facebook: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
  twitter: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png',
};

function Actions(props) {
  const [selectedSKU, setSelectedSKU] = useState(0);
  const [selectedQTY, setSelectedQTY] = useState(0);

  const variant = props.selectedVariant;

  const handleAddToCart = () => {
    alert(
      selectedSKU === 0 || selectedQTY === 0 ?
      'Select a size and quantity before adding to Bag!' :
      `Added ${selectedQTY} of sku: ${selectedSKU} to My Bag`
      );
  };

  const handleAddToOutfit = () => {
    alert(
      selectedSKU === 0 || selectedQTY === 0 ?
      'Select a size and quantity before adding to Outfit!' :
      `Added ${selectedQTY} of sku: ${selectedSKU} to My Outfit`
      );
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
        <div id="addToBag" className={style.AddToBag}>
          <button
            type="button"
            aria-label="add to cart"
            onClick={handleAddToCart}
          >
            add to bag
          </button>
        </div>
        <div id="addToOutfit" className={style.AddToOutfit}>
          <button
            type="button"
            aria-label="add to outfit"
            onClick={handleAddToOutfit}
          >
            add to outfit
          </button>
        </div>
      </div>
      <div className={style.Actions_Row}>
        <div id="Socials" className={style.SocialsIconContainer}>
          {
            Object.entries(socialMediaIcons).map((unit) => {
              const [name, url] = unit;
              return (
                <img
                  className={style.Socials_Icon}
                  src={url}
                  name={name}
                  alt={name}
                  key={name}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

function SizeOptions(props) {
  return (
    <div id="size" className={style.SelectSize}>
      <select onChange={(event) => props.setSelectedSKU(event.target.value)}>
        <option hidden>--</option>
        {
          Object.entries(props.variant.skus).map((unit, i) => {
            if (unit[1].quantity > 0) {
              const { size } = unit[1];
              const sku = unit[0];
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
        <option hidden>--</option>
        {
          [...Array(qty).keys()]
            .map((i) => {
              const j = i + 1;
              return <option key={j} value={j}>{j}</option>;
            })
        }
      </select>
    </div>
  );
}

export default Actions;
