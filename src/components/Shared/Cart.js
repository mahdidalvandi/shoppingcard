import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContexProvider';
import { shorten } from '../../helper/function';
import { quantityCounter } from '../../helper/function';
import styles from "./Cart.module.css";
const Cart = ({products}) => {
// ya dakhele ()Cart {props} baad az image , price, category = props.products pass dadan
    const {state , dispatch} = useContext(CartContext)
    const {image , price , category , title , quantity} = products
    console.log(products)
    return (
      <div className={styles.container} >
        <img src={image} className={styles.productImage}/>
        <div className={styles.data}>
        <p>{category}</p>
        <p>{shorten(title)}</p>
        <p>{price}$</p>
        </div>
        <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
        <div style={{display : "flex"}}>
        <div className={styles.buttonContainer}>
        <button onClick={()=>dispatch({type : "INCREASE",payload : products})} >+</button>
        <p>{quantity}</p>
       
        {quantityCounter(state , products.id) === 1 ?
          <button onClick={()=>dispatch({type : "REMOVE_ITEM" , payload : products})}>Remove</button>
        : <button onClick={()=>dispatch({type : "DECREASE" , payload : products})}>-</button> }
        </div>
        </div>
        </div>
    );
};
export default Cart;