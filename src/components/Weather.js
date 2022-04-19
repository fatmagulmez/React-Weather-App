import { useCity } from '../context/WeatherContext'
import WeatherCards from './WeatherCards'



function Weather() {
    const{weatherData} = useCity()

  return (
     weatherData !== "" ?
     <div className='weather-container'>
       {
         weatherData.daily?.map((weathercards, index) => {
           return <WeatherCards key={index} weatherData={weathercards}/>
         })
       }
     </div>
     : 'Loading ...'
  )
}

export default Weather