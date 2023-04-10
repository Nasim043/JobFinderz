import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const {marks} = useLoaderData();
  console.log(marks);
  return (
    <div>
      <h1>Hello from statistics page</h1>
    </div>
  );
};

export default Statistics;