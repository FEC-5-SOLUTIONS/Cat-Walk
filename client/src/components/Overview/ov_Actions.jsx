import React, { useState } from 'react';
import style from './Overview.module.css';

// const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

function Actions(props) {
  // const [variant, setVariant] = useState(props.selectedVariant);
  const [selectedSKU, setSelectedSKU] = useState();
  const [selectedQTY, setSelectedQTY] = useState();

  const variant = props.selectedVariant;

  const handleClick = () => {
    console.log(`add ${selectedQTY} of sku: ${selectedSKU}`);
  };

  return (
    <div className={style.Actions}>
      <div className={style.Actions_Row}>
        <SizeOptions variant={variant} setSelectedSKU={(s) => setSelectedSKU(s)}/>
        <QuantityOptions variant={variant} />
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
          Object.entries(props.variant.skus).map( (unit, i) => {
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
  return (
    <div id="quantity">


      {/* <select>
        { quantities.map((q, i) => <option key={i} value={q}>{q}</option>) }
      </select> */}

    </div>
  );
}

export default Actions;
