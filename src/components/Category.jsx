import React from 'react';

const Category = ({ category }) => {
  const { name, logo, jobs_available } = category;
  return (
    <div className='p-10 mt-7 rounded-lg  bg-zinc-50 shadow-lg'>
      <div className='p-3 bg-zinc-100 h-16 w-16 mb-7'>
        <img src={logo} alt={name} className='text-primary' />
      </div>
      <h3 className='font-bold text-lg mb-2'>{name}</h3>
      <p className='text-secondary'>{jobs_available} Jobs Available</p>
    </div>
  );
};
export default Category;