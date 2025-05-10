'use client';

import SingleDateCard from "./SingleDateCard";
const categories = [
  '2025-05-01T00:00:00.000Z',
  '2025-05-02T00:00:00.000Z',
  '2025-05-03T00:00:00.000Z',
  '2025-05-04T00:00:00.000Z',
  '2025-05-05T00:00:00.000Z',
  '2025-05-06T00:00:00.000Z',
  '2025-05-07T00:00:00.000Z',
];

const DateTimeWrapper = () => {
  return (
<>
<div className=" px-4 w-[100%] py-8 ">
    <p className="text-[20px] font-medium text-white px-auto">Upcoming Issuances</p>
    <div className="  flex  justify-start items-start  py-4 ">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[100%]">
       

      <SingleDateCard
  title="Inter factory"
  months="4 months"
  issuanceDate="Nov 15th"
  chartLabel="B2"
  chartLabelColor="#F70"
  securedBg="#00FF11"
  securedText="15% Secured"
  series={[{ name: "Revenue", data: [28, 34, 30, 40, 38, 45, 50] }]}
  categories={categories}
/>
<SingleDateCard
  title="General Finance"
  months="6 months"
  issuanceDate="Nov 15th"
  chartLabel="A1"
  securedText="13% unSecured"
  series={[{ name: "Revenue", data: [28, 34, 30, 40, 38, 45, 50] }]}
  categories={categories}
/>
        <SingleDateCard
  title="Motor Alliance"
  months="6 months"
  issuanceDate="Nov 15th"
  chartLabel="B3"
  securedText="13% Unsecured"
  series={[{ name: "Revenue", data: [28, 34, 30, 40, 38, 45, 50] }]}
  categories={categories}
/>
  </div>
    </div>
    </div>
    </>
  );
};

export default DateTimeWrapper;
