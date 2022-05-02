//takes initial state and the action

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
            
            break;
    
        default:
            break;
    }

}