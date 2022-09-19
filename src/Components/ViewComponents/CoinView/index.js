import { useSelect } from "@mui/base";
import { Box, Button, Chip, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import LineChart from "../../Charts/LineChart";

const CoinView = ({ id, data, days,setDays }) => {
  const state = useSelector((store) => store.coin);
  const { coinData, isLoading, chartData } = state;

  console.log(`chart data `);
  console.log(chartData);

  const handleRedirect = (url) => {
    window.location.replace(url);
  };

  const defaultValues = {
    coin: 0,
    currency: 0,
  };

  const price = coinData.market_data?.current_price.usd;

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "coin") {
      setFormValues({
        coin: value,
        currency: value * price,
      });
    } else {
      setFormValues({
        coin: value / price,
        currency: value,
      });
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          <Grid container>
            <Grid item md={8}>
              <Paper className="padding-layout">
                <Typography>Rank #{coinData.market_cap_rank}</Typography>
                <Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 20,
                      width: 20,
                    }}
                    src={coinData.image?.thumb}
                  />
                  {coinData.name} {` (${coinData.symbol})`}
                </Typography>
                <Typography sx={{ fontWeight: 700 }} variant="h5">
                  $ {coinData.market_data?.current_price.usd.toLocaleString()}{" "}
                  {coinData.market_data?.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </Typography>
                <Typography>PRICE ALERT ICON</Typography>
                <Typography>WATCHLIST ICON</Typography>
              </Paper>
              <Grid container className="padding-layout">
                <Grid item md={6}>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption">Marketcap </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.market_cap.usd.toLocaleString()}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption">
                        24h Trading Volume{" "}
                      </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.total_volume.usd.toLocaleString()}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption">
                        Fully Diluted Valuation{" "}
                      </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.fully_diluted_valuation.usd &
                        coinData.market_data?.fully_diluted_valuation.toLocaleString()}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                </Grid>

                <Grid item md={6}>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption">
                        Circulating Supply{" "}
                      </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.circulating_supply.toLocaleString()}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption"> Total Supply </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.total_supply.toLocaleString()}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6}>
                      <Typography variant="caption">Max Supply </Typography>
                    </Grid>
                    <Grid className="coin-info" item md={6}>
                      {coinData.market_data?.max_supply
                        ? coinData.market_data.max_supply.toLocaleString()
                        : "00"}
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Paper  className="padding-layout">
                <Button onClick={() => setDays(1)}>1 day</Button>
                <Button onClick={() => setDays(7)}>7 day</Button>
                <Button onClick={() => setDays(14)}>14 day</Button>
                <Button onClick={() => setDays(28)}>28 day</Button>
                <LineChart data={chartData} name={coinData?.name} days={days}/>
              </Paper>
            </Grid>

            <Grid item md={4}>
              <Paper className="padding-layout">
                <div className="info-section">
                  <Typography sx={{ fontWeight: 700 }}>Info</Typography>
                </div>

                <Typography sx={{marginTop: 1}}>Website:</Typography>
                <Chip
                  label={coinData.links?.homepage[0].replace(
                    "https://www.",
                    ""
                  )}
                  onClick={() => handleRedirect(coinData.links.homepage[0])}
                />
                <Typography sx={{marginTop: 2}}>Explorers:</Typography>
                <Chip
                  label={coinData.links?.blockchain_site[0].replace(
                    "https://",
                    ""
                  )}
                  onClick={() =>
                    handleRedirect(coinData.links?.blockchain_site[0])
                  }
                />
                <Typography sx={{marginTop: 2}}>Community links:</Typography>
                <Chip
                  label={"Reddit"}
                  onClick={() => handleRedirect(coinData.links?.subreddit_url)}
                />
                <Chip
                  label={"Twitter"}
                  onClick={() =>
                    handleRedirect(
                      `https://twitter.com/${coinData.links?.twitter_screen_name}`
                    )
                  }
                />
                <Chip
                  label={"Facebook"}
                  onClick={() =>
                    handleRedirect(
                      `https://facebook.com/${coinData.links?.facebook_username}`
                    )
                  }
                />

                <div className="currency-convertor">
                  <Typography sx={{ fontWeight: 700 }}>
                    {" "}
                    Convert {coinData?.name} to USD
                  </Typography>
                </div>

                <div>
                  <form className="currency-convertor-form">
                    <TextField
                      variant="standard"
                      placeholder="Enter $ price"
                      id="coin-input"
                      label="coin"
                      name="coin"
                      type="text"
                      value={formValues.coin}
                      onChange={handleInputChange}
                    />
                    <TextField
                      variant="standard"
                      placeholder="Enter $ price"
                      id="currency-input"
                      label="currency"
                      name="currency"
                      type="text"
                      value={formValues.currency}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CoinView;
