import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Product from './Navigation/Product';
import Customer from './Navigation/Customer';
import NotFound from './Navigation/NotFound';
import TempComp from './Navigation/TempComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <ul>
        <button type='button'>
          <li> <Link to="/">Home</Link></li>
        </button>
        <button type='button'>
          <li> <Link to="/Customer">Customer</Link></li>
        </button>
        <button type='button'>
          <li> <Link to="/Product">Product</Link></li>
        </button>
      </ul>
    </div>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/Customer/:id/:name' element={<Customer />} />
      <Route exact path='/Product' element={<Product />} />
      <Route path='Product/:val' element={<TempComp />} />
      <Route path='*' element={<NotFound />} />

    </Routes>

  </Router>
);

// setTimeout(() => {
//   root.unmount();
// }, 8000)
