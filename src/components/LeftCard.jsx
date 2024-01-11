import React, { useState } from 'react'
import Divider from './Divider';

const LeftCard = ({setCity}) => {
  const [typedCity, setTypedCity] = useState('');
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:"center"}} >

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
    
    </div>
  )
}

export default LeftCard