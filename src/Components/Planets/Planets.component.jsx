import React from 'react';
import data from '../../Data/data.json';

const Mercury = () => {
  console.log(data);
  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <p>{data.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Mercury;
