import React from 'react';
import './App.css';
import Widget from './Widget';

function LeftColumn() {
    return (
        <div className = 'Column LeftColumn'>
            <Widget 
                className = 'Widget'
                dop = 'true'
                TitleName = 'Поиск клиентов'
                DopName = 'Расширенный поиск'
             /> 
            <Widget 
                className ='WidgetBig'
                TitleName = 'Кабинет личной эффективности'
            />
        </div>
    )
}

export default LeftColumn;
