import React, { useEffect } from 'react'
import CoinView from '../../Components/ViewComponents/CoinView'
import {useParams} from "react-router-dom"
import SubMenu from '../../Components/SubMenu';
import { useDispatch } from 'react-redux';
import { FETCH_COIN_REQUEST } from './reducer';

const Coin = ({id}) => {
  
  const dispatch = useDispatch();
    
  
    let { coinName } = useParams();

    useEffect(()=>{
      dispatch({type: FETCH_COIN_REQUEST, payload: coinName.toLowerCase()})
    },[])



  

  return (
    <>
    <SubMenu />
    <CoinView id={coinName}/>
    </>
    
  )
}

export default Coin