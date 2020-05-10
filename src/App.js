import React from 'react'
import Title from './components/Title.js'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'edd79a9a41fbadae53e441c0e581ffe5'

class App extends React.Component{
    state = {
        temperature: undefined,
        feels_like: undefined,
        pressure: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault()
        const city = event.target.elements.city.value
        const country = event.target.elements.country.value
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
        const data = await apiCall.json()
        
        if (city && country){
            this.setState({
                temperature: data.main.temp,
                feels_like: data.main.feels_like,
                pressure: data.main.pressure,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                city: data.name,
                country: data.sys.country,
                humidity: data.weather[0].main,
                description: data.weather[0].description,
                error: ''
            })
        }else{
            this.setState({
                temperature: undefined,
                feels_like: undefined,
                pressure: undefined,
                temp_min: undefined,
                temp_max: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Enter the correct data'    
            })
        }
    }


    render(){
        return (                           
               <div className='wrapper'>
                   <div className='main'>
                       <div className='container'>
                           <div className='row'>
                                <div className='col-sx-1.title-container'> 
                                    <Title />
                                </div>
                                <div className='col-sx-1.form-container'>
                                    <Form getWeather={this.getWeather}/>
                                    <Weather 
                                        temperature={this.state.temperature}
                                        feels_like={this.state.feels_like}
                                        pressure={this.state.pressure}
                                        temp_min={this.state.temp_min}
                                        temp_max={this.state.temp_max}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>            
        )
    }
}




export default App