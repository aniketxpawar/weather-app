import React from "react";
import ForecastCard from "./ForecastCard";

const Forecast = ({forecast}) => {
  console.log(forecast)
  return (
    <div style={{marginTop:'-20px',display:'flex',flexDirection:'column'}}>
    <div>
    <h2 style={{fontSize:'1.5rem'}}>5-Day Forecast</h2>
    </div>
      <ul style={{display:'flex',justifyContent:'space-between',marginRight:'0px',gap:'10px',padding:'0'}}>
        {forecast?.map((record,index) => 
        <ForecastCard key={index} dt={record?.dt} 
          temp={(record.main.temp - 273.15).toFixed(2)}
          speed={record?.wind.speed}
          humidity={record.main.humidity}
          icon={record?.weather[0]?.icon}
        />)}
      </ul>
    </div>
  );
};

export default Forecast;
