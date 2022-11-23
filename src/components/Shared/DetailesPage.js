import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContex } from '../../context/ProductContexProvider';
import { shorten } from '../../helper/function';

import styles from "../Shared/ProductDetails.module.css";

const DetailesPage = () => {
    const data = useContext(ProductContex)
    const {id} = useParams()
    const products = data[id - 1]
    const {image , price , description , title} = products;
    return (
        <div className={styles.container}>
        <img  className={styles.image} src={image} alt="image" style={{width :"230px"}} />
        
        <div className={styles.textContainer}>

        <p>{shorten(title)}</p>
        <p>{price}$</p>
        <p>{description}</p>
        </div>
        </div>
    );
};

export default DetailesPage;