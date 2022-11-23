import React, { useEffect, useState } from 'react';
import { getlink } from '../services/api';

export const ProductContex = React.createContext()

const ProductContexProvider = ({children}) => {
    const [data , SetData] = useState([])
    useEffect(()=>{
        const fetchApi =async()=>{
            SetData(await getlink())
        }
        fetchApi()
    },[])
    return (
        <div>
            <ProductContex.Provider value={data}>
                {children}
            </ProductContex.Provider>
        </div>
    );
};

export default ProductContexProvider;