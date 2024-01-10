import React from 'react'

const LeftCard = () => {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:"center"}} >

    <div style={{display:"flex",flexDirection:'column',alignItems:'flex-start',justifyItems:'center',minWidth:'300px',
    border:'2px solid transparent', marginTop:'40px'}}>
    <span style={{minWidth:'300px',marginBottom:'5px',fontWeight:'500'}}>Enter a City Name</span>
    <input style={{minWidth:'300px', height:'25px'}} type='text' placeholder='eg. Mumbai'/>
    </div>

    <div style={{display:"flex",flexDirection:'column',alignItems:'flex-start',justifyItems:'center',minWidth:'300px',
    border:'2px solid transparent', marginTop:'10px'}}>
        <button style={{backgroundColor:'black',color:'white',fontWeight:'bold',minWidth:'300px',height:'30px'}}>Search</button>
    </div>
    
    </div>
  )
}

export default LeftCard