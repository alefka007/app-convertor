import React, { useEffect } from "react";
import MyInput from './MyInput/MyInput';
import { maxLengthValue } from "../../services";
import Date from './Date/Date';
import s from './Сonverter.module.css';
import { useCurrencyContext } from "./CurrencyProvider";

const Converter = () => {

    const [valueFirst, setValueFirst] = React.useState(1);
    const [valueSecond, setValueSecond] = React.useState(1);
    const [currencyFirst, setCurrencyFirst] = React.useState('USD');
    const [currencySecond, setCurrencySecond] = React.useState('RUB');

    const { meta, data } = useCurrencyContext();

    const handleFirstValueChange = (valueFirst) => {
        setValueSecond(maxLengthValue(valueFirst * data[currencySecond].value / data[currencyFirst].value))
        setValueFirst(valueFirst)
    }
    const handleFirstCurrencyChange = (currencyFirst) => {
        setValueSecond(valueFirst * data[currencySecond].value / data[currencyFirst].value)
        setCurrencyFirst(currencyFirst)
    }
    const handleSecondValueChange = (valueSecond) => {
        setValueFirst(maxLengthValue(valueSecond * data[currencyFirst].value / data[currencySecond].value))
        setValueSecond(valueSecond)
    }
    const handleSecondCurrencyChange = (currencySecond) => {
        setValueFirst(valueSecond * data[currencyFirst].value / data[currencySecond].value)
        setCurrencySecond(currencySecond)
    }

    useEffect(() => { 
        handleFirstValueChange(valueFirst)
    }, [])

    return (
        <div className={s.containerInput}>
            <MyInput
                currencies={Object.values(data)}
                value={valueFirst}
                currency={currencyFirst}
                onChangeValue={handleFirstValueChange}
                onCurrencyChange={handleFirstCurrencyChange} />
            <MyInput
                currencies={Object.values(data)}
                value={valueSecond}
                currency={currencySecond}
                onChangeValue={handleSecondValueChange}
                onCurrencyChange={handleSecondCurrencyChange} />
            <Date date={Object.values(meta)} />
        </div>
    )
}


export default React.memo(Converter);