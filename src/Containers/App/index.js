import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import routes from '../../routes';
import { useAppContext } from './context';

const App = () => {



    const {path, setPath, id, setId} = useAppContext();


    const handleClickDisplay = (param) => {
        setPath(param);
        setId('');
    }

  return (
    <div>
        <Header/>

        {/* temporary code */}
        <Container>
            <div>
                <Button onClick={() => handleClickDisplay("/cryptocurrencies")}>Cryptocurrencies</Button>
                <Button onClick={() => handleClickDisplay("/exchanges")}>Exchanges</Button>
                <Button onClick={() => handleClickDisplay("/nft")}>NFT</Button>
            </div>
        </Container>
        {/*  */}


        <Container>
            {routes(path,id)}
        </Container>
        <Footer/>
    </div>
  )
}

export default App