import { Box, TableCell } from '@mui/material'
import React, { useState } from 'react'
import MuiTable from '../../MuiTable'


const ExchangesTableView = ({data}) => {

    const [descriptorExchanges, setDescriptorExchanges] = useState([
        {
            label: '#',
            accessor: 'trust_score_rank'
        },
        {
            label: 'Exchange',
            accessor: 'name',
            render: (item) => {
                return <TableCell key={`${item.name}_${item.trust_score_rank}`} align='center'>
                    <div className='coin-name'>
                    <Box component="img" sx={{
                        height: 20,
                        width: 20
                    }} src={item.image} />
                    {item.name}
                    </div>
                </TableCell>
            }
        }
    ])

  return (
    <MuiTable data={data} descriptor={descriptorExchanges}/>
  )
}

export default ExchangesTableView