import React from "react";

const Forecast = () => {
  return (
    <div class="days-forecast">
      <h2 style={{fontSize:'1.5rem',margin:'20px 0'}}>5-Day Forecast</h2>
      <ul class="weather-cards">
        <li className="card">
            <h3>11-01-2024</h3>
            <img src="" alt="weather-icon"/>
            <h5>Temp: </h5>
            <h5>Wind: </h5>
            <h5>Humidity: </h5>
            </li>
      </ul>
    </div>
  );
};

export default Forecast;
