import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carts from "../../src/carts.png"
import { CartContext } from '../context/CartContexProvider';
import styles from "./Navbar.module.css"
const Navbar = () => {
    const {state} = useContext(CartContext)
    console.log(state)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <Link to="/product" className={styles.productLink}>Products</Link>
            <div className={styles.iconcontainer}>
            <Link to="/cart" ><img src={carts} /></Link> 
            <span>{state.itemsCounter}</span>
            </div>
            </div>
        </div>
    );
};

export default Navbar;