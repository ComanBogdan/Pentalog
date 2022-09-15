import React, { useEffect, useState } from "react";
import CryptocurrenciesTableView from "../../Components/ViewComponents/CryptocurrenciesTableView";
import { useDispatch, useSelector } from "react-redux"
import { FETCH_CRYPTOCURRENCIES_REQUEST } from "./reducer";
import SubMenu from "../../Components/SubMenu"

const CryptocurrenciesTable = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cryptocurrencies)
  const { tableData, isLoading } = state;

  useEffect(() => {
    dispatch({type: FETCH_CRYPTOCURRENCIES_REQUEST})
  },[])

  return (
    <div>
      {isLoading && <div>loading...</div>}
      <SubMenu />
      <CryptocurrenciesTableView data={tableData} />
    </div>
  );
};

export default CryptocurrenciesTable;
