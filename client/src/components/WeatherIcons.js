import React from 'react';

const images = ['sunny.jpg', 'cloud.jpg', 'rainy.jpg', 'windy.jpg'
];


class WeatherIcons extends React.Component {

  renderIcons = (weather) => {
    if (weather == 'Clear' || weather == 'Sunny') {
      return images[0];
    } else if (weather == 'Clouds') return images[1];
    else if (weather == 'Rain') return images[2];
    else if (weather == 'Wind') return images[3];
  }

  render() {
    const { weather } = this.props;
    return(
      <div className="weather-icons">
        <img src={this.renderIcons(weather)} alt='' />
      </div>
    );
  }
}

export default WeatherIcons;