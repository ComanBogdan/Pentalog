import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
import AppContextProvider from './Containers/App/context';
import store from "./store"
import { Provider } from "react-redux"


import { BrowserRouter } from "react-router-dom"


import './styles/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
     <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>

    </Provider>
    

);
