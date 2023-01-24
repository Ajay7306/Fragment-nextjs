import React from "react";

const StatsCard1 = ({ title, price }) => {
  return (
    <div className="statscard1 dark:statscard1d flex flex-col justify-center items-center p-[27px] gap-[15px] bg-white dark:bg-primary-dark rounded-[8px]">
      <div>
        <h1 className="font-semibold text-[18px] leading-[28px] text-center text-[#464646] dark:text-white">
          {title}
        </h1>
      </div>
      <div className=" flex flex-row justify-evenly items-center bg-primary-green dark:bg-white pl-[30px] gap-[60px] box1 dark:box1d  ">
        <div>
          <h1 className="font-semibold text-[25px] leading-[28px] text-center text-white dark:text-[#1C1C1C]">
          {price}
        </h1>
          </div>

        <div className="w-[65px] h-[65px] flex justify-center items-center bg-white dark:bg-primary-dark rounded-full ">
          <h1 className="font-semibold text-[28px] leading-[28px] text-center text-[#96D068] dark:text-white">
            $
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StatsCard1;
