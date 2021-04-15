import React from 'react';
import './App.css';
import Icon from './Icon/Icon';
import WBigBody from './WBigBody';

export default function TabElemBig(props) {
    return (
        <div className = 'BigElem'>
            <div>
                <div className ='BETitle'>
                    <div className ='BETitleCont'>
                        <div className ='BEName'>{props.TitleName}</div>
                        <div className = 'BEDate'>{props.BigElDate}</div>
                    </div>
                    <Icon name = {props.icon}/>
                </div>
            </div>
            <div>
                <WBigBody name = {props.icon}/>
            </div>
        </div>
    )
}
