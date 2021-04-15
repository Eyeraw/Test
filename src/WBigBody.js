import './App.css'
import React from 'react';

const WBigBody = ({name}) => {
    switch (name) {
        case 'productivity' : 
            return(
                <div className = 'bodymaincont1'>
                    <div className = 'bodycont1'>
                        <div className ='Text1'>Ваша</div>
                        <div className ='Num1'>0,69</div>
                    </div>
                    <div className = 'bodycont2'>
                        <div className ='Text2'>Кластер</div>
                        <div className ='Num2'>0,6</div>
                    </div>
                    <div className = 'bodycont3'>
                        <div className = 'Text3'>Коэфф. личной эффективности</div>
                        <div className = 'Num3'>1.25</div>
                    </div>
                </div>

            )
        case 'recommendation' :
            return(
                <div className = 'bodymaincont2'>
                <div className = 'bodycont1'>
                    <div className ='Text4'>Всего</div>
                    <div className ='Num4'>11</div>
                </div>
                <div className = 'bodycont4'>
                    <div className ='Text5'>Новых</div>
                    <div className ='Num5'>8</div>
                </div>
                <div className = 'bodycont5'>
                    <div className = 'Text6'>Просрочено</div>
                    <div className = 'Num6'>6</div>
                </div>
            </div> 
            )
        default :
            return null;               
    }

    
}

export default WBigBody;