import React from 'react';
import logo from '../assets/light blue weather app icon.jpeg';

const Header = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'10vh',backgroundColor:'black',color:'white'}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
      <img style={{height: '50px', marginLeft: '10px', marginRight: '10px', borderRadius: '25%' }} src={logo}/>
        Weather App
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginRight: '20px',width:'200px'}}>
      <div style={{marginRight:'10px'}}>Contact Us</div>
      <div style={{marginRight:'10px'}}>About Us</div>
      </div>
    </div>
  )
}

export default Header