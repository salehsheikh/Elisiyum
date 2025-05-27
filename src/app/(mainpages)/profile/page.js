import Achivements from '@/app/components/profile/Achivements';
import Donut from '@/app/components/profile/Donut';
import EliteBar from '@/app/components/profile/EliteBar';
import LastSection from '@/app/components/profile/LastSection';
import MissionTasks from '@/app/components/profile/MissionTasks';
import ProfileCard from '@/app/components/profile/ProfileCard';
import Rewards from '@/app/components/profile/Rewards';
import Secondcard from '@/app/components/profile/SecondCard';

const Page = () => {
  return (
    <div className=" px-4 py-8">
      <div className="flex flex-wrap items-center">
        <div className='flex-1'>
          <ProfileCard />
        </div>
        <div >
          <Donut />
        </div>
        <div className='flex-1'>
          <Secondcard />
        </div>
      </div>
      <div className='py-3.5'><EliteBar /></div>
      <div className='flex flex-wrap gap-2'>
        <div className='flex-1/3'>
          <MissionTasks />
        </div>
        <div className='flex-1'>
          <Rewards />
        </div>
      </div>
      <div className='flex flex-wrap  gap-[11px] py-3.5'>
        <div className='flex-1/3'>
          <Achivements />
        </div>
        <div className='flex-1/2'>
          <LastSection />
        </div>
      </div>
    </div>
  );
};

export default Page;