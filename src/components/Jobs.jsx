import React, { useState } from 'react';
import Job from './Job';

const Jobs = ({ jobs }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  }

  return (
    <div className='my-container mb-9 md:mb-32'>
      <h2 className='font-bold text-4xl text-center mb-4'>Featured Jobs</h2>
      <p className='text-base text-secondary text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        {
          jobs.slice(0, showAll ? 6 : 4).map(job => (
            <Job key={job.id} job={job} />
          ))
        }
      </div>
      {
        !showAll && (<span className='flex justify-center'>
          <button onClick={handleShowAll} className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 mt-8 rounded-md'>
            See All Jobs
          </button>
        </span>)
      }
    </div>
  );
};

export default Jobs;