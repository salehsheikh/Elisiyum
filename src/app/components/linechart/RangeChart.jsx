import Image from 'next/image';

const RangeChart = ({ icon, title, current, total, progress, color }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-[35px] h-[35px]">
          <Image 
            src={icon}
            alt="Task icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-white text-[15px]">{title}</span>
          <div className="flex gap-1 text-[9px]">
            <span className="text-white">{current}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">{total}</span>
          </div>
        </div>
      </div>

      <div className="h-2 bg-[#2D2D2D] rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-300"
          style={{ 
            width: `${progress}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};

const RangeWrapper = () => {
  const rangeConfigs = [
    {
      icon: "/assets/icons/taskIcon.svg",
      title: "Issuance Volume",
      current: 14,
      total: 15,
      progress: 93,
      color: "#16A1F5"
    },
    {
      icon: "/assets/icons/taskIcon2.svg",
      title: "Completed Redemption",
      current: 7,
      total: 10,
      progress: 90,
      color: "#EF4AB9"
    },
    {
      icon: "/assets/icons/taskIcon3.svg",
      title: "Credit Risk Document Level",
      current: 7,
      total: 10,
      progress: 70,
      color: "#858BF4"
    },
    {
      icon: "/assets/icons/taskIcon2.svg",
      title: "Referral",
      current: 7,
      total: 10,
      progress: 20,
      color: "#F35744"
    }
  ];

  return (
    <div className="bg-[#1D2127]/50 p-6 rounded-[35px] space-y-6  w-[100%] mx-auto">
      <h3 className="text-white text-lg font-bold">Company Tasks</h3>
      
      <div className="space-y-8">
        {rangeConfigs.map((config, index) => (
          <RangeChart
            key={index}
            {...config}
          />
        ))}
      </div>
    </div>
  );
};

export default RangeWrapper;