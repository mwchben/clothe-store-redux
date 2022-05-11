//takes initial state and the action (action has type i.e selected_product & payload i.e product)

import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [] 
};


export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            // ...state means existing state
            return {...state,products:payload};
    
        default:
            return state;
    }

};