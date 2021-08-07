import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Oct',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Nov',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Dec',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jan',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Feb',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Mar',
    pv: 3800,
    amt: 2500,
  },
];

export default function SimpleBarChart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" stackId="a" fill="#5AD6B0" />
        </BarChart>
      </ResponsiveContainer>
    );
}