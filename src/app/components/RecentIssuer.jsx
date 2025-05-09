import Image from 'next/image';

const RecentIssuer = ({brand,icon,type,pts,value,level}) => {
  return (
    <div className=" w-full">
      <div className="flex justify-between items-center gap-4">
  <div className="flex items-center gap-4 flex-1">
    <div className="w-[49px] h-[49px] rounded-full shrink-0 bg-[#D9D9D9] flex items-center justify-center overflow-hidden relative">
      <Image 
        src={icon} 
        alt="Issuer Logo"
        layout="fill"
        objectFit="contain"
        className="p-2" 
      />
    </div>
    
    <div className="flex flex-col gap-2">
        <div className='flex justify-between gap-1'>
        <span className="text-white font-semibold text-xs">{brand}</span>
        <span className='w-[24px] h-[12px]  flex justify-center items-center text-[10px] font-medium rounded-sm text-white shrink-0 bg-[#FFCE40]'>New</span>
        </div>
      
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


const RecentIssuerWrapper=()=>{
    const issuerConfigs=[
        {
            icon:"/assets/icons/walmart.svg",
            brand:"Walmart",
            type:"Elite",
            pts:"1000 pts",
            value:"$10,000,000",
            level:"Level 5"
        },
        {
            icon:"/assets/icons/cat.svg",
            brand:"Cat",
            type:"Elite",
            pts:"1500 pts",
            value:"$10,000,000",
            level:"Level 6"
        },
        {
            icon:"/assets/icons/sony.svg",
            brand:"Sony",
            type:"Elite",
            pts:"1000 pts",
            value:"$10,000,000",
            level:"Level 9"
        },
        {
            icon:"/assets/icons/nike.svg",
            brand:"Nike",
            type:"Elite",
            pts:"1200 pts",
            value:"$10,000,000",
            level:"Level 7"
        }
    ];
    return(
        <div className="bg-[#1D212780]/50  overflow-y-hidden  p-6 rounded-[35px] space-y-6 lg:max-w-sm w-full mx-auto  h-92.5 relative">
  <p className="w-[4px] h-[112px] flex-shrink-0 rounded-[2.5px] bg-[#989898] right-0 top-1/3 absolute" />

 <div className="flex justify-between items-center mb-3  pb-3">
        <h3 className="text-white text-lg font-bold">Recent Issuer</h3>
        <button className="text-[#FFCE40] text-xs underline cursor-pointer">See more</button>
      </div>
      <div className="space-y-2">
        {issuerConfigs.map((config, index) => (
          <RecentIssuer
            key={index}
            {...config}
          />
        ))}
      </div>
            </div>

    )

}
export default RecentIssuerWrapper;