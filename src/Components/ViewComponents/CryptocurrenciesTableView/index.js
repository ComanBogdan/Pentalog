import { Box, Button, TableCell, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import MuiTable from '../../MuiTable'



const CryptocurrenciesTableView = ({data}) => {

    const [coins, setCoins] = useState([]);




    //TO DO: implement API Fetching
    useEffect( () => {

    setCoins(data);

    }, []);
    //

    const [descriptor, setDescriptor] = useState([
        {
            label: '#',
            accessor: 'market_cap_rank'
        },
        {
            //TO DO: Some spacing between image and name
            label: 'Coin',
            accessor: 'name',
            render: (item) => {
                return <TableCell key={`${item.market_cap_rank}_${item.name}_${item.symbol}`} align='center'>
                    <div className='coin-name'>
                    <Box component="img" sx={{
                        height: 20,
                        width: 20
                    }} src={item.image} />
                    {item.name}
                    </div>
                </TableCell>

            }
        },
        {
            label: 'Price',
            accessor: 'current_price',
            render: (item) => {
                return <TableCell key={`${item.current_price}_${item.name}`} align='center'>{item.current_price.toLocaleString() + '$' }</TableCell>
            }
        },
        {
            label: 'Marketcap',
            accessor: 'market_cap',
            render: (item) => {
                return <TableCell key={`${item.market_cap}_${item.name}`} align='center'>{item.market_cap.toLocaleString() + ' USD' }</TableCell>
            }
        },
        {
            label: "24h Volume",
            accesor: 'total_volume',
            render: (item) => {
                return <TableCell key={`${item.total_volume}_${item.name}`} align='center'>{item.total_volume.toLocaleString() + ' USD' }</TableCell>
            }
        },
        {
            label: '1h',
            accessor: 'price_change_percentage_1h_in_currency',
            render: (item) => {
                if(item.price_change_percentage_1h_in_currency > 0)
                    return <TableCell key={`${item.price_change_percentage_1h_in_currency}_${item.name}`} align='center' sx={{color: 'green'}}>{item.price_change_percentage_1h_in_currency.toFixed(1) + '%'}</TableCell>
                else 
                    return <TableCell key={`${item.price_change_percentage_1h_in_currency}_${item.name}`} align='center' sx={{color: 'red'}}>{item.price_change_percentage_1h_in_currency.toFixed(1) + '%' }</TableCell>
            }
        },
        {
            label: '24h',
            accessor: 'price_change_percentage_24h_in_currency',
            render: (item) => {
                if(item.price_change_percentage_24h_in_currency > 0)
                    return <TableCell key={`${item.price_change_percentage_24h_in_currency}_${item.name}`} align='center' sx={{color: 'green'}}>{item.price_change_percentage_24h_in_currency.toFixed(1) + '%'}</TableCell>
                else 
                    return <TableCell key={`${item.price_change_percentage_24h_in_currency}_${item.name}`} align='center' sx={{color: 'red'}}>{item.price_change_percentage_24h_in_currency.toFixed(1) + '%' }</TableCell>
            }
        },
        {
            label: '7d',
            accessor: 'price_change_percentage_7d_in_currency',
            render: (item) => {
                if(item.price_change_percentage_7d_in_currency > 0)
                    return <TableCell key={`${item.price_change_percentage_7d_in_currency}_${item.name}`} align='center' sx={{color: 'green'}}>{item.price_change_percentage_7d_in_currency.toFixed(1) + '%'}</TableCell>
                else 
                    return <TableCell key={`${item.price_change_percentage_7d_in_currency}_${item.name}`} align='center' sx={{color: 'red'}}>{item.price_change_percentage_7d_in_currency.toFixed(1) + '%' }</TableCell>
            }
            
        },
        {
            label: '7d Chart',
            enable: false,
            render: (item) => {
                return <TableCell key={`${item.symbol}_${item.name}`} align='center'>
                    <Box component="img"
                    sx={{
                        height: 30
                    }}
                    src={`https://www.coingecko.com/coins/${item.market_cap_rank}/sparkline`}
                    />
                    
                </TableCell>
            }
        }
    ]); 

    const handleClickToggle = () => {
        let arr =[...descriptor];

        arr.map((item) => {
            if(item.label === '7d Chart')
                if(item.enable === true)
                    item.enable = false;
                else item.enable = true;
        })

        setDescriptor(arr);
    }


    const handleTextField = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value)
    }

    const [search, setSearch] = useState('');

    
  return (
    <>
    <div className='toggle-button'>
        <TextField onChange={handleTextField} id="standard-basic" label="Search" variant="standard" />
        <Button onClick={handleClickToggle}>Toggle Chart</Button>
    </div>
        <MuiTable data={coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))}//coin.toLowerCase().includes(search.toLowerCase())
        descriptor={descriptor}/>
    </>
  )
}

export default CryptocurrenciesTableView