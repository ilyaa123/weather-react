import { useEffect, useState } from "react";
import { API_KEY } from '../settings';

export const useForecast = (city) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=alerts,current,minutely,hourly&cnt=12&appid=${API_KEY}&units=metric`)
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