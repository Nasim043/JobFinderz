import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'


const Job = ({ job }) => {
  const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary,
    job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  return (
    <div className='p-10 mt-7 rounded-lg border-2'>
      <img src={company_logo} alt={job_title} className='mb-7' />
      <h3 className='font-bold text-2xl mb-2'>{job_title}</h3>
      <p className='text-secondary text-lg font-medium'>{company_name}</p>
      <div className='flex my-3'>
        <p className='font-semibold mr-2 p-1 px-4 rounded-md border-primary border-2 text-primary'>{remote_or_onsite}</p>
        <p className='font-semibold p-1 px-4 rounded-md border-primary border-2 text-primary'>{fulltime_or_parttime}</p>
      </div>
      <div className='flex gap-1 lg:gap-3 mb-6'>
        <div className='flex items-center'>
          <MapPinIcon className='h-6 w-6 pr-1'/>
          <span className='text-secondary text-lg font-medium'>{location}</span>
        </div>
        <div className='flex items-center'>
          <CurrencyDollarIcon className='h-6 w-6 pr-1'/>
          <p className='text-secondary text-lg font-medium'>Salary : {salary}</p>
        </div>
      </div>
      <Link to={`job/${id}`} className="my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4">View Details</Link>
    </div >
  );
};

export default Job;