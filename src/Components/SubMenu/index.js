import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SubMenu = () => {
  let navigate = useNavigate();

  const state = useSelector((store) => store.app);
  const { globalData } = state;

  return (
    <Container>
      

      {(globalData !== null || globalData!== []) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "1",
            p: 1,
            m: 1,
          }}
        >
          <div className='global-data' sx={{ p: 1, m: 1}}>
            <Typography variant="caption">
              Coins:  
            </Typography>
            <Typography variant="caption" sx={{color: '#1976D2' }}>
            {` ${globalData.data?.active_cryptocurrencies}`}
            </Typography>
          </div>
          <div className='global-data' sx={{ p: 1, m: 1, mr: '10px' }}>
            <Typography variant="caption">
              Exchanges: 
            </Typography>
            <Typography variant="caption" sx={{color: '#1976D2' }}>
              {` ${globalData.data?.markets}`}
            </Typography>
          </div>
          <div className='global-data' sx={{ p: 1, m: 1 }}>
            <Typography variant="caption">
              Market Cap: 
            </Typography>
            <Typography variant="caption" sx={{color: '#1976D2' }}>
              {` ${Math.round(globalData.data?.total_market_cap.usd).toLocaleString()}`}
            </Typography>
          </div>
          <div className='global-data' sx={{ p: 1, m: 1 }}>
            <Typography variant="caption">
              24h Vol: 
            </Typography>
            <Typography variant="caption" sx={{color: '#1976D2' }}>
              {` ${Math.round(globalData.data?.total_volume.usd).toLocaleString()}`}
            </Typography>
          </div>
          <div sx={{ p: 1, m: 1 }}>
            <Typography variant="caption">
              Dominance: 
            </Typography>
            <Typography variant="caption" sx={{color: '#1976D2' }}>
              {` BTC ${globalData.data?.market_cap_percentage.btc.toFixed(1)}% ETH ${globalData.data?.market_cap_percentage.eth.toFixed(1)}%`}
            </Typography>
          </div>
        </Box>
      )}

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sn: 8, md: 12 }}
        >
          <Grid item xs={4}>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Cryptocurrencies{" "}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => {
                navigate("/exchanges");
              }}
            >
              Exchanges{" "}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => {
                navigate("/nft");
              }}
            >
              NFT{" "}
            </Button>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
};

export default SubMenu;
