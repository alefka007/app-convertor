import React from "react";
import s from './MyInput.module.css';
const placeholder = 'Введите значение';

const MyInput = (props) => {

    const onChangeInput = (e) => {
        let valueChange = e.target.value.replace(/\D/g, '');
        props.onChangeValue(valueChange)
    }

    const onChangeSelect = (e) => {
        props.onCurrencyChange(e.target.value)
    }
    return (
        <div className={s.inputGroup}>
            <input 
                type= 'text' 
                value={props.value === '0.00' ? '' : props.value}
                onChange={onChangeInput}
                placeholder={placeholder}
                className={s.input}
            />
            <select className={s.inputSelect}
                onChange={onChangeSelect}
                value={props.currency}>
                {props.currencies.map(currency => (
                    <option key={currency.code}>{currency.code}</option>
                ))}
            </select>
        </div>
    )
}

export default MyInput;