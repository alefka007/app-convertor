import * as React from 'react'
const axios = require('axios').default;

const initialValue = {
    "meta": {
        "last_updated_at": "2022-06-18T23:59:59Z"
    },
    "data": {
        "USD": {
            "code": 'USD',
            "value": 1
        },
        "RUB": {
            "code": 'RUB',
            "value": 62.251198
        },
        "EUR": {
            "code": 'EUR',
            "value": 0.974348
        },
        "AED": {
            "code": "AED",
            "value": 3.67319
        },
        "AFN": {
            "code": "AFN",
            "value": 89.43874
        },
        "ALL": {
            "code": "ALL",
            "value": 114.15519
        },
        "AMD": {
            "code": "AMD",
            "value": 424.06613
        },
        "ANG": {
            "code": "ANG",
            "value": 1.80592
        },
        "AOA": {
            "code": "AOA",
            "value": 433.92705
        },
        "ARS": {
            "code": "ARS",
            "value": 123.166
        },
        "AUD": {
            "code": "AUD",
            "value": 1.44282
        },
        "AWG": {
            "code": "AWG",
            "value": 1.80054
        }
    }
};

export default () => {
    const [currencyData, setCurrencyData] = React.useState(initialValue);

    React.useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.currencyapi.com/v3/latest?apikey=rJ7yJBs9vacvKZqKsDkuLhaTBcRZ4e9IcXQkXZDR'
        };
        axios.request(options).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                setCurrencyData(res.data)
            }
        }).catch(err => {
            console.error(err);
        })

    }, [])

    return React.useMemo(() => ({
        meta: currencyData?.meta ?? null,
        data: currencyData?.data ?? null
    }), [currencyData]);
}