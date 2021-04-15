import React from 'react';
import './App.css';
import Widget from './Widget';

export default function RightColumn() {
    return (
        <div className = 'Column RightColumn'>
            <Widget 
                className = 'Widget'
                dop = 'true'
                TitleName = 'Очередь'
                DopName = 'Пульт'
            />
            <Widget 
                className = 'Widget' 
                dop = 'true'
                TitleName = 'Задачи'
                DopName = 'Перейти к задачам'
            />
            <Widget 
                className = 'Widget'
                TitleName = 'Опросы'
            />
        </div>
    )
}
