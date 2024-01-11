import React from "react";
import WeatherData from "./WeatherData";
import Divider from "./Divider";
import Forecast from "./Forecast";

const RightCard = ({data,forecast}) => {
    // console.log(data)
    // const data = {"coord":{"lon":72.8479,"lat":19.0144},"weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50d"}],"base":"stations","main":{"temp":303.14,"feels_like":303.88,"temp_min":302.09,"temp_max":303.14,"pressure":1016,"humidity":48},"visibility":2100,"wind":{"speed":3.09,"deg":110},"clouds":{"all":7},"dt":1704947719,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1704937442,"sunset":1704977274},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        {data && <WeatherData data={data}/>}
        <Divider width='55vw' />
        <Forecast forecast={forecast}/>
    </div>)
};

export default RightCard;
