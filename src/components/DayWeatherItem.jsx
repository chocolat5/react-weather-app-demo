import React from 'react';
import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

const DayWeatherItem = ({ daily, index, degreeType, dayData }) => {
  let newDate = new Date();
  const weekday = daily.dt * 1000;
  weekday.toLocaleString();
  newDate.setTime(weekday);

  const imgUrl = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;

  const celsius = Math.round(daily.main.temp);
  const fahrenheit = Math.round(((celsius * 9) + (32 * 5)) / 5);
  return (
    <div className="card_item">
      <p>{moment(newDate).format('h:mm a')}</p>
      <img src={imgUrl} alt={daily.weather[0].main} />
      <p className="card_temp">{degreeType === 'fahrenheit' ? fahrenheit : celsius}<span>{degreeType === 'fahrenheit' ? '°F' : '℃'}</span></p>
    </div>
  );
}

export default DayWeatherItem;
