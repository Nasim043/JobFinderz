import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageName from './PageName';

const Statistics = () => {
  const { marks } = useLoaderData();
  return (
    <>
    <PageName>Assignment Analytics</PageName>
      <div className='my-container'>
      <ResponsiveContainer width={'100%'} height={300}>
        <AreaChart
          width={500}
          height={300}
          data={marks}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment_no" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default Statistics;