import { formatTemperature } from "../../helpers"
import { Weather } from "../../hooks/useWeather"
import styles from './WeatherDetail.module.css'

 
type WeatherDetailProps={
    weather:Weather
}

const WeatherDetail = ({weather}:WeatherDetailProps) => {
  return (
    <div className={styles.container}>
        <h2>Clima de: {weather.name} </h2>
        <p className={styles.current}>{formatTemperature(weather.main.temp)} &deg;C</p>
        <div className={styles.temperature}>
            <p>Min: <span>{formatTemperature(weather.main.temp_min)} &deg;</span></p>
            <p>Max: <span>{formatTemperature(weather.main.temp_max)} &deg;</span></p>
        </div>
    </div>
  )
}

export default WeatherDetail