import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AppliedJobsDetails from './AppliedJobsDetails';
import PageName from './PageName';

const jobDetails = (job_item, jobs) => {
  return jobs.filter(job => {
    return job_item.find(id => job.id === id)
  })
}

const ApplidedJobs = () => {
  const { jobs } = useLoaderData()
  const loc = useLocation();
  console.log(loc);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const jobList = localStorage.getItem('job_list')
    if (jobList) {
      const job_item = JSON.parse(jobList)
      const jobToShow = jobDetails(job_item, jobs)
      setAppliedJobs(jobToShow)
      console.log(jobToShow);
    }
  }, [jobs])

  return (
    <>
      <PageName>Applied Jobs</PageName>
      <div className='my-container'>
        {
          appliedJobs.map(appliedJob => (
            <AppliedJobsDetails key={appliedJob.id} appliedJob={appliedJob} />
          ))
        }
      </div>
    </>
  );
};

export default ApplidedJobs;