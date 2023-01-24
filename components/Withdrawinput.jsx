import React from "react";


const Withdrawinput = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-[76px] px-[20px]">
      <div className="flex flex-col items-start gap-[39px]">
        <div className="flex flex-col items-start gap-[67px]">
          <div className="flex flex-row justify-between w-full items-center ">
            <div className="flex flex-col justify-start w-[300px] items-start py-[18px] px-[22px] gap-[5px] isolate bg-white dark:bg-primary-dark rounded-[10px] border border-[rgbba(0,0,0,0.1)]">
              <p className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)] ">
                Select Chain
              </p>
              
              
                  <button className="bg-transparent justify-start items-center flex w-full text-[20px] leading-[23px] font-normal text-[464646] dark:text-white">
                    Chain
                  </button>
                
            </div>
            <div className="flex flex-col w-[300px] justify-start items-start py-[18px] px-[22px] gap-[5px] isolate bg-white dark:bg-primary-dark rounded-[10px] border border-[rgbba(0,0,0,0.1)]">
              <p className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)] ">
                Select Token
              </p>
  
                  <button className="bg-transparent justify-start flex items-start w-full text-[20px] leading-[23px] font-normal text-[464646] dark:text-white">
                    USOC
                  </button>
                
            </div>
          </div>
          <div className="flex flex-row items-center gap-[122px]">
            <div className="flex flex-col w-[300px] items-start py-[18px] px-[23px] gap-[5px] bg-white dark:bg-primary-dark border border-[rgba(0,0,0,0.1)] rounded-[8px]">
              <div class=" relative ">
                <label
                  for="name-with-label"
                  className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)]"
                >
                  Enter Note
                </label>
                <input
                  type="text"
                  id="name-with-label"
                  className="w-full text-[20px] leading-[22px] text-[#464646] dark:text-white font-normal focus:border-transparent "
                  name="email"
                  placeholder="First Withdrawal"
                />
              </div>
            </div>
            <div className="flex flex-col w-[300px] items-start py-[18px] px-[23px] gap-[5px] bg-white dark:bg-primary-dark border border-[rgba(0,0,0,0.1)] rounded-[8px]">
              <div class=" relative ">
                <label
                  for="name-with-label"
                  className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)]"
                >
                  Enter Amount
                </label>
                <input
                  type="text"
                  id="name-with-label"
                  className="w-full text-[20px] leading-[22px] text-[#464646] dark:text-white font-normal focus:border-transparent "
                  name="email"
                  placeholder="200$"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-start py-[16px] px-[20px]  rounded-[8px]">
          <h1
            className="font-semibold text-[18px] leading-[18px] text-[rgba(70,70,70,0.9)] dark:text-[ rgba(255, 255, 255, 0.9)]
"
          >
            Current Amount
          </h1>
          <h1
            className="font-semibold text-[24px] leading-[26px] text-[#464646] dark:text-white
"
          >
            200$
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[20px] items-center box2 dark:box2d rounded-[15px]">
        <button className="flex flex-row justify-center items-center py-[20px] px-[35px] text-primary-green dark:text-white bg-white hover:text-white dark:hover:bg-white dark:hover:text-primary-dark hover:bg-primary-green dark:bg-primary-dark rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Cancel</h1>
        </button>
        <button className="flex flex-row justify-center items-center py-[20px] px-[20px] text-white dark:text-primary-dark hover:bg-white hover:text-primary-green dark:hover:bg-primary-dark dark:hover:text-white bg-primary-green dark:bg-white rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Withdraw</h1>
        </button>

      </div>
    </div>
  );
};

export default Withdrawinput;
