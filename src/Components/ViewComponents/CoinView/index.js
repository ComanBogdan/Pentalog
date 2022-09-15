import { useSelect } from '@mui/base'
import { Chip, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import LineChart from '../../Charts/LineChart'

const CoinView = ({id, data}) => {

  const state = useSelector((store) => store.coin)
  const {coinData, isLoading, chartData} = state;

  console.log(coinData.market_data);

  const handleRedirect = () => {
    window.location.replace('https://google.com');
  }



  const defaultValues = {
    coin: 0,
    currency: 0,
}

const price = coinData.market_data?.current_price.usd;

const [formValues, setFormValues] = useState(defaultValues);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name == "coin"){
      setFormValues({
        coin: value,
        currency: value*price,
      })
    }
    else {
      setFormValues({
        coin: value/price,
        currency: value
      })
    }
}

  

    
  

  return (


    <div>
      {isLoading ? <div>loading</div> : <div>
    <Grid container>
      
      <Grid item md={8}>
        <Paper>
          <Typography>Rank #{coinData.market_cap_rank}</Typography>   
          <Typography>$ {coinData.market_data.current_price.usd.toLocaleString()} {coinData.market_data.market_cap_change_percentage_24h_in_currency.usd}%</Typography>   
          <Typography>PRICE ALERT ICON</Typography>   
          <Typography>WATCHLIST ICON</Typography>   
        </Paper>
        <Grid container>
          
          
          <Grid item md={6}>
            <Paper>
              <Typography>Marketcap {coinData.market_data.market_cap.usd.toLocaleString()}</Typography>
              <Typography>24h Trading Volume {coinData.market_data.total_volume.usd.toLocaleString()}</Typography>
              <Typography>Fully Diluted Valuation {coinData.market_data.fully_diluted_valuation.usd & coinData.market_data.fully_diluted_valuation.toLocaleString()}</Typography>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <Typography>Circulating Supply {coinData.market_data.circulating_supply.toLocaleString()}</Typography>
              <Typography>Total Supply {coinData.market_data.total_supply.toLocaleString()}</Typography>
              <Typography>Max Supply {coinData.market_data.max_supply? coinData.market_data.max_supply.toLocaleString() : "00"}</Typography>
            </Paper>
          </Grid>


          
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Paper>
          <Typography>Info</Typography>
          <Typography>Whitepaper 
            
            </Typography>
            <Chip label={coinData.links.homepage[0]} onClick={handleRedirect} />
          <Typography>Explorers {coinData.links.blockchain_site[0]}</Typography>
          <Typography>Community links</Typography>
          <Typography>Wallets</Typography>
        </Paper>
      </Grid>
      

    </Grid>

    <Grid container>
      <Grid item md={8}>
        <Paper>
          <LineChart data={chartData} />
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper>
          Convert X to USD
          <form>
            <TextField variant="standard" placeholder='Enter $ price' id="coin-input" label="coin" name="coin" type="text" value={formValues.coin} onChange={handleInputChange}/>
            <TextField variant="standard" placeholder='Enter $ price' id="currency-input" label="currency" name="currency" type="text" value={formValues.currency} onChange={handleInputChange}/>
          </form>

      







        </Paper>
        
      </Grid>

    </Grid>

  </div>}
    </div>
    
   



    
  )
}

export default CoinView