import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer';
import Header from './Components/Header';
import App from './Containers/App';
import AppContextProvider from './Containers/App/context';


import { BrowserRouter } from "react-router-dom"


import './styles/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
