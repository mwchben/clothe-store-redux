import React from 'react';
import { useSelector } from 'react-redux';

const ProductListing = () => {
    
    const products = useSelector(state => state);

    console.log(products);

    return (
    <div className='ui grid container'>
        <br></br>
        <h4>ProductListing</h4>
    </div>
    );
}

export default ProductListing;