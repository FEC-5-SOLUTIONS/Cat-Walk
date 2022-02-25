/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';
import classes from './RelatedItems.module.css';
import getAvg from '../utils/getAvg';
import ItemCard from './ItemCard';
import Compare from './Compare';

function RelatedItemsCard(props) {
  const {
    prod, products, i, selectProduct,
  } = props;
  const [productss, setProductss] = useState({});
  // const [relProducts, setRelProducts] = useState([]);
  // const [savedOutfits, setSavedOutfits] = useState(localStorage.getItem('myThreads') || []);
  const [outfits, setOutfits] = useState([]);
  const [image, setImage] = useState('');
  const [noImage, setReplacement] = useState('https://bit.ly/2Tg8g4s');
  const [showCompare, setCompare] = useState(false);
  const [meta, setMeta] = useState([]);
  // const [average, setAvg] = useState([]);
  // const [variants, setVariants] = useState([]);
  // const [info, setInfo] = useState(false);

  // console.log('PRODUCT :', products);

  // const product_id = prod.id;
  const selProduct = async  (id) => {
    axios({
      method: 'GET',
      url: '/api/product',
      params: {
        product_id: id,
      },
    }).then((response) => {
      // after get a response, set the product list
      // using getProduct function
      console.log('response.data :', response.data);
      // arr.push(response.data);
      setProductss(response.data);
    });
  };

  useEffect(() => {
    // console.log('Products :', productss);
    // for (let k = 0; k < products.length; k++) {
    //   const m = products[k];
    //   // console.log(typeof (m));
    //   selProduct(m);
    // // console.log(arr);
    // }
    selProduct(products[0]);
  }, []);
  // Loop through id's in products
  // Use the selectProduct function to get object for each id
  // push to array
  // set to state

  // const arr = [];
  // for (let k = 0; k < products.length; k++) {
  //   arr.push(selectProduct(products[k]));
  // }
  // setRelProducts(arr);
  // console.log('relative PRODS', product);

  // const saveOutfit = () => {
  //   // console.log('Outfits', outfits);
  //   const allOutfits = { ...savedOutfits, product };
  //   console.log('allOutfits', allOutfits);

  //   // console.log('productId2', productId);
  //   // const favProduct = selectProduct(productId);
  //   // console.log('favProduct', favProduct);
  //   // allOutfits[productId] = productWithRating;
  //   setSavedOutfits({ allOutfits });
  //   window.localStorage.setItem('myThreads', JSON.stringify(allOutfits));
  // };

  // get saved outfits on inital render
  // useEffect(() => {
  //   // const getSavedOutfits = JSON.parse(window.localStorage.getItem('myThreads'));
  //   console.log('SavedOutfits', savedOutfits);
  //   savedOutfits ? saveOutfit() : null;
  // }, [product_id]);

  // const useStateWithLocalStorage = (myThreads) => {
  //   const [savedOutfits, setSavedOutfits] = useState(
  //     localStorage.getItem('myThreads') || [],
  //   );

  //   useEffect(() => {
  //     localStorage.setItem(myThreads, savedOutfits);
  //   }, [savedOutfits]);

  //   return [savedOutfits, setSavedOutfits];
  // };
  // grabbing the meta obj whenever product state is changed
  // useEffect(() => {
  //   if (prod.id) {
  //     axios.get(`api/reviews/meta/${prod.id}`)
  //       .then((res) => {
  //         // setMeta state accordingly
  //         setMeta(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [prod]);

  // useEffect(() => {
  //   // console.log('META :', meta);
  // });

  // get saved outfits on inital render
  // useEffect(() => {
  //   const savedOutfits = JSON.parse(window.localStorage.getItem('mthreads12'));
  //   savedOutfits ? setOutfits(savedOutfits) : null;
  // }, [product_id]);

  // console.log('Outfits :', outfits);
  // const allOutfits = { ...outfits };
  // console.log('allOutfits :', allOutfits);

  // const saveOutfit = () => {
  //   // const allOutfits = { ...outfits };
  //   // const prod = allOutfits[i];
  //   console.log('Product to add', prod);
  //   console.log('Outfits', outfits);
  //   // const movies = allOutfits[product_id] ? [...[allOutfits], product] : product;
  //   const movies = [...outfits, prod];
  //   // const movies = ([...[allOutfits]] === {}) ? [product] : [...[allOutfits], product];
  //   console.log('movies :', movies);
  //   const movies2 = [...movies];
  //   setOutfits(movies2);
  //   window.localStorage.setItem('mthreads12', JSON.stringify({ ...movies2 }));
  //   console.log('savedOutfits', outfits);
  // };

  // const deleteOutfit = (id) => {
  //   const allOutfits = { ...products };
  //   delete allOutfits[id];
  //   setOutfits(allOutfits);
  //   window.localStorage.removeItem('myThreads');
  //   window.localStorage.setItem('myThreads', JSON.stringify(allOutfits));
  // };

  // const saveOutfit = () => {
  //   // console.log('Outfits', outfits);
  //   // const allOutfits = [...savedOutfits, product];
  //   const allOutfits = JSON.parse(window.localStorage.getItem('myThreads'));
  //   const toSave = [...allOutfits, product];
  //   console.log('allOutfits', allOutfits);

  //   window.localStorage.setItem('myThreads', JSON.stringify(toSave));
  //   setSavedOutfits(toSave);
  //   console.log('savedOutfits', savedOutfits);
  //   sessionStorage.clear();
  // };

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
            key={prod.id - 0.1}
            id={prod.id}
            // parentId={product.parentId}
            name={prod.name}
            showModal={handleCloseModal}
            product={prod}
          />
        ) : null}
      <div>
        <MdStarBorder className="action-btn" />
        {/* onClick={saveOutfit}  */}
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

export default RelatedItemsCard;
