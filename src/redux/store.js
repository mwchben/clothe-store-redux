import { createStore } from "react-redux";
import reducers from './reducers/index ';

//createStore (reducer, [preloadedState], [enhancer]) Creates a Redux store that holds the complete state
// tree of your app. There should only be a single store in your app.

const store = createStore(reducers, {});

export default store;