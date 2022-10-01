import React, { memo } from 'react';

import { useParams, Link } from 'react-router-dom';

import '../../App.css';
import { useForecast } from '../../hooks/useForecast';

import { Card } from '../Card';
import { DailyCard } from '../DailyCard';

export const SingleCityNoMemo = () => {
    const props = useParams();
    const city = props.city.slice(1);

    const data = useForecast(city);
    
    return (
        <div className='SingleCityWrap'>
            <Link className='GoBack' to='/'>Go Back</Link>
            <Card city={city} />
            {data && <div className='DailyCards'>
                {data.list.map((dailyCard) => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
            </div>}
        </div>
    )
};
export const SingleCity = memo(SingleCityNoMemo)