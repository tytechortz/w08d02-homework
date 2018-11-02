import React from 'react';

const weatherData = (props) => {

    return (
        <div>
            <h1>Current Denver Weather</h1>
            <ul>
                <p>Temp: {props.weather && props.weather.main && props.weather.main.temp}</p>
                <p>Humidity: {props.weather && props.weather.main && props.weather.main.humidity}</p>
                <p>Pressure: {props.weather && props.weather.main && props.weather.main.pressure}</p>
            </ul>
        </div>
    )
}

export default weatherData;