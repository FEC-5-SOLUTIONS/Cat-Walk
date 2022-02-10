import React from 'react';

//  styles is a placeholder object -
//  eventually we will add all of its properties into style.css
//  then import style.css into this component

const styles = {
  ProductDetail: 'ProductDetail',
};

function ProductDetail() {
  return (
    <div className={styles.ProductDetail} id={styles.ProductDetail}>
      here is the product detail section
    </div>
  );
}

export default ProductDetail;
