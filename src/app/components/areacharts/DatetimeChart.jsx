import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DatetimeChart = ({
  series,
  categories,
  strokeColor = 'rgba(255, 255, 255, 0.5)', 
  gradientFrom = 'rgba(255, 255, 255, 0.1)', 
  gradientTo = 'rgba(255, 255, 255, 0)',     
  height = 201,
}) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false },
        sparkline: { enabled: true },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 1,
        colors: [strokeColor],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: gradientFrom,
              opacity: 0.5,
            },
            {
              offset: 100,
              color: gradientTo,
              opacity: 0.1,
            },
          ],
        },
      },
      grid: { show: false },
      markers: {
        colors:['#666'],
      },
      xaxis: {
        type: 'datetime',
        categories,
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      tooltip: {
        x: {
          format: 'dd MMM',
        },
        theme: 'dark',
        
      },
    });
  }, [series, strokeColor, gradientFrom, gradientTo, categories]);

  return (
    <div className="relative w-full mt-1">
      <div className="rounded-b-[20px] overflow-hidden">
        {typeof window !== 'undefined' && options && (
          <Chart options={options} series={series} type="area" height={height} />
        )}
      </div>
    </div>
  );
};

export default DatetimeChart;