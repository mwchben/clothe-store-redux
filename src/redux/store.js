import { legacy_createStore as createStore } from 'redux'; //{ createStore is depreciated }
import reducers from './reducers';

//createStore (reducer, [preloadedState], [enhancer]) Creates a Redux store that holds the complete state
// tree of your app. There should only be a single store in your app.

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;