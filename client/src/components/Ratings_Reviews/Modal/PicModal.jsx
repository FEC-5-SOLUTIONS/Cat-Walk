import React, { useState, useRef } from 'react';
import axios from 'axios';
import Stars from '../../Shared/StarsRedo';
import Chars from './Characteristics';
import styles from './Modal.module.css';

function PicModal( {url, setModalUrl} ) {
  return (
    <div className={styles.modalBackground} id="modalBackground">
      <div className={styles.modalContainer} id="modalContainer">
        <button onClick={() => setModalUrl(false)} type="button">X</button>
        <img src={url} alt="huh, something should be here" className={styles.picmodal} id="picModal" />
      </div>
    </div>
  );
}

export default PicModal;
