import Coin from "./Containers/Coin";
import CryptocurrenciesTable from "./Containers/CryptocurrenciesTable"
import ExchangesTable from "./Containers/ExchangesTable"
import NftTable from "./Containers/NftTable"


export default (path, id) => {

    if(id)
        switch(path){
            case "/coin":
            return <Coin id={id}/>

            default: return 'Page not found'
        }

    switch(path){


        case "/cryptocurrencies":
        return <CryptocurrenciesTable />;
        case "/exchanges":
        return <ExchangesTable />;
        case "/nft":
        return <NftTable />;

        default: return 'Page not found';
    }

  

};