import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})

    useEffect(() => {
        console.log(currency);
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // excluding date and considering only currencies object
    }, [currency])

    console.log(data);
    return data
    
}

export default useCurrencyInfo