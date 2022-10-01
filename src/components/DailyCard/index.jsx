import React, { memo } from 'react';

import '../../App.css';

export const DailyCardNoMemo = ({ dailyCard }) => {
    const { dt, dt_txt, main, weather } = dailyCard;
    const { description, icon } = weather[0];
    const { temp } = main;
    const date = new Date(dt * 1000);
    return (
        <div className='DailyCard'>
            <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
            <div className='DailyDay'>{date.toString().split(' ')[0]}</div>
            <div className='DailyDay'>{dt_txt.split(' ')[1]}</div>
            <div className='DailyTemp'>{temp.toFixed(0)}°</div>
            <div className='DailyDesc'>{description}</div>
        </div>
    )
};
export const DailyCard = memo(DailyCardNoMemo);