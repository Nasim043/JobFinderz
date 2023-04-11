import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AppliedJobsDetails from './AppliedJobsDetails';
import PageName from './PageName';
import Select from 'react-select'

const jobDetails = (job_item, jobs) => {
  return jobs.filter(job => {
    return job_item.find(id => job.id === id)
  })
}

const options = [
  { value: 'Onsite', label: 'Onsite' },
  { value: 'Remote', label: 'Remote' }
]

const ApplidedJobs = () => {
  const { jobs } = useLoaderData()
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSlect = (event) => {
    setFilteredJobs(() => appliedJobs.filter(job => job.remote_or_onsite === event.value))
  };

  useEffect(() => {
    const jobList = localStorage.getItem('job_list')
    if (jobList) {
      const job_item = JSON.parse(jobList)
      const jobToShow = jobDetails(job_item, jobs)
      setAppliedJobs(jobToShow)
      setFilteredJobs(jobToShow)
    }
  }, [jobs])

  return (
    <>
      <PageName>Applied Jobs</PageName>
      <div className='my-container'>
        <div className='flex justify-end mb-2'>
          <Select options={options} onChange={handleSlect} />
        </div>
        {
          filteredJobs.map(appliedJob => (
            <AppliedJobsDetails key={appliedJob.id} appliedJob={appliedJob} />
          ))
        }
      </div>
    </>
  );
};

export default ApplidedJobs;