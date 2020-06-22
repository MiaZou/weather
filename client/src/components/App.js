import React from 'react';

import SearchBox from './SearchBox';
import SubmitBtn from './SubmitBtn';
import openWeather from './../api/openWeather';

class App extends React.Component {

  componentDidMount() {
    this.locationSubmit('94089');
  }

  locationSubmit = async zip => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const response = await openWeather.get(`/weather`, {
      params: {
        zip: zip,
        appid: apiKey}
    });

  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Weather Station</h1>
        <div className="search-submit">
          <SearchBox
            onSubmit={this.locationSubmit}
          />
          <SubmitBtn
            value={'Submit'}
          />
        </div>
      </div>
    );
  }
}

export default App;