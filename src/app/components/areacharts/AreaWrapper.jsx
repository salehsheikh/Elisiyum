'use client';

import ChartCard from "@/app/components/areacharts/ChartCard";

const categories = [
  '2025-05-01T00:00:00.000Z',
  '2025-05-02T00:00:00.000Z',
  '2025-05-03T00:00:00.000Z',
  '2025-05-04T00:00:00.000Z',
  '2025-05-05T00:00:00.000Z',
  '2025-05-06T00:00:00.000Z',
  '2025-05-07T00:00:00.000Z',
];

const AreaWrapper = () => {
  return (
    <div className="  flex items-start justify-start py-10 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
       

        <ChartCard
          pair="Total Balance"
          strokeColor="#FFCE40"
          gradientFrom="#FFAB2D"
          gradientTo="#FFE100"
          borderColor="#FFCE40"
          bg="#071E34"
          shadowColor="shadow-yellow-400/10"
          iconBg="bg-yellow-500 text-black"
          price="$1.102"
          change="+9.3%"
          series={[{ name: "Revenue", data: [28, 34, 30, 40, 38, 45, 50] }]}
          categories={categories}
        />
 <ChartCard
          pair="GBP/CHF"
          iconText="£"
          iconBg="bg-[#FFB922]"
          strokeColor="#00B3FF"
          gradientFrom="#006EFF"
          gradientTo="#00AAFF"
          borderColor="#00B3FF"
          bg="#02162E"
          shadowColor="shadow-blue-500/10"
          series={[{ name: "Revenue", data: [31, 40, 28, 51, 42, 109, 100] }]}
          categories={categories}
        />
        {/* Copy more cards with different data */}
        <ChartCard
        arrow=" ↓"
          pair="USD/CHF"
          iconText="$"
          strokeColor="#959096"
          gradientFrom="#AEAFB6"
          gradientTo="#85868E1A"
          borderColor="#4ADE80"
          toggleBg="bg-[#FFCCD5]"
          bg="#06291C"
          shadowColor="shadow-green-400/10"
          iconBg="bg-[#F04570] "
          changeIconText="text-white"
          changeBg="bg-[#FF0000]"
          changeText="text-[#FF0000]"
          price="$148.63"
          change="+3.8%"
          series={[{ name: "Revenue", data: [12, 22, 18, 28, 25, 35, 40] }]}
          categories={categories}
        />

<ChartCard
  pair="AUD/CAD"
   arrow=" ↓"
  iconText="€"
  strokeColor="#959096"
  gradientFrom="#FFFFFF"
  gradientTo="rgba(255, 255, 255, 0.6)" // 60% opacity
  borderColor="#959096"
  bg="#000D1F"
  shadowColor="shadow-gray-400/10"
  iconBg="bg-[#1AAAF1] "
  toggleBg="bg-[#FFCCD5]"
  changeIconText="text-white"
          changeBg="bg-[#FF0000]"
          changeText="text-[#FF0000]"
  price="€0.921"
  change="+6.1%"
  series={[{ name: "Revenue", data: [19, 24, 22, 26, 24, 29, 32] }]}
  categories={categories}
/>

      </div>
    </div>
  );
};

export default AreaWrapper;
