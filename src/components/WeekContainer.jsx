import React, { useState, useEffect } from 'react';

import DegreeType from './DegreeType';
import DayCard from './DayCard';

const key = process.env.API_KEY;

const WeekContainer = props => {
  const [dailyData, setDailyData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const [degreeType, setDegreeType] = useState('celsius');

  useEffect(() => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=1850144&units=metric&appid=${key}`;

    fetch(
      weatherUrl, {
        mode: 'cors',
      })
    .then(res => {
      return res.json()
    })
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes('0:00:00'));
      const dayData = data.list.slice(0, 4);
      setDailyData(dailyData);
      setDayData(dayData);
    });
  }, []);

  const onChangeDegreeType = (event) => {
    const type = event.target.value;
    setDegreeType(type);
  }

  const formatDayCards = () => {
    return(
      dailyData.map((daily, index) => (
        <DayCard
          key={daily.dt}
          index={index}
          daily={daily}
          dayData={dayData}
          degreeType={degreeType} />
      ))
    )
  }

  return (
    <div className="container">
      <div className="card_header">
        <p className="city">Tokyo</p>
        <DegreeType
          degreeType={degreeType}
          onChangeDegreeType={onChangeDegreeType} />
      </div>
      <div className="grid">
        {formatDayCards()}
      </div>
    </div>
  );
}

export default WeekContainer;
