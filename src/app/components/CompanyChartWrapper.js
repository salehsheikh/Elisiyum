import React from 'react';
import IncomeLineChart from './linechart/IncomeLineChart';
import RangeWrapper from './linechart/RangeChart';

const CompanyChartWrapper = () => {
  return (
    <>
    <p className="text-[20px] font-medium text-white px-4 mt-3">Company Activity</p>

    <div className="flex flex-col md:flex-row gap-6 w-full p-4">
      {/* Income Line Chart - Takes 2/3 of the space */}
      <div className="flex-[2]">
        <IncomeLineChart />
      </div>
      
      {/* Range Wrapper - Takes 1/3 of the space */}
      <div className="flex-1">
        <RangeWrapper />
      </div>
    </div>
    </>
  );
};

export default CompanyChartWrapper;