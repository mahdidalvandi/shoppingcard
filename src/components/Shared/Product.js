import React from 'react';
import { useContext } from 'react';
import { isinCard , quantityCounter , shorten } from '../../helper/function';
import { CartContext } from '../../context/CartContexProvider';
import trash from "../../../src/trash.png"
import { Link } from 'react-router-dom';
import styles from "../Shared/Product.module.css"
const Product = ({productData}) => {
    const {state , dispatch} = useContext(CartContext)
    const {image , price  , title ,id} = productData
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={image} style={{width : "200px"}} />
            <div>
            <p>{shorten(title)}</p>
            <p>{price}$</p>
            <Link to={`/product/${id}`}>detailes</Link>
            <br></br>
            <div className={styles.container}>
            {isinCard(state , productData.id) ?
               <button onClick={()=>dispatch({type : "INCREASE" , payload : productData})}>+</button>
               :<button onClick={()=>dispatch({type : "ADD_ITEM" , payload : productData})}>Add To Cart</button>}
               {quantityCounter(state , id) >= 1 && <span>{quantityCounter(state, id)}</span>}
               {quantityCounter(state ,productData.id) > 1 && <button onClick={()=>dispatch({type : "DECREASE" , payload : productData})}>-</button>}
               {quantityCounter(state , productData.id) === 1 &&
               <button onClick={()=>dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src={trash} style={{width : "20px"}}/></button>}
            </div>

            </div>
        </div>
    );
};
export default Product;