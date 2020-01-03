import React from 'react';
import moment from 'moment';

import DayWeatherItem from './DayWeatherItem';

const DayCard = ({ daily, index, degreeType, dayData }) => {
  let newDate = new Date();
  const weekday = daily.dt * 1000;
  weekday.toLocaleString();
  newDate.setTime(weekday);

  const imgUrl = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;

  const className = index === 0 ? 'card card-first' : 'card';

  const celsius = Math.round(daily.main.temp);
  const fahrenheit = Math.round(((celsius * 9) + (32 * 5)) / 5);

  const formatHourData = () => {
    return(
      dayData.map((day, index) => (
        <DayWeatherItem
          key={day.dt}
          index={index}
          daily={day}
          degreeType={degreeType} />
      ))
    )
  }

  return (
    <div className={className}>
      <p className="card_dayofweek">
        {moment(newDate).format('ddd')}{index === 0 && <span>Today</span>}
      </p>
      <p className="card_date">{moment(newDate).format('MM/D')}</p>
      {index === 0 ? (
        <div className="card_day_list">
          {formatHourData()}
        </div>
        
        ) : (
        <DayWeatherItem
          index={index}
          daily={daily}
          degreeType={degreeType}
          dayData={dayData} />
      )}

      {index === 0 && (
        <React.Fragment>
          <p className="card_desc">{daily.weather[0].description}</p>
          <p className="">Humidity : {daily.main.humidity} %</p>
        </React.Fragment>
      )}
    </div>
  );
}

export default DayCard;
