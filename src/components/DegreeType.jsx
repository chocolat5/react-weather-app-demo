import React from 'react';

const DegreeType = ({ degreeType, onChangeDegreeType }) => (
  <div className="btn_wrap">
    <input
      type="radio"
      name="degree-type"
      id="celsius"
      value="celsius"
      onChange={() => {onChangeDegreeType(event)}}
      checked={degreeType === 'celsius'} />
    <label htmlFor="celsius">Celsius</label>
    <input
      type="radio"
      name="degree-type"
      id="fahrenheit"
      value="fahrenheit"
      onChange={() => {onChangeDegreeType(event)}}
      checked={degreeType === 'fahrenheit'} />
    <label htmlFor="fahrenheit">Fahrenheit</label>
  </div>
);

export default DegreeType;
