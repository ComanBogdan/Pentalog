import React from 'react'
import {data} from '../../dataFromApi';
import { useState, useEffect } from 'react';

const Table = ({data, descriptor}) => {

    console.log("Table coomponent");
    console.log(data);
    console.log(descriptor);



  return (
    <table>
        <thead>
            <tr>
                {descriptor.map((col) => {
                    return <th>{col.label}</th>
                })}
            </tr>
        </thead>
        <tbody>
            
                {data.map((item, index) => {
                    return <tr key={item.name}>
                    {descriptor.map((col) => {
                        return <td key={col.accessor}>{item[col.accessor]}</td>;
                    })}

                    </tr>;
                })}
        
        </tbody>
    </table>
  )
}

export default Table