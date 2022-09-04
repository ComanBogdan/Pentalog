import axios from 'axios'

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C90d%2C180d%2C1y"

const databaseURL = "http://localhost:3001"



const fetchTableData = async () => {
    const resp = await axios.get(URL)
    return resp.data
}


const sendUserAccount = async (account) => {
    const resp = await axios.post(`${databaseURL}/users`, account)
    return resp.data
}

const fetchUserAccounts = async () => {
    const resp = await axios.get(`${databaseURL}/users`)
    return resp.data
}

export { fetchTableData, sendUserAccount, fetchUserAccounts }