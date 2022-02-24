/* eslint-disable react/prop-types */
import React from 'react';
import classes from './RelatedItems.module.css';

function CompareCard({
  itemName, itemFeatures, parentItemName, parentFeatures,
}) {
  return (
    <>
      <div id="compare-card" className={classes.item}>
        {/* { console.log('ITEMNAME', itemName) }
        { console.log('ITEMFeature', itemFeatures) } */}
        <h3 className={classes.h3}>{itemName}</h3>
        {itemFeatures.map((element) => (
          <ul className={classes.list}>
            <li>
              {element.feature}
              {' '}
              -
              {' '}
              {element.value}
            </li>
          </ul>
        ))}
      </div>
      <div className={classes.item}>
        <h3 className={classes.h3}>{parentItemName}</h3>
        {parentFeatures.map((element) => (
          <ul className={classes.list}>
            <li>
              {element.feature}
              {' '}
              -
              {' '}
              {element.value}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default CompareCard;
