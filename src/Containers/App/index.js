import { Container } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import Coin from '../Coin';
import CryptocurrenciesTable from '../CryptocurrenciesTable';
import Dashboard from '../Dashboard';
import ExchangesTable from '../ExchangesTable';
import Login from '../Login';
import NftTable from '../NftTable';
import Signup from '../Signup';

const App = () => {

  return (
    <div>
        <Header/>
        <Container>
            <Routes>
                <Route path="/" element={<CryptocurrenciesTable />} />
                <Route path="/exchanges" element={<ExchangesTable />} />
                <Route path="/nft" element={<NftTable />} />
                <Route path="/coin/:coinName" element={<Coin />}/>
                <Route path="/login" element={<Login  />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/dashboard" element ={<Dashboard />}/>
                <Route path="*" element={<p>error 404</p>} />
            </Routes>
        </Container>
        <Footer/>
    </div>
  )
}

export default App