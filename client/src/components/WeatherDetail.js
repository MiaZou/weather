import React from 'react';
import WeatherIcons from './WeatherIcons';

class WeatherDetail extends React.Component {

  convKtoF = (temp) => {
    temp = Math.round((temp - 273.15) * 9/5 + 32);
    return temp;
  }

  convMbtoKpa = (pressure) => {
    pressure = Math.round(pressure/10);
    return pressure;
  }

  convTime = (time) => {
    let date = new Date(time * 1000);
    const hr = date.getHours();
    const min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const sec = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    date = hr + ':' + min + ':' + sec;
    return date;
  }

  render() {
      const { response, zip } = this.props;
    return (
      <div className="weather-detail">
        <div className="weather-main-info">
          <h2>Current weather in {response.data.name} is</h2>
          <div className="weather-img-type">
            <h1 className="weather-type">{response.data.weather[0].main}</h1>
            <WeatherIcons 
              weather={response.data.weather[0].main}
            />
          </div>
          <h3>with a temperature of {this.convKtoF(response.data.main.temp)} Fahrenheit, feels lik {this.convKtoF(response.data.main.feels_like)} Fahrenheit</h3>
        </div>
        <div className="weather-other-info">
          <div>Min Temperature: {this.convKtoF(response.data.main.temp_min)} Fahrenheit</div>
          <div>Max Temperature: {this.convKtoF(response.data.main.temp_max)} Fahrenheit</div>
          <div>Pressure: {this.convMbtoKpa(response.data.main.pressure)} kPa</div>
          <div>Sunrise: {this.convTime(response.data.sys.sunrise)} am</div>
          <div>Sunset: {this.convTime(response.data.sys.sunset)} pm</div>
          <div>Wind: {response.data.wind.speed} mph</div>
        </div>
      </div>
    );
  }
}

export default WeatherDetail;