import React from 'react'
import SubMenu from '../../Components/SubMenu'
import ExchangesTableView from '../../Components/ViewComponents/ExchangesTableView'

import {dataExchanges} from '../../dataExchanges'

const ExchangesTable = () => {
  return (
    <div>
      <SubMenu />
      <ExchangesTableView data={dataExchanges}/>

    </div>
    
  )
}

export default ExchangesTable