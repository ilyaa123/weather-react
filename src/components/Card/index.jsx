import React, { memo, useContext } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';

import '../../App.css';
import { useWeather } from '../../hooks/useWeather';

export const CardNoMemo = ({ city }) => {
    const data = useWeather(city);

    const {dispatch} = useContext(GlobalContext);

    const navigate = useNavigate();

    const isHome = Boolean(useMatch('/'));
    
    if (!data) {
        return null
    };
    const {name, weather, main} = data;
    const {description, icon} = weather[0];
    const {temp, humidity, feels_like} = main;

    const handleOnDelete = () => {
        if (isHome){
            dispatch({
                type: 'DELETE CITY',
                payload: city,
            })
        } else {
            navigate('/');
        }
    };

    const handleOnEdit = () => {
        dispatch({
            type: 'EDIT CITY',
            payload: city,
        })
        navigate('/');
    };

    return (
        <div className="Card">
            <div className="ActionButtonWrap">
                <button className='ActionButton' onClick={handleOnEdit}>Edit</button>
                <button className='DeleteCity' onClick={handleOnDelete}>X</button>
            </div>
                <div className='MainInfo'>
                    <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
                    {isHome ? 
                    <Link to={`/city/:${city}`} className="Title">{name}</Link> :
                    <p className="Title">{name}</p>
                    }
                    <div className="Description">{description}</div>
                    <div className="Temperature">{temp.toFixed()}</div>
                </div>
                <div className="Information">
                    <div>Humidity: {humidity}</div>
                    <div>Feels like: {feels_like}</div>
                </div>
        </div>
    )
};
export const Card = memo(CardNoMemo)