import React from "react";

const Header = ({title}) => {
 
  return (
    <div className="flex flex-row justify-between items-center gap-auto w-[1110px] h-[38px] overflow-hidden px-[20px] py-[35px] relative z-0">
      <div>
        <h1 className="font-semibold text-[25px] leading-[38px] text-[#464646] dark:text-white">
        {title}
        </h1>
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <button className="flex items-center justify-center stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] p-[5px] gap-[10px] bg-white hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark w-[40px] h-[40px] rounded-[5px] box2 dark:box2d">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3479 1L11.3479 4"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3479 18L11.3479 21"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.3479 11L18.3479 11"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.3479 11L1.3479 11"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.4189 3.92897L16.2976 6.05029"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.39818 15.95L4.27686 18.0713"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.27687 3.92897L6.39819 6.05029"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.2976 15.95L18.4189 18.0713"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="flex stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] items-center justify-center p-[5px] gap-[10px] bg-white hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark w-[40px] h-[40px] rounded-[5px] box2 dark:box2d   ">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83001 1.99988C6.7897 1.36774 7.93889 0.999878 9.17399 0.999878C12.5357 0.999878 15.261 3.7251 15.261 7.08684V9.17938C15.261 10.2797 15.97 11.2421 16.5336 12.1871C16.8299 12.6839 17.0001 13.2646 17.0001 13.885C17.0001 15.4879 15.8549 16.8632 14.2672 17.0833C12.6905 17.3019 10.7203 17.5218 9.17399 17.5218C7.62764 17.5218 5.6575 17.3019 4.08081 17.0833C2.4931 16.8632 1.3479 15.4879 1.3479 13.885C1.3479 13.2646 1.5181 12.6839 1.81437 12.1871C2.37796 11.2421 3.08704 10.2797 3.08704 9.17936V7.08683C3.08704 6.25566 3.25363 5.46339 3.55525 4.74161"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M11.3479 19.8339C10.8805 20.5368 10.0814 21 9.17399 21C8.26661 21 7.46744 20.5368 7.00008 19.8339"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button  className=" flex flex-row justify-center items-center px-[15px] py-[10px] text-[#464646] hover:text-white dark:hover:text-[#464646] dark:text-white bg-white gap-[16px]  hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark rounded-[5px] box2 dark:box2d">
          <img src="data:image/jpeg;base64,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" alt="Dp" className="w-[24px] h-[24px] object-fill rounded-full" />
          <h1 className="text-[16px] font-semibold leading-[20px] ">Byewind</h1>
        </button>
      </div>
      

    </div>
  );
};

export default Header;
