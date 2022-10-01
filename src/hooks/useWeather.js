import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { API_KEY } from '../settings';

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => {
            if (res.ok){
                return res.json()
            } else {
                const error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        })
        .then(setData)
        .catch(() => {
            setData(null)
        })
    }, [city]);
    return data;
}