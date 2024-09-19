import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BasicBars = ({pending, complete, canceled}) => {
  return (
    <BarChart
      
      xAxis={[{ scaleType: 'band', data: ['Active', 'Completed', 'canceled'], color: ['blue', 'red', 'blue'], }]}
      series={[{ data: [pending, complete, canceled] }]}
      width={500}
      height={300}
    />
  );
}

export default BasicBars