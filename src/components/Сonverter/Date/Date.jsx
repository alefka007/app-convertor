import React from "react";
import s from './Date.module.css';
import * as Moment from 'moment';
import 'moment/locale/ru'
Moment.locale('ru')

const Date = (props) => {
    let date = props.date[0].replace(/[A-Z]/gi, ' ');

    return (
    <div className={s.convertorContainer}>
        <div className={s.convertorDate}>
            <span>Дата и время последнего обновления:  {Moment(date).format('lll')}</span>
        </div>
    </div>
    )
}

export default React.memo(Date);