import SearchBox from "./searchbox"
import InfoBox from "./infobox"
import { useState } from "react"
import Footer from "./footer"
import "./weatherApp.css"

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        location:"Wonderland",
        feelsLike:31.9,
        humidity:81,
        icon:"//cdn.weatherapi.com/weather/64x64/night/176.png",
        pressure:29.62,
        temp:27.7,
        text: "Patchy rain nearby",
        wind:10.8
      })
      let updateInfo=(result)=>{
        setWeatherInfo(result)
      }
    return(
        <div className="container">
              <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
            <Footer/>
        </div>
    )
}