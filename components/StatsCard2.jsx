import React from "react";

const StatsCard2 = ({title,num}) => {
  return (
    <div className="statscard1 dark:statscard1d flex flex-col justify-center items-center p-[27px] gap-[15px] bg-white dark:bg-primary-dark rounded-[8px]">
      <div>
        <h1 className="font-semibold text-[18px] leading-[28px] text-center text-[#464646] dark:text-white">
          {title}
        </h1>
      </div>
      <div className="   items-center box1 dark:box1d">
        <div className="bg-primary-green dark:bg-white rounded-[8px] px-[80px] py-[20px]" >
          <h1 className="font-semibold text-[25px] leading-[28px] text-center text-white dark:text-[#1C1C1C]">
            {num}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StatsCard2;
