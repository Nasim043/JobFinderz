import React from 'react';

const PageName = ({ children }) => {
  return (
    <div className='w-full bg-zinc-50 mb-28 relative'>
      <h2 className='py-28 text-center text-3xl font-bold'>{children}</h2>
      <img src='https://i.ibb.co/q95kfxS/Vector.png'  className='absolute left-0 bottom-0 h-28' />
    </div>
  );
};

export default PageName;