import React from 'react'


const Weather = props => (
    <div className='weather'>
        {props.city && props.country && <p className='weather-key-loc'>{props.city}, {props.country}</p>}
        {props.temperature && <p className='weather-key'>Temperature: {props.temperature} °C</p>}
        {props.feels_like && <p className='weather-key'> Perceptible temperature: {props.feels_like} °C</p>}
        {props.temp_max && <p className='weather-key'>Max temperature: {props.temp_max} °C</p>}
        {props.temp_min && <p className='weather-key'> Min temperature: {props.temp_min} °C</p>}
        {props.pressure && <p className='weather-key'> Pressure: {props.pressure} hPa</p> }
        {props.humidity && <p className='weather-key'> Humidity: {props.humidity}</p>}
        {props.description && <p className='weather-key'>Conditions: {props.description}</p>}
        {props.error && <p className='weather-error'>{props.error}</p>}
    </div>
)

export default Weather