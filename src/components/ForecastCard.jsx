import React from 'react'
import moment from 'moment'

const ForecastCard = ({dt,temp,speed,humidity,icon}) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <li style={{background:'#61677A',listStyle:'none',borderRadius:'5px',width:'10vw',display:'flex',flexDirection:'column'}}>
            <h3 style={{color:'white',padding:'0',margin:'10px'}}>{moment(dt*1000).format("DD-MM-YYYY")}</h3>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={iconUrl} alt="weather-icon"
                style={{width:'5vw',height:'10vh'}}
            />
            </div>
            <h5 style={{color:'white',padding:'0',margin:'10px'}}>Temp: {temp}°C</h5>
            <h5 style={{color:'white',padding:'0',margin:'10px'}}>Wind: {speed} m/s</h5>
            <h5 style={{color:'white',padding:'0',margin:'10px'}}>Humidity: {humidity}%</h5>
            </li>
  )
}

export default ForecastCard