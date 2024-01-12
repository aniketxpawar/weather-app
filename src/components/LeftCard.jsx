import React, { useState } from 'react'
import Divider from './Divider';
import { getWeatherDataWithCord, getWeatherForecastWithCity } from '../api';
import toast,{Toaster} from 'react-hot-toast';
import moment from 'moment';

const LeftCard = ({setCity,cord, setWeatherData, setForecast}) => {
  const [typedCity, setTypedCity] = useState('');

  const handleGeoLocation = async () => {
    try{
      if(!cord.lat && !cord.lon) 
      toast(
        'Allow Location Permission, to use Geolocation Feature!',
        {
          duration: 1000,
        }
      );
    const response = await getWeatherDataWithCord(cord.lat,cord.lon)
    // console.log(response)
    setWeatherData(response.data)
    if(response.status !== 200){
      toast.error('Not a Valid City Name')
    } 
    else{
      setWeatherData(response.data)
    }
    setCity(response.data.name)
    const response2 = await getWeatherForecastWithCity(response.data.name)
    // console.log(response2)
    if(response2.status !== 200){
      console.log('error')
    } 
    else{
      // setForecast(response.data.list.slice(0,5))
      const obj = {}
      for(const record of response2.data.list){
        const date = moment(record.dt*1000).format("DD-MM-YYYY");
        if(!obj[date]) obj[date] = record
      }
      
      setForecast(Object.values(obj).slice(0,5));
    }
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:"center"}} >
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div style={{display:"flex",flexDirection:'column',alignItems:'flex-start',justifyItems:'center',minWidth:'350px',
    border:'2px solid transparent', marginTop:'40px'}}>
    <span style={{minWidth:'350px',marginBottom:'5px',fontWeight:'500'}}>Enter a City Name</span>
    <input style={{minWidth:'350px', height:'35px',borderRadius:'5px',border:'none',outline:'none'}} 
    type='text' placeholder='eg. Mumbai' value={typedCity} onChange={(e) => setTypedCity(e.target.value)}/>
    </div>

    <div style={{display:"flex",flexDirection:'column',alignItems:'flex-start',justifyItems:'center',minWidth:'350px',
    border:'2px solid transparent', marginTop:'10px'}}>
        <button onClick={(e) => setCity(typedCity)} 
        style={{backgroundColor:'#5372ef',color:'white',fontWeight:'bold',minWidth:'350px',height:'35px',
        padding:'0',borderRadius:'5px',border:'none',outline:'none'}}>Search</button>
    </div>

    <Divider width='350px' />

    <div style={{display:"flex",flexDirection:'column',alignItems:'flex-start',justifyItems:'center',minWidth:'350px',
    border:'2px solid transparent'}}>
        <button onClick={() => handleGeoLocation()} 
        style={{backgroundColor:'#272829',color:'white',fontWeight:'bold',minWidth:'350px',height:'35px',
        padding:'0',borderRadius:'5px',border:'none',outline:'none'}}>Use Geolocation</button>
    </div>
    
    </div>
  )
}
// '#5372ef'

export default LeftCard