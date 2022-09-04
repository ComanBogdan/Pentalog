import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SubMenu = () => {

    let navigate = useNavigate();

  return (
    <Container>
      <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs:4, sn:8, md:12}}>
        <Grid item xs={4}>
        <Button onClick={() => {navigate("/")}}>Cryptocurrencies </Button>

        </Grid>
        <Grid item xs={4}>
        <Button onClick={() => {navigate("/exchanges")}}>Exchanges </Button>
        </Grid>
        <Grid item xs={4}>
        <Button onClick={() => {navigate("/nft")}}>NFT </Button>
        </Grid>

      </Grid>

      </Box>
      
            
            
            
        </Container>
  )
}

export default SubMenu

