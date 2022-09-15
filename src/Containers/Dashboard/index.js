import React from 'react'
import { useSelector } from 'react-redux'
import DashboardView from '../../Components/ViewComponents/DashboardView';

const Dashboard = () => {


    const state = useSelector((store) => store.app)
    const cryptocurrenciesState = useSelector((store) => store.cryptocurrencies)
    const {username} = state;
    const {tableData} = cryptocurrenciesState;


  return (


    <DashboardView username={username} data={tableData}/>
    
  )
}

export default Dashboard