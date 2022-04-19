import {createContext, useContext, useState} from "react"


const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState({})


    const values = {
        weatherData,
        setWeatherData,
    }
    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export default WeatherContext

export const  useCity = () => useContext(WeatherContext)
