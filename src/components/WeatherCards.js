function WeatherCards({weatherData}){
    return (
    
            <div className="weather-cards">
               <p className="day">{new Date(weatherData.dt*1000).toLocaleDateString("en", {weekday:"long"})}</p>
               <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" />
               <p className="description">{weatherData.weather[0].description}</p>
               <p className="temp-max">Day {weatherData.temp.day} °C</p>
               <p className="temp-min">Night {weatherData.temp.night} °C</p>
            </div>

       
        
    )
}

export default WeatherCards