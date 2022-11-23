import React, { useContext } from 'react';

// Components
import Product from './Shared/Product';
// Context
import { ProductContex } from '../context/ProductContexProvider';
import styles from "./Store.module.css";
const Store = () => {

    const products = useContext(ProductContex)

    return (
        <div className={styles.container} >            {
                products.map(product => <Product 
                                        key={product.id} 
                                        productData={product} 
                                        />)
            }
        </div>
    );
};

export default Store;