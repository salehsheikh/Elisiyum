import Image from 'next/image';

const TopIssuer = ({brand,icon,type,pts,value,level}) => {
  return (
    <div className=" w-full ">
      <div className="flex justify-between items-center   gap-4">
  <div className="flex items-center gap-4 flex-1">
    <div className="w-[49px] h-[49px] rounded-full bg-[#D9D9D9] shrink-0 flex items-center justify-center overflow-hidden relative">
      <Image 
        src={icon} 
        alt="Issuer Logo"
        layout="fill"
        objectFit="contain"
        className="p-2 " 
      />
    </div>
    
    <div className="flex flex-col gap-2">
      <span className="text-white font-semibold text-xs">{brand}</span>
      <div className="flex flex-col gap-1">
  <span className="text-[#66FD70] text-xs font-medium">{type}</span>
  <div className="flex gap-2 items-center">
    <span className="text-gray-400 text-xs">Points:</span>
    <span className="text-[#FFCE40] text-xs">{pts}</span>
  </div>
</div>
    </div>
  </div>
  {/* Right Side */}
  <div className="flex flex-col items-end gap-2">
    <div className='w-21.5  h-5 flex justify-center items-center bg-[#CED2DA33]/20 rounded-lg'>
    <span className="text-white font-medium text-xs">{value}</span>
    </div>
    
    <div className="bg-[#FFCE40] rounded-lg w-[47px] h-[17px] flex items-center justify-center">
      <span className="text-black text-[10px] font-medium">{level}</span>
    </div>
  </div>
</div>
    </div>
  );
};


const IssuerWrapper=()=>{
    const issuerConfigs=[
        {
            icon:"/assets/icons/mcdonald.svg",
            brand:"McDonalds",
            type:"Achiever",
            pts:"3560 pts",
            value:"$10,000,000",
            level:"Level 5"
        },
        {
            icon:"/assets/icons/intel.svg",
            brand:"Intel",
            type:"Apex",
            pts:"1500 pts",
            value:"$10,000,000",
            level:"Level 6"
        },
        {
            icon:"/assets/icons/1build.svg",
            brand:"1Build",
            type:"Prestige",
            pts:"2000 pts",
            value:"$10,000,000",
            level:"Level 9"
        },
        {
            icon:"/assets/icons/hqo.svg",
            brand:"Hqo",
            type:"Partner",
            pts:"4000 pts",
            value:"$10,000,000",
            level:"Level 7"
        }
    ];
    return(
        <div className="bg-[#1D212780]/50 p-6 rounded-[35px] space-y-6 lg:max-w-sm   h-92.5  w-full mx-auto relative">
  <p className="w-[4px] h-[112px] flex-shrink-0 rounded-[2.5px] bg-[#989898] right-0 top-1/3 absolute" />

 <div className="flex justify-between items-center mb-3  pb-3">
        <h3 className="text-white text-lg font-bold">Top Issuer</h3>
        <button className="text-[#FFCE40] text-xs underline cursor-pointer">See more</button>
      </div>
      <div className="space-y-2">
        {issuerConfigs.map((config, index) => (
          <TopIssuer
            key={index}
            {...config}
          />
        ))}
      </div>
            </div>

    )

}
export default IssuerWrapper;