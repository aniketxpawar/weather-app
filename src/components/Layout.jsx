import React, { useEffect, useState } from 'react'
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import { getWeatherDataWithCity } from '../api';

const Layout = () => {
  const [city,setCity] = useState('Mumbai');
  const [weatherData,setWeatherData] = useState(null)
  useEffect(() => {
    (async()=>{
    const response = await getWeatherDataWithCity(city);
    // console.log(response)
    if(response.status !== 200){
      console.log('error')
    } 
    else{
      setWeatherData(response.data)
    }
    })();

  },[city])
  console.log(weatherData)
  return (
    <div style={{
      backgroundColor:'#e4f2fd',
        // backgroundColor:'#7FC7D9',
        // backgroundColor:'#3559E0',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <div style={{height:'70vh',minWidth: '464px',border:'2px solid black',width:'30vw',margin: '5px 5px',borderRadius:'10px'}}>
        <LeftCard setCity={setCity}/>
      </div>
      <div style={{height:'70vh',minWidth: '700px',border:'2px solid black',width:'60vw',margin: '5px 5px',borderRadius:'10px'}}>
        <RightCard data={weatherData}/>
      </div>
    </div>
  )
}

export default Layout