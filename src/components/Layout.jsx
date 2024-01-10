import React from 'react'
import LeftCard from './LeftCard'

const Layout = () => {
  return (
    <div style={{
        backgroundColor:'#7FC7D9',
        // backgroundColor:'#3559E0',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <div style={{height:'70vh',minWidth: '464px',border:'2px solid black',width:'30vw',margin: '10px 10px',borderRadius:'10px'}}>
        <LeftCard />
      </div>
      <div style={{height:'70vh',minWidth: '700px',border:'2px solid black',width:'60vw',margin: '10px 10px',borderRadius:'10px'}}></div>
    </div>
  )
}

export default Layout