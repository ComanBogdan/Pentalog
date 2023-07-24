import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardView from '../../Components/ViewComponents/DashboardView';
import { CALCULATE_GAINS_LOSSES, GET_TRANSACTION_REQUEST } from './reducer';

const Dashboard = () => {


    const state = useSelector((store) => store.app)
    const cryptocurrenciesState = useSelector((store) => store.cryptocurrencies)
    const dashboardState = useSelector((store) => store.dashboard)
    const {username, id} = state;
    const {tableData} = cryptocurrenciesState;

    const {averagePrice} = dashboardState

    const dispatch = useDispatch();

    useEffect(() => {
     
      dispatch({type: GET_TRANSACTION_REQUEST, payload: {id}})
    },[])

    useEffect(() => {
     
      dispatch({type: CALCULATE_GAINS_LOSSES, payload: {tableData, averagePrice}})
    },[tableData, averagePrice])

    


  return (


    <DashboardView username={username} data={tableData} userId={id} chartData={averagePrice}/>
    
  )
}

export default Dashboard