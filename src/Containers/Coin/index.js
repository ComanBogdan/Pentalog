import React, { useEffect, useState } from 'react'
import CoinView from '../../Components/ViewComponents/CoinView'
import {useParams} from "react-router-dom"
import SubMenu from '../../Components/SubMenu';
import { useDispatch } from 'react-redux';
import { FETCH_COIN_CHART_DATA_REQUEST, FETCH_COIN_REQUEST } from './reducer';

const Coin = ({id}) => {
  
  const dispatch = useDispatch();
  const [days, setDays] = useState(1);
    
  
    let { coinName } = useParams();

    



    useEffect(()=>{
      dispatch({type: FETCH_COIN_REQUEST, payload: coinName})
      
    },[])

    useEffect(() => {
      dispatch({type: FETCH_COIN_CHART_DATA_REQUEST, payload: {name: coinName.toLocaleLowerCase(), days}})
    }, [days])



  

  return (
    <>
    <SubMenu />
    <CoinView id={coinName} setDays={setDays} days={days}/>
    </>
    
  )
}

export default Coin