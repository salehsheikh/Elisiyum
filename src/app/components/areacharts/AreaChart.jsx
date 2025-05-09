'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AreaChart = ({
  series,
  categories,
  strokeColor = '#00B3FF',
  gradientFrom = '#006EFF',
  gradientTo = '#00AAFF',
  footerLabel = '30 days',
  height = 62,
}) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false },
        sparkline: { enabled: true }
       
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 3,
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
        markers: {
          fillColors: [strokeColor],
          strokeColor: strokeColor,
        },
      },
    });
  }, [series, strokeColor, gradientFrom, gradientTo, categories]);

  return (
    <div className="relative  mt-1">
      <div className="rounded-b-[20px] overflow-hidden">
        {typeof window !== 'undefined' && options && (
          <Chart options={options} series={series} type="area" height={height} />
        )}
      </div>
      <div className="absolute bottom-1 right-4 text-xs text-gray-400">{footerLabel}</div>
    </div>
  );
};

export default AreaChart;
