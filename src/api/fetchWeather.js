import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8702d0948ca6c9aeaf376193f6cddd1e';

export const fetchWeather = async (query)=>{
    const { data } = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    });

    return data;
}