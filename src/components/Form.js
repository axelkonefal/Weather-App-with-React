import React from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="enter city"/>
        <input type="text" name="country" placeholder="enter country"/>
        <button>Check weather!</button>
    </form>
)

export default Form