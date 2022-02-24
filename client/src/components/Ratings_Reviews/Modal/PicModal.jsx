import React, { useState, useRef } from 'react';
import axios from 'axios';
import Stars from '../../Shared/StarsRedo';
import Chars from './Characteristics';
import styles from './Modal.module.css';

function PicModal ( {url , setModalUrl} ) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={() => setModalUrl(false)} type="button">X</button>
        <img src={url} alt="https://static.wikia.nocookie.net/ultradragonball/images/f/f6/DOGE_IS_LIFE.jpg/revision/latest/scale-to-width-down/211?cb=20140101154403" className={styles.picmodal} />
      </div>
    </div>
  )
}

export default PicModal;
