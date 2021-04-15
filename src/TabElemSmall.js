import React from 'react';
import './App.css';
import Icon from './Icon/Icon';
import WSmallBody from './WSmallBody';

export default function TabElemSmall(props) {
    return (
        <div className = 'SmallElem'>
            <div>
                <div className = 'SETitle'>
                    <div className = 'SEName'>{props.TitleName}</div>
                    <Icon name = {props.icon} />
                </div>
            </div>
            <WSmallBody name = {props.icon} />
        </div>
    )
}
