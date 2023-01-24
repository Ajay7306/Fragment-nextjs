import React from "react";
import Link from 'next/link'

const Mer = () => {
  return (
    <div className="flex flex-col items-start gap-[2px] w-full mb-[45px] ">
      <Link href="/merdashboard/merdashboard" >
      <button className="flex flex-row w-full items-center gap-[12px] py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.03125 3.84375L9.625 3.375V3.375C11.0175 2.27565 12.9825 2.27565 14.375 3.375L19.9786 7.79888C20.9394 8.55744 21.5 9.71422 21.5 10.9384V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H16C15.4477 21.5 15 21.0523 15 20.5V18.5M5.46875 6.65625L4.875 7.125L4.02142 7.79888C3.06058 8.55744 2.5 9.71422 2.5 10.9384L2.5 17.5C2.5 19.7091 4.29086 21.5 6.5 21.5H8C8.55228 21.5 9 21.0523 9 20.5V17.5C9 16.3954 9.89543 15.5 11 15.5H12"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <h1 className="font-semibold text-[14px] leading-[21px]">Dashboard</h1>
      </button>
      </Link>
      <Link href="/merdashboard/withdrawal">
      <button className="flex flex-row items-center w-full gap-[12px] py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white fill-[#464646] hover:fill-white focus:fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
          />
        </svg>

        <h1 className="font-semibold text-[14px] leading-[21px]">Withdraw</h1>
      </button>
      
      </Link>
      <Link href="/merdashboard/topUpGas" >
      <button className="flex flex-row items-center w-full gap-[12px] py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6.60678C14.3065 5.63023 13.7914 4.5591 13.7524 3.17012C13.7502 3.0939 13.6671 3.04639 13.6016 3.0855C10.1363 5.15576 10.2004 10.3491 10.2418 11.2901C10.2449 11.3611 10.1778 11.4112 10.1135 11.3809C9.71316 11.1924 8.5661 10.4823 8.50273 8.51531C8.50028 8.43898 8.41792 8.38991 8.35223 8.42885C6.34579 9.61803 5 11.8144 5 14.25C5 17.9779 8.134 21 12 21C15.866 21 19 17.9779 19 14.25C19 12.1208 18.2087 10.6486 17.2405 9.37275"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <h1 className="font-semibold text-[14px] leading-[21px]">Top Up gas</h1>
      </button>
      </Link>
      <button className="flex flex-row items-center w-full gap-[12px] py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="3" transform="matrix(-1 0 0 1 11 11)" stroke-width="1.5" />
          <path
            d="M16.7522 4.32987C17.0676 4.35581 17.3835 4.33129 17.688 4.2595C18.0161 4.18215 18.3775 4.24076 18.5968 4.49671C19.398 5.4317 20.0295 6.51632 20.4437 7.70289C20.569 8.0617 20.3869 8.44185 20.0936 8.68352C19.4258 9.23375 19 10.0672 19 11C19 11.9328 19.4258 12.7662 20.0936 13.3165C20.3869 13.5581 20.569 13.9383 20.4437 14.2971C20.0296 15.4835 19.3981 16.5681 18.5971 17.503C18.3777 17.759 18.0163 17.8176 17.6882 17.7402C16.9704 17.5709 16.1892 17.6643 15.5001 18.0621C14.7502 18.4951 14.258 19.2029 14.0771 19.9848C14.0011 20.3136 13.7881 20.6122 13.4609 20.695C12.6736 20.8942 11.8492 21 11 21C10.1509 21 9.32652 20.8942 8.53931 20.695C8.21211 20.6122 7.99913 20.3137 7.92308 19.9848C7.86978 19.7544 7.78944 19.5304 7.68343 19.318M14.3562 2.75789C14.2306 2.52319 14.1369 2.27319 14.0772 2.01511C14.0011 1.68633 13.7882 1.38787 13.461 1.30508C12.6737 1.10585 11.8492 1 11 1C10.1509 1 9.32646 1.10584 8.53923 1.30504C8.21207 1.38783 7.99909 1.6863 7.92302 2.01508C7.74212 2.79691 7.24988 3.5046 6.50008 3.9375C5.81106 4.33531 5.02983 4.42873 4.3121 4.25948C3.98403 4.18212 3.62263 4.24072 3.4033 4.49667C2.60213 5.43167 1.97058 6.5163 1.55634 7.70287C1.43108 8.06169 1.61316 8.44184 1.90648 8.68351C2.57429 9.23374 3.00007 10.0671 3.00007 11C3.00007 11.9329 2.57429 12.7663 1.90648 13.3165C1.61316 13.5582 1.43108 13.9383 1.55634 14.2971C1.97053 15.4836 2.60199 16.5681 3.40304 17.503C3.62237 17.759 3.98382 17.8176 4.31192 17.7402C4.65134 17.6601 5.00497 17.6388 5.35634 17.6807"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <h1 className="font-semibold text-[14px] leading-[21px]">Settings</h1>
      </button>
    </div>
  );
};

export default Mer;
