import React from 'react';
import './App.css';
import Filling from './Filling';

export default function Widget(props) {
    return (
        <div className = {props.className}>            
                <div className ='Title'>
                    <div className = 'Left'>{props.TitleName}</div>
                    {props.dop === 'true' && <div className = 'Right'>{props.DopName}</div>}
                </div>
                <Filling name = {props.TitleName}/>
        </div>
    )
}
