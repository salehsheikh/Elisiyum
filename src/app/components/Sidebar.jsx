'use client';
import Image from 'next/image';

export default function Sidebar({ isOpen, setIsOpen }) {  
  
  const mainMenuItems = [
    { icon: '/assets/icons/market.svg', text: 'Market' },
    { icon: '/assets/icons/eye.png', text: 'Watchlist' },
    { icon: '/assets/icons/sync.svg', text: 'Exchange' },
  ];

  const myElysiumItems = [
    { icon: '/assets/icons/portfolio.svg', text: 'Portfolio' },
    { icon: '/assets/icons/profile.svg', text: 'Profile' },
    { icon: '/assets/icons/ecosystem.svg', text: 'Ecosystem' },
  ];

  const otherItems = [
    { icon: '/assets/icons/setting.svg', text: 'Settings' },
    { icon: '/assets/icons/support.svg', text: 'Support' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed z-50 ${
          isOpen ? 'left-[262px]' : 'left-0'
        } top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out cursor-pointer`}
      >
        <div className="w-[22px] h-[46px] relative ">
          <Image 
            src="/assets/images/leftplay.svg" 
            alt=""
            width={22}
            height={46}
            className={`w-full h-full object-cover transition-transform ${
              !isOpen ? 'rotate-180' : ''
            }`}
          />
          <Image 
            src="/assets/icons/arrow.svg" 
            alt=""
            width={16} 
            height={16}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </button>

      {/* Sidebar */}
      <aside
  aria-label="Main navigation"
  className={`fixed top-0 left-0 w-[288px] h-screen overflow-y-auto bg-[#11151B] text-white flex flex-col justify-between py-6  transition-transform duration-300 ease-in-out z-40 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        {/* Sidebar Content */}
        <div className="relative h-full">
          {/* Logo Section */}
          <div className="flex items-center justify-center px-[42px]">
            <Image 
              src="/assets/icons/logo.svg" 
              alt="Elysium Finance"
              width={204}
              height={58}
              className="w-full h-full object-cover my-10"
            />
          </div>

          {/* Profile Card */}
          <div className='px-[19px]'>
          <div className='w-full bg-black rounded-[22px] border border-solid border-[#666] p-4 h-[108px] '>
            <div className='flex justify-between items-center p-2 gap-4 h-full'>
              <div className="w-[84px] h-[84px] shrink-0"> 
                <Image 
                  src="/assets/images/donat.svg" 
                  alt="Profile"
                  width={76}
                  height={76}
                  className="w-full h-full object-contain shrink-0"
                />
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold text-[16px] text-white uppercase'>Performer</p>
                <p className='font-semibold text-[16px] text-[#FFCE40]'>3540 pts</p>
              </div>
            </div>
          </div>
          </div>

          {/* Divider */}
          <div className='flex items-center justify-center -mt-9 relative'>
  {/* Background Image */}
  <Image 
    src="/assets/images/flood.svg" 
    alt="Background"
    width={288}
    height={15}
    className="w-full h-full object-contain my-10"
  />
  
  {/* Centered Overlay Image */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Image
      src="/assets/images/Line 1.png"
      alt="Centered Line"
      width={288}  
      height={2}
      className="object-contain"
    />
  </div>
</div>

          {/* Navigation Items */}
          <nav className="flex-1 px-[42px] -mt-10">
            {/* Main Menu */}
            <h2 className="text-sm mb-6 text-[#919191]">Main Menu</h2>
            <div className="h-[50px] bg-no-repeat bg-cover bg-center px-4 flex items-center mb-6 border-[1.5px] border-[#666] rounded-[15px]"
              style={{ backgroundImage: "url('/assets/images/starsgrd.png')" }}>
              <div className="flex items-center gap-x-8 px-2.5">
                <Image 
                  src="/assets/icons/das.png" 
                  alt="Dashboard"
                  width={18}
                  height={20}
                  className="object-contain"
                />
                <p className="text-white text-[16px] font-medium">Dashboard</p>
              </div>
            </div>

            <div className="space-y-4">
              {mainMenuItems.map((item, index) => (
                <div key={index} className="flex items-center gap-8 pl-5">
                  <Image src={item.icon} alt={item.text} width={24} height={24} />
                  <span className="text-[16px] text-[#CED2DA]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* My Elysium */}
            <h3 className="text-sm mt-10 mb-6 text-[#919191]">My Elysium</h3>
            <div className="space-y-4">
              {myElysiumItems.map((item, index) => (
                <div key={index} className="flex items-center gap-8 pl-5">
                  <Image src={item.icon} alt={item.text} width={24} height={24} />
                  <span className="text-[16px] text-[#CED2DA]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Others */}
            <h3 className="text-sm mt-10 mb-6 text-[#919191]">Others</h3>
            <div className="space-y-4">
              {otherItems.map((item, index) => (
                <div key={index} className="flex items-center gap-8 pl-5">
                  <Image src={item.icon} alt={item.text} width={24} height={24} />
                  <span className="text-[16px] text-[#CED2DA]">{item.text}</span>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="text-sm text-[#959393] font-bold mx-[43px] mt-10">
            Elysium Finance<br />
            © All rights reserved
          </div>
        </div>
      </aside>
    </>
  );
}