/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import classes from './RelatedItems.module.css';
import ItemCard from './ItemCard';
import Compare from './Compare';

function OutfitCard(props) {
  const { prod, j, selectProduct } = props;
  const [image, setImage] = useState('');
  const [noImage, setReplacement] = useState('https://bit.ly/2Tg8g4s');
  const [showCompare, setCompare] = useState(false);

  const product_id = prod.id;

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
    selectProduct(product_id);
  };

  const handleCompareButton = () => {
    setCompare(!showCompare);
  };

  const handleCloseModal = () => {
    setCompare(!showCompare);
  };

  return (
    <div className={classes.carouselItem} id={`carouselItemOutfit${j}`}>
      {showCompare
        ? (
          <Compare
            key={prod.id - 0.1}
            id={prod.id}
            // parentId={product.parentId}
            name={prod.name}
            showModal={handleCloseModal}
            product={prod}
          />
        ) : null}
      <div>
        <IoMdCloseCircleOutline className="action-btn" />
        <ItemCard
          key={prod.id - 0.25}
          id={prod.id}
          // parentId={product.parentId}
          category={prod.category}
          name={prod.name}
          price={prod.default_price}
          image={image}
          noImage={noImage}
          clickOnItem={handleClickOnItem}
          compareModal={handleCompareButton}
        />
      </div>
    </div>
  );
}

export default OutfitCard;
