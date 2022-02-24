/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './RelatedItems.module.css';
import CompareCard from './CompareCard';

function Compare(props) {
  const {
    product, id, showModal,
  } = props;
  const [parentFeatures, setParentFeatures] = useState([]);
  const [parentItemName, setParentItemName] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemFeatures, setItemFeatures] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getFeatures = (dataArr) => {
    const itemFeatures = [];
    const itemName = [];
    const promises = [];
    for (let i = 0; i < dataArr.length; i++) {
      promises.push(axios.get('/api/related/', { params: { product_id: dataArr[i] } })
        .then((res) => {
          itemFeatures.push(res.data.features);
          itemName.push(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        }));
    }
    Promise.all(promises).then(() => {
      setItemFeatures(itemFeatures[0]);
      setItemName(itemName[0]);
      setParentFeatures(itemFeatures[1]);
      setParentItemName(itemName[1]);
      setLoading(false);
    });
  };

  useEffect(() => {
    const idArr = [id];
    console.log('idArr :', idArr);
    getFeatures(idArr);
  }, []);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <h3>FETCHING DATA</h3>
        <div className={classes.loader} />
      </div>
    );
  }

  return (
    <div id="modal" className={classes.container} onClick={showModal}>
      { console.log('ITEMNAMEss', itemName) }
      { console.log('ITEMFeatureS', itemFeatures) }
      <CompareCard
        key={product.id - 0.25}
        id={product.id}
        parentId={product.parentId}
        itemName={itemName}
        itemFeatures={itemFeatures}
        parentItemName={parentItemName}
        parentFeatures={parentFeatures}
      />
    </div>
  );
}
export default Compare;
