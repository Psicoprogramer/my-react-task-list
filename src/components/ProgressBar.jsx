import React, { useState, useEffect } from 'react';

const ProgressBar = ({ valuePromise, maxValuePromise, color,text }) => {
  const [value, setValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    Promise.all([valuePromise, maxValuePromise])
      .then(([valueResult, maxValueResult]) => {
        setValue(valueResult);
        setMaxValue(maxValueResult);
      })
      .catch((error) => {
        console.error('Error fetching values:', error);
      });
  }, [valuePromise, maxValuePromise]);

  const percentage = (value / maxValue) * 100;

  return (
    <>
      <p>{text}</p>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
          height: '10px',
        }}
      />
    </>
  );
};

export default ProgressBar;
