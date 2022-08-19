import React from 'react'
import CryptocurrenciesTableView from '../../Components/ViewComponents/CryptocurrenciesTableView'

import {data} from '../../dataFromApi'


const CryptocurrenciesTable = () => {

    


  return (
    <CryptocurrenciesTableView data={data}/>
  )
}

export default CryptocurrenciesTable