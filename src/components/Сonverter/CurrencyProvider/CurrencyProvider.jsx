import * as React from 'react';
import { CurrencyContext, useCurrencyData} from "../../../services";

export const useCurrencyContext = () => React.useContext(CurrencyContext);

export const CurrencyProvider = (props) => {
    const currencyData = useCurrencyData();

    const value = React.useMemo(() => ({
        meta: currencyData.meta,
        data: currencyData.data,
    }), [currencyData])

    return <CurrencyContext.Provider value={value}>{props.children}</CurrencyContext.Provider>
}
