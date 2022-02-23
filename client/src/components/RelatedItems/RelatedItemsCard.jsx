/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';
import classes from './RelatedItems.module.css';
import ItemCard from './ItemCard';
import Compare from './Compare';

function RelatedItemsCard(props) {
  const { product, i, selectProduct } = props;
  // const [styles, setStyles] = useState([]);
  const [image, setImage] = useState('');
  const [noImage, setReplacement] = useState('https://bit.ly/2Tg8g4s');
  const [showCompare, setCompare] = useState(false);
  // const [variants, setVariants] = useState([]);
  const [info, setInfo] = useState(false);

  const product_id = product.id;

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    })
      .then((response) => {
        const item = response.data;
        const thumbnail = item.results[0].photos[0].thumbnail_url;
        setImage(thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickOnItem = () => {
    // alert('Item clicked!');
    selectProduct(product_id);
  };

  const handleCompareButton = () => {
    setCompare(!showCompare);
  };

  const handleCloseModal = () => {
    setCompare(!showCompare);
  };

  return (
    <div className={classes.carouselItem} id={`carouselItemRelated${i}`}>
      {showCompare
        ? (
          <Compare
            key={product.id - 0.1}
            id={product.id}
            // parentId={product.parentId}
            name={product.name}
            showModal={handleCloseModal}
            product={product}
          />
        ) : null}
      <div>
        <MdStarBorder className="action-btn" />
        <ItemCard
          key={product.id - 0.25}
          id={product.id}
          // parentId={product.parentId}
          category={product.category}
          name={product.name}
          price={product.default_price}
          image={image}
          noImage={noImage}
          clickOnItem={handleClickOnItem}
          compareModal={handleCompareButton}
        />
      </div>
    </div>
  );
}

export default RelatedItemsCard;
