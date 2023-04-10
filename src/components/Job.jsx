import React from 'react';

const Job = ({ job }) => {
  const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary,
    job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  return (
    <div className='p-10 mt-7'>
      <img src={company_logo} alt={job_title} />
      <h3 className='font-bold text-lg mb-2'>{job_title}</h3>
      <p className='text-secondary'>{company_name} Jobs Available</p>
    </div >
  );
};

export default Job;