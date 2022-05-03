//combines all reducers 

import { combineReducers } from 'react-redux';
import { productReducer } from './product-reducer';

const reducers = combineReducers(
    {
        allProducts : productReducer
    }
)

export default reducers;