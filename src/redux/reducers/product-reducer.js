//takes initial state and the action (action has type i.e selected_product & payload i.e product)

import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Benja",
            category: "Learner"
        },
    ]
};

export function productReducer (state,{type,payload}){
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return state;
    
        default:
            return state;
    }

}