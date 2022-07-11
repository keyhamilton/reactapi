import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Customers from './components/customers/customers';
import Books from './components/books/books';
import Add from './components/form/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Add />
    {/* <Customers/> */}
    <Books/>
  </div>
);


