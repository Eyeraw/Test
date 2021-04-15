import './App.css'
import React from 'react';

const WSmallBody = ({name}) => {
    switch(name) {
        case 'meeting':
            return(
                <div className ='smallbody'>
                <div className ='sbcont1'>
                    <div className = 'sbcont1day'>Сегодня</div>
                    <div className ='sbcont1num'>3</div>
                </div>
                <div className = 'sbcont2'>
                    <div className = 'sbcont2day'>Завтра</div>
                    <div className ='sbcont1num'>0</div>
                </div>
            </div>
            )   
            
        case 'news':
            return(
                <div className ='smallbody'>
                <div className ='sbcont1'>
                    <div className = 'sbcont1day'>Не прочитано</div>
                </div>
                <div className = 'sbcont2'>
                    <div className ='sbcont1num'>2</div>
                </div>
            </div>

            )
        default :
            return null;
    }
}

export default WSmallBody;