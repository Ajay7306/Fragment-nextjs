import React from "react";

const TopUp = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-[50px] ">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px] pb-[30px] px-[107px] bg-white dark:bg-primary-dark rounded-[20px]">
        <h1 className="text-center leading-[24px] text-[22px] font-medium text-[#464646] dark:text-white">
          Current Balance on Your Smart Contract
        </h1>
        <div className="flex flex-row justify-center p-[25px] gap-[13px] bg-transparent border-[10px] border-primary-green rounded-[10px]">
          <h1 className="font-semibold text-[29px] text-[#464646] dark:text-white">
            XXXX.XXXX ETH
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center p-[20px] gap-[21px] ">
          <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] stroke-[#464646] dark:stroke-white">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12.5996C3 11.4664 3 10.1489 3 8.84946C3 5.39768 5.79822 2.59961 9.25 2.59961L21.75 2.59961C25.2018 2.59961 28 5.39783 28 8.84961L28 21.3496C28 24.8014 25.2018 27.5996 21.75 27.5996L9.25 27.5996C5.79822 27.5996 3 24.8014 3 21.3496L3 17.5996"
                stroke-width="1.875"
                stroke-linecap="round"
              />
              <path
                d="M12.375 14.4746L14.875 16.9746L19.875 11.9746"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="font-normal text-[18px] leading-[ 19px] text-[#464646] dark:text-white">
              Gas looks good for the month
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] stroke-[#464646] dark:stroke-white">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.90008 12.0995C2.90008 11.0117 2.90008 9.74686 2.90008 8.49937C2.90008 5.18566 5.58638 2.49951 8.90008 2.49951L20.9001 2.49951C24.2138 2.49951 26.9001 5.1858 26.9001 8.49951L26.9001 20.4995C26.9001 23.8132 24.2138 26.4995 20.9001 26.4995L8.90009 26.4995C5.58638 26.4995 2.90009 23.8132 2.90009 20.4995L2.90009 16.8995"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M16.1253 21.3496L16.1253 13.8496"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6253 13.8496L16.1253 13.8496"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.1253 10.0996L16.1253 8.84961"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="font-normal text-[18px] leading-[ 19px] text-[#464646] dark:text-white">
              Top up X ETH now
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[20px] items-center box2 dark:box2d rounded-[15px]">
        <button className="flex flex-row justify-center items-center py-[20px] px-[35px] text-primary-green dark:text-white bg-white hover:text-white dark:hover:bg-white dark:hover:text-primary-dark hover:bg-primary-green dark:bg-primary-dark rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Cancel</h1>
        </button>
        <button className="flex flex-row justify-center items-center py-[20px] px-[40px] text-white dark:text-primary-dark hover:bg-white hover:text-primary-green dark:hover:bg-primary-dark dark:hover:text-white bg-primary-green dark:bg-white rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Top Up</h1>
        </button>
      </div>
    </div>
  );
};

export default TopUp;
