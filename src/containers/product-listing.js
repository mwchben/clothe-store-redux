import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductComponent from './product-component';

const ProductListing = () => {
    
    const products = useSelector(state => state);

    const fetchProducts = async() => {
        const resp = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=> {
            console.log('an error',err);
        })
        console.log(resp);
    }

    useEffect(() => {
        fetchProducts()
    },[])

    console.log(products);

    return (
    <div className='ui grid container'>
        
        <ProductComponent />
    </div>
    );
}

export default ProductListing;