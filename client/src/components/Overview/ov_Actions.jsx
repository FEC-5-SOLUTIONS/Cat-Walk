import React, { useState } from 'react';
import style from './Overview.module.css';

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
        <div id="addToBag"><button type="submit" onClick={handleClick}>add to bag</button></div>
        <div id="addToOutfit"><button type="submit" onClick={handleClick}>add to outfit</button></div>
      </div>
    </div>
  );
}

function SizeOptions(props) {
  return (
    <div id="size">
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
    <div id="quantity">
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
