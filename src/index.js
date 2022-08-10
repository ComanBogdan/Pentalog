import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Pages/Homepage/Homepage';

import './styles/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Homepage/>
    <Footer/>
  </React.StrictMode>
);
