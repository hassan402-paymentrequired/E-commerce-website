import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 500,
  },
  {
    name: 'Feb',
    sales: 3000,
  },
  {
    name: 'Mar',
    sales: 2000,
  },
  {
    name: 'Apr',
    sales: 2780,
  },
  {
    name: 'May',
    sales: 1890,
  },
  {
    name: 'Jun',
    sales: 2390,
  },
  {
    name: 'July',
    sales: 3490,
  },
  {
    name: 'Aug',
    sales: 3490,
  },
  {
    name: 'Sep',
    sales: 3490,
  },
];

export default class BasicBars extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

  render() {
    return (
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
  }
}
