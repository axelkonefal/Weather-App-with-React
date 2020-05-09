import React from 'react'


const Weather = props => (
    <div className='weather__info'>
        {props.city && props.country && <p className='weather__key'>{props.city}, {props.country}</p>}
        {props.temperature && <p className='weather__key'>Temperature: {props.temperature} °C</p>}
        {props.feels_like && <p className='weather__key'> Perceptible temperature: {props.feels_like} °C</p>}
        {props.temp_max && <p className='weather__key'>Max temperature: {props.temp_max} °C</p>}
        {props.temp_min && <p className='weather__key'> Min temperature: {props.temp_min} °C</p>}
        {props.pressure && <p className='weather__key'> Pressure: {props.pressure} hPa</p> }
        {props.humidity && <p className='weather__key'> Humidity: {props.humidity}</p>}
        {props.description && <p className='weather__key'>Conditions: {props.description}</p>}
        {props.error && <p className='weather__error'>{props.error}</p>}
    </div>
)

export default Weather