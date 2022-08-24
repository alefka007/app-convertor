import React from 'react';
import s from './App.module.css';
import { CurrencyProvider } from './components/Сonverter/CurrencyProvider';
import Converter from './components/Сonverter/Сonverter';

const App = () => {
    return (
        <CurrencyProvider>
            <div className={s.convertorContainer}>
                <h1 className={s.convertorTitle}>Конвертор валют</h1>
                <Converter />
            </div>
        </CurrencyProvider>
    )
}

export default App;