import React from 'react';
import Lottie from "lottie-react";
import jobProposal from '../assets/75702-job-proposal-review-animation.json'

const Header = () => {
  return (
    <div className='w-full bg-zinc-50 mb-16'>
      <div className='px-4 pt-4 md:px-16 lg:px-8 lg:pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:flex items-center gap-16'>
      <div className='sm:p-4'>
        <h1 className='font-bold text-5xl sm:text-7xl mb-5 sm:mb-6'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h1>
        <p className='text-base text-secondary md:text-lg mb-5 sm:mb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <a className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">Get Stared</a>
      </div>
      <div className=''>
        <Lottie animationData={jobProposal} loop={true} />
      </div>
    </div>
    </div>
  );
};

export default Header;