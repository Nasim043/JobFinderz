import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 my-container mt-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='statistics'>Statistics</Link></li>
            <li><Link to='/'>Applied Jobs</Link></li>
            <li><Link to='blog'>Blog</Link></li>
          </ul>
        </div>
        <Link to='/' className="text-3xl font-bold">JobFinderz</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='statistics'>Statistics</Link></li>
          <li><Link to='/'>Applied Jobs</Link></li>
          <li><Link to='blog'>Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='hf' className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">Start Applying</Link>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Navbar;