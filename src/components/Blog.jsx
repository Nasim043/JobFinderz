import React from 'react';
import { useLocation } from 'react-router-dom';
import PageName from './PageName';

const Blog = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <PageName>Blog Page</PageName>
      <div>
        <h1>This is blog page</h1>
      </div>
    </>
  );
};

export default Blog;