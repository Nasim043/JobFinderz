import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { addToStorage } from '../LocalStorage.js'
import PageName from './PageName.jsx';

const JobDetails = () => {
  const { id } = useParams()
  const { jobs } = useLoaderData()
  const jobDetails = jobs.find(job => job.id === id)
  const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary,
    job_description, job_responsibility, educational_requirements, experiences, contact_information } = jobDetails;
  return (
    <>
      <PageName>Job Details</PageName>
      <div className='my-container flex flex-col md:flex-row items-center gap-3'>
        <div className='w-full md:w-4/6'>
          <h2 className='mb-5 md:text-lg'><span className='font-bold'>Job Description: </span>{job_description}</h2>
          <h2 className='mb-5 md:text-lg'><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</h2>
          <h2 className='mb-5 md:text-lg'><span className='font-bold mb-3'>Educational Requirements: </span>{educational_requirements}</h2>
          <h2 className='mb-5 md:text-lg'><span className='font-bold mb-3'>Experiences: </span>{experiences}</h2>
        </div>
        {/* Right side card */}
        <div className='w-full md:w-[30%]'>
          <div className='bg-gray-300 p-7 rounded-lg mb-6'>
            {/*  Job Details */}
            <h2 className='md:text-lg'>Job Details</h2>
            <hr className='w-11/12 text-center my-5' />
            <div className='flex md:items-center mb-3'>
              <CurrencyDollarIcon className='h-6 w-6 pr-1' />
              <p className='text-secondary md:text-lg font-medium'>Salary : {salary}</p>
            </div>
            <div className='flex items-center mb-3'>
              <CalendarDaysIcon className='h-6 w-6 pr-1' />
              <p className='text-secondary md:text-lg font-medium'>Job TItle : {job_title}</p>
            </div>

            {/* Contact Information */}
            <h2 className='md:text-lg my-5'>Contact Information</h2>
            <hr className='w-11/12 text-center my-5' />
            <div className='flex items-center mb-3'>
              <PhoneIcon className='h-6 w-6 pr-1' />
              <p className='text-secondary md:text-lg font-medium'>Phone : {contact_information.phone}</p>
            </div>
            <div className='flex md:items-center mb-3'>
              <EnvelopeIcon className='h-6 w-6 pr-1' />
              <p className='text-secondary md:text-lg font-medium'>Email : {contact_information.email}</p>
            </div>
            <div className='flex items-center mb-3'>
              <MapPinIcon className='h-6 w-6 pr-1' />
              <span className='text-secondary md:text-lg font-medium'>Address : {location}</span>
            </div>
          </div>
          <button onClick={() => addToStorage(jobDetails.id)} className='w-full bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md'>Apply Now</button>
        </div >
      </div >
    </>
  );
};

export default JobDetails;