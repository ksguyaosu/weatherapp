import React, {useState} from "react"
import Content from "./content"
import axios from "axios"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Context from "../context"




const Main = (e) => {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const api_call = async (e) => {
        e.preventDefault()
        const location = e.target.elements.location.value
        const API_KEY = "02fbfc2e6f0f5561299a8a0478f19f34"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        setWeather(response.data.main)
        setCity(response.data.name)
    }

    console.log(weather);

    return (
        <div className="main">
            <h1>Main component</h1>
            <Content>
                <Context.Provider value={{ api_call, weather, city }}>
                    <WeatherSearch />
                    {weather && <WeatherData/> }
                </Context.Provider> 
            </Content>
        </div>
    )
}

export default Main