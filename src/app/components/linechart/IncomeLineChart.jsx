'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const IncomeLineChart = () => {
    const [activeTab, setActiveTab] = useState('year')
  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#FFCE40'],
    series: [{
      name: "Income",
      data: [300, 410, 350, 500, 390, 610, 700, 900, 800, 750, 850, 950]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#717579', 
           text:"12px"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      min: 200,
      max: 1000,
      tickAmount: 4, 
      labels: {
        style: {
          colors: '#717579' ,
          text:"12px"
        },
        formatter: (value) => `$${value}`
      }
    },
    grid: {
      show:true,
      strokeDashArray: 3,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
   
      colors: ['#FFCE40'],
      strokeWidth: 0
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (value) => `$${value}`
      }
    }
  }

  return (
    <div className=" p-8 rounded-[35px] bg-[#1D2127B2] border-[1px]  border-[#031228] backdrop-blur-[32px]">
    {/* Header Section */}
    <div className="flex justify-between items-start mb-6">
        <h2 className="text-white  font-bold text-lg">Overview</h2>
        <div className="flex justify-between gap-8 mb-6 ">
        {[ 'week','today', 'year'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 h-7 rounded-2xl transition-colors text-[14px] cursor-pointer  ${
              activeTab === tab 
                ? 'bg-[rgba(206,210,218,0.2)] w-16 text-white ' 
                : 'text-gray-400 hover:bg-white/10 '
            }`}
            style={{ textTransform: 'capitalize' }}
          >
            {tab}
          </button>
        ))}
      </div>
        
      </div>

      {/* Financial Summary */}
      <div className="flex items-center gap-4">
          <span className="text-white text-[16px] font-semibold">$6.5M</span>
          <div className="flex items-center gap-2 px-2 py-1 ">
            <span className="text-green-400 text-[16px]">30%</span>
            <span className="text-green-400">↑</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 ">
            <span className="text-white text-[16px]">Last Year</span>
            <span className="text-green-400">$5M</span>
          </div>
        </div>
    
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={228}
      />
    </div>
  )
}

export default IncomeLineChart