import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Paper,
  TableCell,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddTransaction from "../../AddTransaction";
import PieChart from "../../Charts/PieChart";
import MuiTable from "../../MuiTable";

const DashboardView = ({ username, data, userId, chartData }) => {
  const navigate = useNavigate();

  const state = useSelector((store) => store.app);
  const dashboardState = useSelector((store) => store.dashboard);
  const { watchlist } = state;

  const { topGains, topLosses, latestTransactions } = dashboardState;

  const initialDescriptor = [
    // {
    //     label: '#',
    //     enable: true,
    //     accessor: 'market_cap_rank',
    //     render: (item) => {
    //         if(username!="guest"){
    //             return <TableCell key={item.market_cap_rank} align='center'>
    //                 <Checkbox checked={watchlist[item.id]} onChange={(e) => handleCheck(e, item.id)}/>
    //             {item.market_cap_rank}
    //             </TableCell>
    //         }
    //         return <TableCell key={item.market_cap_rank}>
    //             {item.market_cap_rank}

    //         </TableCell>
    //     }
    // },
    {
      //TO DO: Some spacing between image and name
      label: "Coin",
      enable: true,
      accessor: "name",
      render: (item) => {
        return (
          <TableCell
            key={`${item.market_cap_rank}_${item.name}_${item.symbol}`}
            align="center"
            onClick={() => navigate(`/coin/${item.id}`)}
          >
            <div className="coin-name">
              <Box
                component="img"
                sx={{
                  marginRight: "10px",
                  height: 20,
                  width: 20,
                }}
                src={item.image}
              />
              {item.name}
            </div>
          </TableCell>
        );
      },
    },
    {
      label: "Price",
      enable: true,
      accessor: "current_price",
      render: (item) => {
        return (
          <TableCell key={`${item.current_price}_${item.name}`} align="right">
            {item.current_price.toLocaleString() + "$"}
          </TableCell>
        );
      },
    },
    {
      label: "Marketcap",
      enable: true,
      accessor: "market_cap",
      render: (item) => {
        return (
          <TableCell key={`${item.market_cap}_${item.name}`} align="right">
            {item.market_cap.toLocaleString() + " USD"}
          </TableCell>
        );
      },
    },
    {
      label: "24h Volume",
      enable: true,
      accesor: "total_volume",
      render: (item) => {
        return (
          <TableCell key={`${item.total_volume}_${item.name}`} align="right">
            {item.total_volume.toLocaleString() + " USD"}
          </TableCell>
        );
      },
    },
    {
      label: "1h",
      enable: true,
      accessor: "price_change_percentage_1h_in_currency",
      render: (item) => {
        if (item.price_change_percentage_1h_in_currency)
          if (item.price_change_percentage_1h_in_currency > 0)
            return (
              <TableCell
                key={`${item.price_change_percentage_1h_in_currency}_${item.name}`}
                align="center"
                sx={{ color: "green" }}
              >
                {item.price_change_percentage_1h_in_currency.toFixed(1) + "%"}
              </TableCell>
            );
          else
            return (
              <TableCell
                key={`${item.price_change_percentage_1h_in_currency}_${item.name}`}
                align="center"
                sx={{ color: "red" }}
              >
                {item.price_change_percentage_1h_in_currency.toFixed(1) + "%"}
              </TableCell>
            );
      },
    },
    {
      label: "24h",
      enable: true,
      accessor: "price_change_percentage_24h_in_currency",
      render: (item) => {
        if (item.price_change_percentage_24h_in_currency > 0)
          return (
            <TableCell
              key={`${item.price_change_percentage_24h_in_currency}_${item.name}`}
              align="center"
              sx={{ color: "green" }}
            >
              {item.price_change_percentage_24h_in_currency.toFixed(1) + "%"}
            </TableCell>
          );
        else
          return (
            <TableCell
              key={`${item.price_change_percentage_24h_in_currency}_${item.name}`}
              align="center"
              sx={{ color: "red" }}
            >
              {item.price_change_percentage_24h_in_currency.toFixed(1) + "%"}
            </TableCell>
          );
      },
    },
    {
      label: "7d",
      accessor: "price_change_percentage_7d_in_currency",
      enable: true,
      render: (item) => {
        if (item.price_change_percentage_7d_in_currency)
          if (item.price_change_percentage_7d_in_currency > 0)
            return (
              <TableCell
                key={`${item.price_change_percentage_7d_in_currency}_${item.name}`}
                align="center"
                sx={{ color: "green" }}
              >
                {item.price_change_percentage_7d_in_currency.toFixed(1) + "%"}
              </TableCell>
            );
          else
            return (
              <TableCell
                key={`${item.price_change_percentage_7d_in_currency}_${item.name}`}
                align="center"
                sx={{ color: "red" }}
              >
                {item.price_change_percentage_7d_in_currency.toFixed(1) + "%"}
              </TableCell>
            );
      },
    },
    {
      label: "7d Chart",
      enable: false,
      render: (item) => {
        return (
          <TableCell key={`${item.symbol}_${item.name}`} align="center">
            <Box
              component="img"
              sx={{
                height: 30,
              }}
              src={`https://www.coingecko.com/coins/${item.market_cap_rank}/sparkline`}
            />
          </TableCell>
        );
      },
    },
  ];

  const [descriptor, setDescriptor] = useState(initialDescriptor);

  console.log(dashboardState);

  return (
    <div>
      {username == "guest" ? (
        <div className="center-text" style={{ minHeight: "100vh" }}>
          You need to be logged in in order to view your dashboard
        </div>
      ) : (
        <div>
          <Grid container>
            <Grid item sx={4} className="item-padding">
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>Top Gains</Typography>
                  {topGains ? (
                    topGains.map((item) => {
                      return (
                        <div>
                          <Typography
                            display="inline"
                            key={`${item.name}__${item.id}`}
                          >{`${item.name} `}</Typography>
                          <Typography
                            display="inline"
                            sx={{ color: "green" }}
                            key={`${item.name}__${item.id}_colorText`}
                          >{`${item.percent
                            .toFixed(1)
                            .toLocaleString()}%`}</Typography>
                        </div>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={4} className="item-padding">
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>Top Losses</Typography>
                  {topLosses ? (
                    topLosses.map((item) => {
                      return (
                        <div>
                          <Typography
                            display="inline"
                            key={`${item.name}__${item.id}`}
                          >{`${item.name} `}</Typography>
                          <Typography
                            key={`${item.name}__${item.id}__colorText`}
                            display="inline"
                            sx={{ color: "red" }}
                          >
                            {`${item.percent.toFixed(1).toLocaleString()}%`}
                          </Typography>
                        </div>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={4} className="item-padding">
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>
                    Latest Transactions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={3}>
              {chartData ? <PieChart chartData={chartData} /> : <div></div>}
            </Grid>
            <Grid item md={3}></Grid>
            <Grid item md={3}></Grid>
            <Grid item md={3}>
              <AddTransaction userId={userId} />
            </Grid>
          </Grid>

          <Typography>WATCHLIST:</Typography>
          <MuiTable
            data={data.filter((coin) => {
              if (
                watchlist.hasOwnProperty(coin.id) &&
                watchlist[coin.id] === true
              )
                return coin;
            })}
            descriptor={descriptor}
            setDescriptor={setDescriptor}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardView;
