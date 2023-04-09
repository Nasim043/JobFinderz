import React from 'react';
import Lottie from "lottie-react";
import jobProposal from '../assets/75702-job-proposal-review-animation.json'

const Header = () => {
  return (
    <div className='my-container lg:flex items-center gap-16'>
      <div className=''>
        <h1 className='font-bold text-7xl'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h1>
        <p className='text-base text-secondary md:text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <a className="btn btn-primary normal-case bg-primary border-0">Get Stared</a>
      </div>
      <div>
        <Lottie animationData={jobProposal} loop={true} />
      </div>
    </div>
  );
};

export default Header;