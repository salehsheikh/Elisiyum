import React from 'react'
import AreaWrapper from "@/app/components/areacharts/AreaWrapper";
import DateTimeWrapper from '@/app/components/areacharts/DateTimeWrapper';
import CompanyChartWrapper from '@/app/components/CompanyChartWrapper';
import IssuersWrapper from '@/app/components/IssuersWrapper';
import darkBlueBg from "../../../../public/assets/images/bgBlue.png";
const MainWrapper = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${darkBlueBg.src})` }}
      className= "w-full max-w-full overflow-x-hidden "
    >
      <AreaWrapper />
      <DateTimeWrapper />
      <CompanyChartWrapper />
      <IssuersWrapper />
    </div>
  )
}

export default MainWrapper;
