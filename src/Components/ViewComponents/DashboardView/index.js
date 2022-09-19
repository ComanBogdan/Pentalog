import { Box, Card, CardContent, Checkbox, Grid, Paper, TableCell, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MuiTable from '../../MuiTable'

const DashboardView = ({username, data}) => {
    const navigate = useNavigate();

    const state = useSelector ((store) => store.app);
    const {watchlist} = state;

    const initialDescriptor =[
        // {
        //     label: '#',
        //     enable: true,
        //     accessor: 'market_cap_rank',
        //     render: (item) => {
        //         if(username!="guest"){
        //             return <TableCell key={item.market_cap_rank} align='center'>
        //                 <Checkbox checked={watchlist[item.id]} onChange={(e) => handleCheck(e, item.id)}/>
        //             {item.market_cap_rank}
        //             </TableCell>
        //         }
        //         return <TableCell key={item.market_cap_rank}>
        //             {item.market_cap_rank}
    
        //         </TableCell>
        //     }
        // },
        {
            //TO DO: Some spacing between image and name
            label: 'Coin',
            enable: true,
            accessor: 'name',
            render: (item) => {
                
                return <TableCell key={`${item.market_cap_rank}_${item.name}_${item.symbol}`} align='center' onClick={() => navigate(`/coin/${item.id}`)}>
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
            enable: true,
            accessor: 'current_price',
            render: (item) => {
                return <TableCell key={`${item.current_price}_${item.name}`} align='center'>{item.current_price.toLocaleString() + '$' }</TableCell>
            }
        },
        {
            label: 'Marketcap',
            enable: true,
            accessor: 'market_cap',
            render: (item) => {
                return <TableCell key={`${item.market_cap}_${item.name}`} align='center'>{item.market_cap.toLocaleString() + ' USD' }</TableCell>
            }
        },
        {
            label: "24h Volume",
            enable: true,
            accesor: 'total_volume',
            render: (item) => {
                return <TableCell key={`${item.total_volume}_${item.name}`} align='center'>{item.total_volume.toLocaleString() + ' USD' }</TableCell>
            }
        },
        {
            label: '1h',
            enable: true,
            accessor: 'price_change_percentage_1h_in_currency',
            render: (item) => {
                if(item.price_change_percentage_1h_in_currency)
                if(item.price_change_percentage_1h_in_currency > 0)
                    return <TableCell key={`${item.price_change_percentage_1h_in_currency}_${item.name}`} align='center' sx={{color: 'green'}}>{item.price_change_percentage_1h_in_currency.toFixed(1) + '%'}</TableCell>
                else 
                    return <TableCell key={`${item.price_change_percentage_1h_in_currency}_${item.name}`} align='center' sx={{color: 'red'}}>{item.price_change_percentage_1h_in_currency.toFixed(1) + '%' }</TableCell>
            }
        },
        {
            label: '24h',
            enable: true,
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
            enable: true,
            render: (item) => {
                if(item.price_change_percentage_7d_in_currency)
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
    ]

    const [descriptor, setDescriptor] = useState(initialDescriptor);


  return (
    <div>
        {username == "guest" ? <div>You need to be logged in in order to view your dashboard</div> : 
        
        <div>
            <div>Hello {username}</div>
        <Grid container>
            <Grid item sx={4}>
                <Card sx={{minWidth: 300}}>
                    <CardContent>
                        <Typography>Top Gains</Typography>
                    </CardContent>
                </Card>
                
            </Grid>
            <Grid item sx={4}>
            <Card sx={{minWidth: 300}}>
                    <CardContent>
                        <Typography>Top Losers</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sx={4}>
            <Card sx={{minWidth: 300}}>
                    <CardContent>
                        <Typography>Transaction History</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


        <Typography>WATCHLIST:</Typography>
        <MuiTable data={data.filter((coin) => {
            if(watchlist.hasOwnProperty(coin.id) && (watchlist[coin.id] === true))
                return coin
        })}
        descriptor={descriptor}
        setDescriptor={setDescriptor}
        />

        </div>
        
         }
    </div>
    
  )
}

export default DashboardView