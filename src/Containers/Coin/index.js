import React from 'react'
import CoinView from '../../Components/ViewComponents/CoinView'
import {useParams} from "react-router-dom"

const Coin = ({id}) => {
    
    //TO DO implement API Fetch

    //

    let { coinId } = useParams();

    console.log(coinId);

  return (
    <CoinView id={coinId}/>
  )
}

export default Coin