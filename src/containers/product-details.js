import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

    const { productID } =useParams();
    console.log(productID);

    return (
    <div >
        <br></br>
        <h4>ProductDetails</h4>
    </div>
    );
}

export default ProductDetails;