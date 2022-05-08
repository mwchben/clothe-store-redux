import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/header';
import ProductListing from './containers/product-listing';
import ProductDetails from './containers/product-details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
            <Route path='/' exact element={<ProductListing/>} />
            <Route path='/:productId' exact element={<ProductDetails/>} />
            <Route>404 not found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
