import React from "react";
import Link from 'next/link'

const SubscriptionCard = () => {
  return (
    <div className="w-[300px] h-[470px] rounded-[18px] bg-white dark:bg-primary-dark flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[15px]">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="company logo"
          className="w-[120px] h-[37px] object-contain"
        />
        <div className="flex flex-col justify-center items-center p-[25px] gap-[35px] bg-white dark:bg-primary-dark box2 dark:box2d rounded-[10px]">
          <h1 className="font-medium text-[17px] w-[119px] text-[#464646] dark:text-white text-center leading-[23px]">
            Basic Plan 10 $ / 2 weeks
          </h1>
          <div className="flex flex-col items-start gap-[24px] w-[208px]">
            <div className="flex flex-row items-start w-full gap-[10px] stroke-[#464646] dark:stroke-white">
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
              <h1
                className="font-normal text-[10px] leading-[14px] flex items-center text-[rgba(70,70,70,0.8)] dark:text-[ rgba(255, 255, 255, 0.7)
]"
              >
                Ethereum, Polygon, Arbitrum and Optimism supported. The user can
                deposit.
              </h1>
            </div>
            <div className="flex flex-row items-start gap-[10px] w-full stroke-[#464646] dark:stroke-white">
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
              <h1
                className="font-normal text-[10px] leading-[14px] flex items-center text-[rgba(70,70,70,0.8)] dark:text-[ rgba(255, 255, 255, 0.7)
]"
              >
                Ethereum, Polygon, Arbitrum and Optimism supported. The user can
                deposit.
              </h1>
            </div>
            <div className="flex flex-row items-start gap-[10px] w-full stroke-[#464646] dark:stroke-white">
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
              <h1
                className="font-normal text-[10px] leading-[14px] flex items-center text-[rgba(70,70,70,0.8)] dark:text-[ rgba(255, 255, 255, 0.7)
]"
              >
                Ethereum, Polygon, Arbitrum and Optimism supported. The user can
                deposit.
              </h1>
            </div>
          </div>
          <Link href="/checkout/checkout1">
          <button className="flex justify-center items-center py-[18px] w-[210px]  bg-primary-green dark:bg-white rounded-[5px] text-[13px] font-semibold leading-[10px] text-white hover:bg-white hover:text-primary-green dark:hover:bg-primary-green dark:hover:text-white dark:text-primary-dark box2 dark:box2d">
            Subscribe
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
