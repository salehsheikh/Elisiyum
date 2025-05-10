import AreaChart from "@/app/components/areacharts/AreaChart";

const ChartCard = ({
  bg = "#02162E",
  borderColor = "#00B3FF",
  shadowColor = "shadow-blue-500/10",
  iconBg = "bg-orange-500",
  iconText = "£",
  pair = "GBP/CHF",
  price = "$1.456",
  change = "+14.4%",
  changeBg = "bg-[#00FF6B]",
  toggleBg = "bg-[#CCFFCD]", 
  changeText = "text-[#00B771]",
  strokeColor = "#00B3FF",
  gradientFrom = "#006EFF",
  gradientTo = "#00AAFF",
  changeIconText="text-[#000000]",
  arrow="↑",
  series,
  categories,
}) => {
  return (
    <div className="text-white w-[100%] ">
      <div className={`rounded-[20px] border-[1.97px] relative shadow-xl overflow-hidden`} style={{ backgroundColor: bg, borderColor }}>
        <div className={`shadow-xl ${shadowColor}`}>
          <div className="flex items-center justify-between px-3 pt-3">
            <div className="flex items-center gap-2">
              <span className={`${iconBg} text-xs rounded-full w-4.5 h-4.5 flex items-center justify-center`}>
                {iconText}
              </span>
              <span className="text-[16px] font-bold">{pair}</span>
            </div>
           {/* Toggle Switch Design */}
           <div 
               className={`inline-flex items-center gap-[2.776px] rounded-[22.211px] py-[1.388px] pl-[1.388px] pr-[4.165px] hover:opacity-80 transition-all duration-200 ${toggleBg}`}
            >
              <span className={`${changeBg} ${changeIconText} text-xs rounded-full w-6 h-6 flex items-center justify-center`}>
                {arrow}
              </span>
              <span className={`${changeText} text-xs font-medium tracking-wide`}>
                {change}
              </span>
            </div>
          </div>
          <div className="text-[15px] font-bold px-3 pt-2">{price}</div>

          <AreaChart
            series={series}
            categories={categories}
            height={62}
            strokeColor={strokeColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            footerLabel="30 Days"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;