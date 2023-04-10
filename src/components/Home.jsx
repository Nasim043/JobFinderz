import React, { useEffect, useState } from 'react';
import Header from './Header';
import Categories from './Categories';
import Jobs from './Jobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const {job_categories} = useLoaderData()
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    fetch('jobs.json')
    .then((res)=>res.json())
    .then((data)=> setJobs(data.jobs))
  },[])
  return (
    <div>
      <Header />
      <Categories job_categories={job_categories}/>
      <Jobs jobs={jobs}/>
    </div>
  );
};

export default Home;