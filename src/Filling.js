import Icon from './Icon/Icon';
import React from 'react';
import './App.css'
import TabElemBig from './TabElemBig';
import TabElemSmall from './TabElemSmall';

const Filling = ({name}) => {
    switch(name) {
        case 'Поиск клиентов' :
            return(
            <div className = 'In'>
                <input className = 'Input' type="text"  placeholder = "Серия и номер документа"/>
                <Icon name="search" className="InputIcon" />
            </div>
            )
        case 'Кабинет личной эффективности' :
            return(
                <div className ='Сontainer'>
                    <div className ='column1'>
                        <Icon name="robot" className = 'robot' />
                    </div>
                    <div className = 'column2'>
                        <TabElemBig TitleName = 'Продуктивность' BigElDate = 'на Март' icon = 'productivity' />
                        <TabElemBig TitleName = 'Рекомендации' BigElDate = '15 - 19 Марта' icon = 'recommendation'/>
                        <div className = 'SERow'>
                            <TabElemSmall TitleName = 'Встречи' icon = 'meeting' day1 ='Сегодня' day2 ='Завтра' num1 = '3' num2 = '0'/>
                            <TabElemSmall TitleName = 'Новости' icon = 'news' day1 ='Не прочитано' num2 = '2' day2 = {null} />
                        </div>
                    </div>
                </div>
            )
        case 'Очередь' :
            return(
                <div className = 'InDeveloping'>
                    Функционал в разработке
                </div>
            )
        case 'Задачи' :
            return(
                <div className = 'St'>
                    <div className ='Status'>
                        <div className = 'StatusName'>В работе</div>
                        <div className = 'Number'>0</div>
                    </div>
                    <div className = 'Status'>
                        <div className = 'StatusName'>Приостановленные</div>
                        <div className = 'Number'>0</div>
                    </div>
                </div>
            )
        case 'Опросы' :
            return(
                <div className = 'InDeveloping'>
                    Функционал в разработке        
                </div>
            )
        default :
                return null;
    }
}

export default Filling;