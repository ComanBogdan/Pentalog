import React, { useEffect, useState } from "react";
import { fetchTableData } from "../../Api";
import CryptocurrenciesTableView from "../../Components/ViewComponents/CryptocurrenciesTableView";
import { useDispatch, useSelector } from "react-redux"
import { FETCH_CRYPTOCURRENCIES_REQUEST, FETCH_CRYPTOCURRENCIES_SUCCES } from "./reducer";
import SubMenu from "../../Components/SubMenu"

// import {data} from '../../dataFromApi'

const CryptocurrenciesTable = () => {


  // const [tableData, setTableData] = useState();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cryptocurrencies)

  const { tableData, isLoading} = state;


  useEffect(() => {
    dispatch({type: FETCH_CRYPTOCURRENCIES_REQUEST})
    fetchTableData().then((resp) => {
      dispatch({type: FETCH_CRYPTOCURRENCIES_SUCCES, payload: resp} )
    });
  }, []);
  
  // if (isLoading) return <div>loading...</div>;

  return (

    <div>
      {isLoading && <div>loading...</div>}
      <SubMenu />
      <CryptocurrenciesTableView data={tableData} />
      
    </div>
  );
};

export default CryptocurrenciesTable;
