import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ApplidedJobs = () => {
  const {jobs} = useLoaderData()
  console.log(jobs);
  return (
    <div className='my-container'>
      <h1>Applied jobs {jobs.length}</h1>
    </div>
  );
};

export default ApplidedJobs;