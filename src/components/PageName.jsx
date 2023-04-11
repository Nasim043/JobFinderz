import React from 'react';
import vector from '../assets/vector.png'
import vector1 from '../assets/vector-1.png'

const PageName = ({ children }) => {
  return (
    <div className='w-full bg-zinc-50 mb-28 relative'>
      <h2 className='py-28 text-center text-3xl font-bold'>{children}</h2>
      <img src={vector}  className='absolute left-0 bottom-0 h-28' />
    </div>
  );
};

export default PageName;