import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();
//I wanted to store this env file but i was facing some unexpected issues
const API_KEY = 'e83058a4c182a4dcb86a10de819bbff0';
// const API_KEY = '183814157f8ec17e289c772661e697d0';

const getWeatherDataWithCity = async (city) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    return data;
}

const getWeatherForecastWithCity = async (city) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
    return data;
}

const getWeatherDataWithCord = async (lat,lon) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    return data;
}

const getWeatherForecastWithCord = async (lat,lon) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}}&appid=${API_KEY}`)
    return data;
}

export { getWeatherDataWithCity, getWeatherForecastWithCity, getWeatherDataWithCord,getWeatherForecastWithCord };