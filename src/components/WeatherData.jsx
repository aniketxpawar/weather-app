import React from 'react'
import moment from 'moment';

const WeatherData = ({data}) => {
    function convertKelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(2);
      }
    const iconUrl = data ? `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png` : '';
  return (
  <div style={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"space-between",width: "55vw",
    minWidth: "600px",
    backgroundColor: "#5372ef",
    height: "150px",
    marginTop: "25px",
    borderRadius: "10px" }}>
<div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    marginLeft: '10px'
  }}
>
  <span
    style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
  >
    City: {data?.name}
  </span>
  <span style={{ fontSize: "16px", color: "black" }}>
    Date: {moment(data?.dt * 1000).format("DD-MM-YYYY, HH:mm A")}
  </span>
  <span style={{ fontSize: "16px", color: "black" }}>
    Coordinates: {data?.coord.lat}, {data?.coord.lon}
  </span>
  <span style={{ fontSize: "18px", color: "black" }}>
    Temperature: {convertKelvinToCelsius(data?.main.temp)}°C (
    {convertKelvinToCelsius(data?.main.temp_min)}°C -{" "}
    {convertKelvinToCelsius(data?.main.temp_max)}°C)
  </span>
  <span style={{ fontSize: "16px", color: "black" }}>
    Pressure: {data?.main.pressure} hPa (
    {(data?.main.pressure * 0.02953).toFixed(2)} inHg)
  </span>
  <span style={{ fontSize: "16px", color: "black" }}>
    Humidity: {data?.main.humidity}%
  </span>
</div>

<div style={{marginRight:'10px'}}>
  {data?.weather && data?.weather[0] && data?.weather[0].icon && (
    <img
      src={iconUrl}
      alt="Weather Icon"
      style={{ width: "100px", height: "100px", marginLeft: "10px" }}
    />
  )}
</div>
</div>
  )
}

export default WeatherData