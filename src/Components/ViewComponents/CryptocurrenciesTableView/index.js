import { Box, Button, Checkbox, TableCell, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SEND_WATCHLIST_REQUEST } from "../../../Containers/CryptocurrenciesTable/reducer";
import MuiTable from "../../MuiTable";
import withWatchlistHOC from "../../MuiTable/withWatchlistHOC";

const TableLogged = withWatchlistHOC(MuiTable);

const CryptocurrenciesTableView = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((store) => store.app);
  const { username, id, watchlist } = state;

  const handleCheck = (e, coinId) => {
    console.log(watchlist);
    watchlist[coinId] = !watchlist[coinId];
    dispatch({
      type: SEND_WATCHLIST_REQUEST,
      payload: { coin: coinId, id, check: watchlist[coinId], watchlist },
    });
  };
  const initialDescriptor = [
    {
      label: "#",
      enable: true,
      accessor: "market_cap_rank",
      render: (item) => {
        return (
          <TableCell key={item.market_cap_rank} align="center">
            {item.market_cap_rank}
          </TableCell>
        );
      },
    },
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
          <TableCell key={`${item.current_price}_${item.name}`} align="center">
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
          <TableCell key={`${item.market_cap}_${item.name}`} align="center">
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
          <TableCell key={`${item.total_volume}_${item.name}`} align="center">
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

  const [descriptor, setDescriptor] = useState(initialDescriptor)

  const [search, setSearch] = useState("");

  return (
    <>
      {username !== "guest" ? (
        <TableLogged
          data={data.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
          )} //coin.toLowerCase().includes(search.toLowerCase())
          descriptor={initialDescriptor}
          watchlist={watchlist}
          handleCheck={handleCheck}
          setSearch={setSearch}
        />
      ) : (
        <MuiTable
          data={data.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
          )}
          descriptor={descriptor  }
          setDescriptor={setDescriptor}
          setSearch={setSearch}
        />
      )}
    </>
  );
};

export default CryptocurrenciesTableView;
