import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SubMenu from '../../Components/SubMenu';

import routes from '../../routes';
import Coin from '../Coin';
import CryptocurrenciesTable from '../CryptocurrenciesTable';
import ExchangesTable from '../ExchangesTable';
import NftTable from '../NftTable';
import { useAppContext } from './context';


const App = () => {

    // const { path, id} = useAppContext();


    

  return (
    <div>
        <Header/>
        <SubMenu />
        <Container>
            <Routes>
                <Route path="/" element={<CryptocurrenciesTable />} />
                <Route path="/exchanges" element={<ExchangesTable />} />
                <Route path="/nft" element={<NftTable />} />
                <Route path="/coin/:coinId" element={<Coin />}/>
                <Route path="*" element={<p>error 404</p>} />
            </Routes>

            {/* {routes(path,id)} */}

        </Container>
        <Footer/>
    </div>
  )
}

export default App