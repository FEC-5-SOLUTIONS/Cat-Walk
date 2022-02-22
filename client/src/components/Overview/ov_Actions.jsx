import React, { useState } from 'react';
import style from './Overview.module.css';

const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

function Actions(props) {
  const [variant, setVariant] = useState(props.selectedVariant);

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

export default Actions;