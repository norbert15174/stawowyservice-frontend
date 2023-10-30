import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/home/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealizationMain from './components/realization/main';
import SingleRealization from './components/realization/singlerealization';
import Footer from './components/home/footer';
import ProductMain from './components/products/main';
import ContactMain from './components/contact/main';
import store from "./static/redux/store";
import { Provider } from "react-redux";
import SingleProduct from './components/products/singleproduct';
import QuotationMain from './components/quotation/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/realization" element={<RealizationMain />} />
          <Route exact path="/realization/:id" element={<SingleRealization />} />
          <Route exact path="/products" element={<ProductMain />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/contact" element={<ContactMain />} />
          <Route exact path="/quotation" element={<QuotationMain />} />
      
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  </Provider>
  </>
);

reportWebVitals();
