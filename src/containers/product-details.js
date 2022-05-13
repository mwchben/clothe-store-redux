import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct } from '../redux/actions/product-action';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {

    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch;
    console.log(productId);

    

    const fetchProductsDetails = async() => {

        const url = `https://fakestoreapi.com/products/${productId}`;
        const resp = await axios
        .get(url)
        .catch((err) => {
            console.log('err',err)
        })

        dispatch(selectedProduct(resp.data));
    } 


    useEffect(() => {
            if (productId && productId !== "") fetchProductsDetails();
            
    },[productId])


    return (
    <div >
        <br></br>
        <h4>ProductDetails</h4>
    </div>
    );
}

export default ProductDetails;