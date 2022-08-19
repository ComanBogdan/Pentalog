import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Tab } from '@mui/material'
import React from 'react'
import { useAppContext } from '../../Containers/App/context';

const MuiTable = ({data, descriptor}) => {

    const {setPath, setId} = useAppContext();

  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    {descriptor.map((col) => {
                        if(!(col.enable == false))
                            return <TableCell key={`${col.label}`} align='center'>{col.label}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => {
                    return <TableRow key={`${item.name}_${item.market_cap_rank}`} hover={true} onClick={() => {setPath("/coin"); setId(item.market_cap_rank)}}>
                        {descriptor.map((col) => {
                            if(!(col.enable == false))
                                if(col.render) return col.render(item);
                                    else return <TableCell key={`${item.market_cap_rank}_${item.current_price}_${item.name}`} align='center'>{item[col.accessor]}</TableCell>
                            // return <TableCell align='center'>{col.render ? col.render(item) : item[col.accessor]}</TableCell>
                        })}
                    </TableRow>
                })}
                
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default MuiTable