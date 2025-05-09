export  function TopIssuance({title,issuer,date,amount}) {
    return (
      <div className="w-full">
        <div className="bg-[#45454580]/50 rounded-xl p-5 flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-white mb-3">
              {title}
            </h3>
            <div className="flex flex-col gap-2 text-xs font-medium">
              <p className="text-gray-600">{issuer}</p>
              <p className="text-gray-600">{date}</p>
            </div>
          </div>
  

          <div className="text-right flex flex-col items-end gap-6">
            <div className="text-xs font-medium text-[#40FF63]">
            {amount}
            </div>
            <div className="flex gap-3 ">
              <button 
                className="w-[101px] h-[17px]  rounded-lg text-black bg-[#FFCE40] 
                         flex justify-center items-center shrink-0  font-semibold text-[10px] "
                type="button"
              >
               Add toWatchlist
              </button>
              <button 
                className="w-[53px] h-[17px]  rounded-lg text-black bg-[#FFCE40] 
                         flex justify-center items-center shrink-0  font-semibold text-[10px] "
                type="button"
              >
              Invest
              </button>  
              <button 
                className="w-[47px] h-[17px]  rounded-lg text-black bg-[#66FD70] 
                         flex justify-center items-center shrink-0  font-semibold text-[10px] "
                type="button"
              >
              Active
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const IssuanceWrapper=()=>{
    const issuanceConfigs=[
        {
            title:"Toyota Motors 5-Years Bond",
            issuer:"Issuer: Apple Inc",
            date:"Maturity Date : 2029",
            amount:"$1,500,000,000"
        },
        {
            title:"AT&T 20-Year Bond",
            issuer:"Issuer: AT&T",
            date:"Maturity Date : 2040",
            amount:"$1,200,000,000"
        },
        {
            title:"JP Morgan Chase 10-Year Bond",
            issuer:"Issuer: JP Morgan",
            date:"Maturity Date : 2040",
            amount:"$1,200,000,000"
        },
        {
            title:"P&G 7-Year Bond",
            issuer:"Issuer: Procter & Gamble",
            date:"Maturity Date : 2040",
            amount:"$1,200,000,000"
        },

    ];
    return (
        <div className="max-w-4xl w-full overflow-hidden mx-auto  p-5.5  h-92.5  rounded-[37px]  bg-[#1D212780]/50 backdrop-blur-[32px]">
              <p className="w-[4px] h-[112px] flex-shrink-0 rounded-[2.5px] bg-[#989898] right-0 top-1/3 absolute" />

 {/* First Row - Header */}
 <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-white">Top Issuance</h2>
          <a 
            href="#" 
            className="text-[#FFCE40] text-xs underline"
          >
            See More 
          </a>
        </div>
        <div className="space-y-1">
        {issuanceConfigs.map((config, index) => (
          <TopIssuance
            key={index}
            {...config}
          />
        ))}
      </div>
      </div>
    )
  };
  export default IssuanceWrapper;