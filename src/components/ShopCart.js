import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContexProvider';
import Cart from './Shared/Cart';
import styles from "./ShopCart.module.css";
const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext)
    console.log(state)
    return (
        <div className={styles.container}>
        <div className={styles.cartContainer}>
            {state.selectedItems.map(product =>
                <Cart key={product.id} products={product}/>)}
            </div>
            <div className={styles.payments}>
            <p><span> Items Counter: </span>{state.itemsCounter}</p>
           <p><span> Total Payment: </span> {state.total} $</p>
            </div> 
           <div className={styles.buttonContainer}>
            <button className={styles.checkout} onClick={()=>dispatch({type: "Checkout"})}>CheckOut</button>
            <button className={styles.clear} onClick={()=>dispatch({type: "Clear"})}>Clear</button>
          </div>
          {
            state.checkout &&  <div className={styles.complete}>
                  <h3>CheckOut Successfully </h3>
            <Link to="/product">Go To Shop</Link>
                </div>
          }
          {
            !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                  <h3>Want to buy More ?</h3>
            <Link to="/product">Go To Shop</Link>
                </div>
          }
        </div>
    );
};
export default ShopCart;