//customhooks can use built in hooks.
import {useEffect, useState} from 'react'
// url = https://cdn.jsdeliver.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/8ee3b7b7379046831266c6c7/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        
    }, [currency])
    return data
}
export default useCurrencyInfo;