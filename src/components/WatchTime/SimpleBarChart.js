import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const tickFormatter = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + 'B'
  } else if (number > 1000000) {
    return number / 1000000 + 'M'
  } else if (number > 1000) {
    return (number / 1000).toString() + 'K'
  } else {
    return number.toString()
  }
}

export default function SimpleBarChart(props) {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        width={500}
        height={300}
        barSize={17}
        data={props.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={tickFormatter} />
        <Bar dataKey="pv" stackId="a" fill="#5AD6B0" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
