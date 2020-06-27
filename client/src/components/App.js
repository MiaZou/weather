import React from 'react';

import SearchBox from './SearchBox';
import SubmitBtn from './SubmitBtn';
import WeatherDetail from './WeatherDetail';
import openWeather from './../api/openWeather';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searched: false,
      zip: '',
      error: false,
      response: {}
    }
  }

  onZipChange = zip => {
    this.setState({zip: zip});
  }

  onZipSubmit = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const response = await openWeather.get(`/weather`, {
      params: {
        zip: this.state.zip,
        appid: apiKey}
    });

    if (response) {
      this.setState({
        searched: true,
        response: response
      });
    } else {
      this.setState({ error: true });
    }
    console.log(this.state.response);
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Weather Station</h1>
        <div className="search-submit">
          <SearchBox onZipChange={this.onZipChange} />
          <SubmitBtn
            value={'Submit'}
            onZipSubmit={this.onZipSubmit}
          />
        </div>
        <div className="search-result">
          {this.state.searched &&
            <WeatherDetail
              response={this.state.response}
              zip={this.state.zip}
            />
          }

        </div>
      </div>
    );
  }
}

export default App;