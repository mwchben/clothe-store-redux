import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

//import action
import {setProducts } from '../redux/actions/product-action';
import ProductComponent from './product-component';

const ProductListing = () => {
    
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const resp = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=> {
            console.log('an error',err);
        })
        dispatch(setProducts(resp.data));
    }

    useEffect(() => {
        fetchProducts()
 
        //dispatch setProducts action to store the data to the redux store
    },[])

    console.log("products: ",products);

    return (
    <div className='ui grid container'>
        
        <ProductComponent />
    </div>
    );
}

export default ProductListing;