import React, { useEffect, useState } from 'react'
import Table from '../../Components/Table/Table'

import {data} from '../../dataFromApi'

const Homepage = () => {

    const [coins, setCoins] = useState([]);


    //TO DO: implement API Fetching
    useEffect( () => {

    setCoins(data);
    console.log(coins);

    }, []);
    //

    const descriptor = [
        {
            label: 'Index',
            accessor: 'market_cap_rank'
        },
        {
            label: 'Name',
            accessor: 'name'
        },
        {
            label: 'Price',
            accessor: 'current_price'
        },
        {
            label: 'Marketcap',
            accessor: 'market_cap'
        },
        {
            label: '1h',
            accessor: 'price_change_percentage_1h_in_currency'
        },
        {
            label: '24h',
            accessor: 'price_change_percentage_24h_in_currency'
        },
        {
            label: '7z',
            accessor: 'price_change_percentage_7d_in_currency'
        }
    ]


    
  return (
    <div>
        <p>Homepage Component</p>

        <Table data={data} descriptor={descriptor}/>

    </div>
    
  )
}

export default Homepage