import React from 'react';
import Job from './Job';

const Jobs = ({ jobs }) => {
  return (
    <div className='my-container'>
      <h2 className='font-bold text-4xl text-center mb-4'>Job Category List</h2>
      <p className='text-base text-secondary text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          jobs.map(job => (
            <Job key={job.id} job={job} />
          ))
        }
      </div>
    </div>
  );
};

export default Jobs;