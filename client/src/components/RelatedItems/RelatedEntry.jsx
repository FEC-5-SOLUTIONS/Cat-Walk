/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Carousel from './Carousel';

function RelatedEntry({
  productId, setProductId, overviewProduct, overviewRating,
}) {
  const [relatedProducts] = useState([]);
  // const [outfits] = useState([]);
  const [animate] = useState(false);
  // const [relatedIds] = useState([13024, 13025, 13030, 13029]);
  // const [initialLoadDone] = useState(false);

  // // get saved outfits on inital render
  // useEffect(() => {
  //   const savedOutfits = JSON.parse(window.localStorage.getItem('myThreads'));
  //   savedOutfits ? setOutfits(savedOutfits) : null;
  // }, [productId]);

  // // get related products when the productId changes
  // useEffect(() => {
  //   if (initialLoadDone) {
  //     axios.get('/relatedIds', { params: { productId } })
  //       .then((response) => {
  //         setRelatedIds(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     setInitialLoadDone(true);
  //   }
  // }, [productId]);

  // useEffect(() => {
  //   if (relatedIds.length !== 0) {
  //     (async () => {
  //       const allRelatedProducts = await getRelatedProductsMemo;
  //       setRelatedProducts(allRelatedProducts);
  //       setAnimate(true);
  //     })();
  //   }
  // }, [relatedIds]);

  // // gets related products for each id
  // const getRelatedProducts = async (ids) => {
  //   try {
  //     const items = await ids.map((id) => getRelatedProductById(id));
  //     const relatedItems = await Promise.all(items);
  //     return relatedItems;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // // fetches a related product from the server
  // const getRelatedProductById = async (id) => {
  //   let relatedProduct = {};
  //   await axios.get('/relatedProduct', { params: { productId: id } })
  //     .then((response) => {
  //       relatedProduct = response.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return relatedProduct;
  // };

  // const getRelatedProductsMemo = useMemo(() => getRelatedProducts(relatedIds), [relatedIds]);

  return (
    <>
      <h2 className="section-header">RELATED PRODUCTS</h2>
      <CSSTransition
        in={animate}
        appear
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <Carousel
          related
          products={relatedProducts}
          productId={productId}
          setProductId={setProductId}
          overviewProduct={overviewProduct}
          overviewRating={overviewRating}
        />
      </CSSTransition>
      {/* <h2 className="section-header">YOUR OUTFIT</h2>
      <CSSTransition
        in={animate}
        appear
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <Carousel
          related={false}
          products={outfits}
          productId={productId}
          setProductId={setProductId}
          setOutfits={setOutfits}
          overviewProduct={overviewProduct}
          overviewRating={overviewRating}
        />
      </CSSTransition> */}
    </>
  );
}

export default RelatedEntry;
