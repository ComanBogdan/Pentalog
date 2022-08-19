import React from 'react'
import ExchangesTableView from '../../Components/ViewComponents/ExchangesTableView'

import {dataExchanges} from '../../dataExchanges'

const ExchangesTable = () => {
  return (
    <ExchangesTableView data={dataExchanges}/>
  )
}

export default ExchangesTable