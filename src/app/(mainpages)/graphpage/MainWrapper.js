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
      className=" overflow-x-auto    mx-auto 2xl:mx-28 "
    >
      <AreaWrapper />
      <DateTimeWrapper />
      <CompanyChartWrapper />
      <IssuersWrapper />
    </div>
  )
}

export default MainWrapper;
