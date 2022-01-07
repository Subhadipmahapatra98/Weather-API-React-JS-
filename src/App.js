import CityComponent from "./modules/CityComponent";
import axios from "axios";
import { useState } from "react";
import WeatherComponent from "./modules/WeatherInfoComponent";
import styled from "styled-components";

const API_KEY="46ebe6e9b97d08784d31e660bcd5d5a0";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
  "13d": "/icon/snow.png",
  "13n": "/icon/snow.png",
  "50d": "/icon/mist.png",
  "50n": "/icon/mist.png"
};

const Container=styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
font-family:Monstserrat;
`;

const AppLabel=styled.span`
color:black;
font-size:18px;
font-weight:bold;
`;

function App() {
  const[city,updateCity]=useState();
  const[weather,updateweather]=useState();

  const fetchWeather=async(e)=>{
    e.preventDefault();
const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
updateweather(response.data);

  }
  return (
    <Container>
    <AppLabel>React Weather App</AppLabel>
    {city && weather ? (
      <WeatherComponent weather={weather} city={city} />
    ) : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
  </Container>
  );
}

export default App;
