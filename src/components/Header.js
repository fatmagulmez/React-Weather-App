import {useState, useEffect} from 'react'
import { useCity } from '../context/WeatherContext'

const key = process.env.REACT_APP_WEATHER_API_KEY


function Header() {
    const [input, setInput] = useState("")
    const {weatherData, setWeatherData} = useCity()
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])

    let isGeoDone = true

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat( position.coords.latitude)
                setLong(position.coords.longitude)
            })
        }
        if(isGeoDone){
            fetchData()
            isGeoDone = false
        }
        if(lat.length !== 0 && long.length !== 0){
            getWeeklyData(lat, long)
            
        }
    },[lat, long])

    async function getWeeklyData(lat, long) {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly&lang=en&appid=${key}`)
        .then(response => response.json())
        .then(result => {
            setWeatherData(result)
            console.log(result)
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const currentWeatherData = weatherData
        currentWeatherData.name = input
        setWeatherData(currentWeatherData)

        if(input === "") {
            return alert("Plase Enter a Location")
        }else{
            getCityNameData(input)
            // setInput("")
        }
    }

    async function getCityNameData(input){
        await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${key}`)
        .then(response => response.json())
        .then(result => {
            getWeeklyData(result[0].lat, result[0].lon)
        })
    }

    



  return (
    <div className='header'>
        <div>
        <input 
        type="text" 
        placeholder='Please Enter a Location' 
        onChange={(e) => setInput(e.target.value)}
        className='input'
        />
        <button 
        onClick={onSubmitHandler}
        className='button'
        >Search</button>
        </div>
        <h1>Weather Forecast</h1>
        <h3>{new Date().toLocaleDateString("tr")}</h3>
        
    </div>
  )
}

export default Header