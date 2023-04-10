import React from 'react';
import Category from './Category';

const Categories = ({ job_categories }) => {
  return (
    <div className='my-container  mb-32'>
      <h2 className='font-bold text-4xl text-center mb-4'>Job Category List</h2>
      <p className='text-base text-secondary text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {
        job_categories.map(category => (
          <Category key={category.id} category={category}/>
        ))
      }
      </div>
    </div>
  );
};

export default Categories;