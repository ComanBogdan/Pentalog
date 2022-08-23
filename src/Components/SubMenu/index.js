import { Button, Container } from '@mui/material';
import React from 'react'
import { useAppContext } from '../../Containers/App/context';
import { Link, useNavigate } from 'react-router-dom';

const SubMenu = () => {

    const { setPath, setId} = useAppContext();

    let navigate = useNavigate();

    const handleClickDisplay = (param) => {
        setPath(param);
        setId('');
    }
  return (
    <Container>
            {/* <div>
                <Button onClick={() => handleClickDisplay("/cryptocurrencies")}>Cryptocurrencies</Button>
                <Button onClick={() => handleClickDisplay("/exchanges")}>Exchanges</Button>
                <Button onClick={() => handleClickDisplay("/nft")}>NFT</Button>
            </div> */}
            
            <Button onClick={() => {navigate("/")}}>Cryptocurrencies </Button>
            <Button onClick={() => {navigate("/exchanges")}}>Exchanges </Button>
            <Button onClick={() => {navigate("/nft")}}>NFT </Button>
        </Container>
  )
}

export default SubMenu

