import React from 'react';

const Footer = () => {
  return (
    <footer style={{
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        // padding: '20px 0',
        // position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10vh'
      }}>
      <p>&copy; 2024 Weather App</p>
    </footer>
  );
};

export default Footer;
