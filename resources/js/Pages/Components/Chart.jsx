import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BasicBars = () => {
  return (
    <BarChart
      
      xAxis={[{ scaleType: 'band', data: ['Active', 'Completed', 'canceled'], color: ['blue', 'red', 'blue'], }]}
      series={[{ data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}

export default BasicBars