import DatetimeChart from "@/app/components/areacharts/DatetimeChart";
import Image from "next/image";

const SingleDateCard = ({
  bg = "#1D2127B2",  
  borderColor = "#666666", 
  title = "Inter Factory",
  months = "4 months",
  issuanceDate = "Oct 10th",
  chartLabel = "B2",
  chartLabelColor="#00FF26",
  securedBg="#FF6D2F",
  securedText = "11% Secured",
  strokeColor = "#666666",  
  gradientFrom = "#666666",  
  gradientTo = "#666060",    
  series,
  categories,
}) => {
  return (
    <div className="text-white w-full 2xl:w-[367px] 2xl:min-w-[367px]">
      <div className={`rounded-[20px] border relative shadow-xl overflow-hidden`} style={{ backgroundColor: bg, borderColor }}>
        {/* Header Section */}
        <div className="p-3 pb-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[16px] text-[#919191]">Issuance Date : {issuanceDate}</span>
              <Image 
                src="/assets/icons/calender.svg" 
                alt="Calendar" 
               width={24}
               height={24}
               className="cursor-pointer"

              />
            </div>
            <Image  
              src="/assets/icons/maximize.svg" 
              alt="Maximize" 
             width={24}
             height={24}
             className="cursor-pointer"
            />
          </div>

          <h3 className="text-[25px] text-[#FFCE40] font-semibold mb-1">{title}</h3>
          <p className="text-lg text-[#fff]">{months}</p>
        </div>

        {/* Chart Section */}
        <div className="relative">
          <DatetimeChart
            series={series}
            categories={categories}
            height={201}
            strokeColor={strokeColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
          />
          
          {/* Chart Labels */}
          <div className="absolute bottom-2 left-4 flex items-center gap-2">
            <div className=" backdrop-blur-sm rounded-full px-3 py-1 text-xs" style={{
              background:securedBg
            }}>
              {securedText}
            </div>
          </div>
          <div className="absolute bottom-2 right-4 text-xs opacity-70 "
           style={{ color: chartLabelColor }}>
            {chartLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDateCard;