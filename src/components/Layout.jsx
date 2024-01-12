import React, { useEffect, useState } from 'react'
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import { getWeatherDataWithCity, getWeatherForecastWithCity } from '../api';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';

const Layout = ({cord}) => {
  const [city,setCity] = useState('Mumbai');
  const [weatherData,setWeatherData] = useState(null)
  const [forecast,setForecast] = useState(null)
  useEffect(() => {
    try{
    (async()=>{
      try{
        const response = await getWeatherDataWithCity(city);
    // console.log(response)
    if(response.status !== 200){
      // toast.error('Not a Valid City Name')
    } 
    else{
      setWeatherData(response.data)
    }
      } catch(err){
        console.log(err)
        toast.error('Not a Valid City Name')
      }
    })();

    (async()=>{
      try{
      const response = await getWeatherForecastWithCity(city);
      // console.log(response)
      if(response.status !== 200){
        console.log('error')
      } 
      else{
        // setForecast(response.data.list.slice(0,5))
        const obj = {}
        for(const record of response.data.list){
          const date = moment(record.dt*1000).format("DD-MM-YYYY");
          if(!obj[date]) obj[date] = record
        }
        
        setForecast(Object.values(obj).slice(0,5));
      }
      }catch(err){
        console.log(err)
      }
    })();

    } catch(err){
      console.log(err)
    }

  },[city])
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
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div style={{height:'70vh',minWidth: '464px',border:'2px solid black',width:'30vw',margin: '5px 5px',borderRadius:'10px'}}>
        <LeftCard setCity={setCity} cord={cord} setWeatherData={setWeatherData} setForecast={setForecast}/>
      </div>
      <div style={{height:'70vh',minWidth: '700px',border:'2px solid black',width:'60vw',margin: '5px 5px',borderRadius:'10px'}}>
        <RightCard data={weatherData} forecast={forecast}/>
      </div>
    </div>
  )
}

export default Layout