
import { useState } from 'react';
import "./searchbox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);

    let API_URL = import.meta.env.VITE_WEB_URL;
    let api_key = import.meta.env.VITE_API_KEY;

    let getWeatherInfo= async()=>{
        try{
            let result= await fetch(`${API_URL}?key=${api_key}&q=${city}`)
        let resultJson=await result.json();
        let response={
            location:resultJson.location.name,
            temp:resultJson.current.temp_c,
            humidity:resultJson.current.humidity,
            wind:resultJson.current.wind_kph,
            pressure:resultJson.current.pressure_in,
            text:resultJson.current.condition.text,
            feelsLike:resultJson.current.feelslike_c,
            icon:resultJson.current.condition.icon,
        }
        return response;
    }catch(err){
        throw err;
    }
    }

    let cityName=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async(evt)=>{
        try{evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        await updateInfo(newInfo)
    }catch(err){
        setErr(true)
    }
    }
    return(<form onSubmit={handleSubmit}>
    <h1 style={{color:"#fff"}}></h1>
    <div className='neon-text'>Sky Pulse</div>
    <div className="wrap-input-9">
     <input className="input" type="text" id="input" label="City" variant="outlined" value={city} onChange={cityName} required />
      <span className="focus-border">
      <i></i>
    </span>
</div>

    <button className="btn-81" type='submit'><span>Button</span></button>
    {err&& <h3 style={{color:"red"}}>No such location currently present in our API.</h3>}
    </form>)
}