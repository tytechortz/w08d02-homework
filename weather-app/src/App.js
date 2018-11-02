import React, { Component } from 'react';
import WeatherData from '/WeatherData/WeatherData';


class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: []
    }
  }

getWeather = async () {

  try{
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=80206,us&APPID=d177ecaf5436da5c14f410fb73b64b4d');
    const WeatherData = await weather.json();
    return weatherJson
  } catch(err){
    return err
  }
}  

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
