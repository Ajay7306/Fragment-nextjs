import React from "react";
import Link from 'next/Link'

const Subform1 = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-[10px]">
      <div className="flex flex-col w-full justify-center items-end gap-[10px] px-[30px]">
        <div className="flex flex-row w-full justify-end items-end p-[12px] gap-[25px]">
          <button className="flex flex-row items-center py-[14px] px-[15px] gap-[9px] bg-white hover:text-white dark:hover:text-primary-dark text-[#464646] dark:text-white dark:bg-primary-dark rounded-[6px] hover:bg-primary-dark dark:hover:bg-white">
            <img
              src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
              alt="image"
              className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
            />
            <p className="font-normal text-[16px] leading-[18px] flex items-center ">
              Ethereum
            </p>
          </button>
          <button className="flex flex-row items-center py-[20px] px-[15px] gap-[9px] bg-white hover:text-white dark:hover:text-primary-dark text-[#464646] dark:text-white dark:bg-primary-dark rounded-[6px] hover:bg-primary-dark dark:hover:bg-white">
            <p className="font-normal text-[16px] leading-[18px] flex items-center ">
              0 Flow ETH
            </p>
          </button>
        </div>
        <div className="flex flex-col w-full justify-center items-center py-[30px] px-[19px] gap-[20px] bg-white dark:bg-primary-dark rounded-[18px]">
          <div className="w-full flex flex-row justify-between items-start ">
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <h1 className="font-medium text-[20px] leading-[29px] text-[#464646] dark:text-white ">
                Basic Plan 10 $ / 2 weeks
              </h1>
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-60px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </div>
            <button className="flex flex-row relative left-[20px]  items-end p-[10px] gap-[13px] bg-primary-green rounded-l-[8px] hover:bg-white text-white hover:text-primary-green stroke-white hover:stroke-primary-green fill-white hover:fill-primary-green box2 dark:box2d  ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1691 7.23389C19.5811 7.40896 20.0168 7.56199 20.3854 7.76674C20.7338 7.96031 21.0224 8.2001 21.1744 8.54844C21.2209 8.65511 21.2656 8.76279 21.3083 8.87143C21.7353 9.95654 20.5296 11.2283 20.5296 12.3944C20.5296 13.5605 21.7353 14.8322 21.3083 15.9173C21.2657 16.0257 21.2212 16.1331 21.1748 16.2395C20.7087 17.308 18.9575 17.3552 18.1332 18.1796C17.3088 19.0039 17.2617 20.7551 16.1931 21.2213C16.0866 21.2677 15.9792 21.3123 15.8707 21.355C14.7856 21.7819 13.5138 20.5762 12.3478 20.5762C11.1817 20.5762 9.90992 21.7819 8.82481 21.355C8.71634 21.3123 8.60883 21.2677 8.50233 21.2212C7.94327 20.9774 7.66379 20.3817 7.4063 19.7511M17.1814 4.78089C16.9498 4.25025 16.6756 3.77797 16.1932 3.56754C16.0867 3.52107 15.9792 3.47648 15.8707 3.43379C14.7856 3.00683 13.5138 4.21255 12.3477 4.21255C11.1817 4.21255 9.90989 3.00684 8.82478 3.4338C8.71632 3.47648 8.60881 3.52107 8.50231 3.56753C7.43389 4.03364 7.38657 5.78449 6.56232 6.60874C5.73805 7.43301 3.98715 7.48028 3.521 8.54871C3.4745 8.65529 3.42987 8.76287 3.38716 8.87142C2.9602 9.95653 4.16592 11.2283 4.16592 12.3944C4.16592 13.5605 2.9602 14.8322 3.38716 15.9173C3.42984 16.0258 3.47442 16.1333 3.52088 16.2398C3.78244 16.8393 4.44859 17.1174 5.12855 17.3915"
                  stroke-width="1.44385"
                  stroke-linecap="round"
                />
                <circle
                  cx="10.2288"
                  cy="10.2753"
                  r="0.761909"
                  transform="rotate(45 10.2288 10.2753)"
                />
                <circle
                  cx="14.467"
                  cy="14.513"
                  r="0.761909"
                  transform="rotate(45 14.467 14.513)"
                />
                <path
                  d="M10.1929 14.5488L14.5029 10.2388"
                  stroke-width="1.44385"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="w-[68px] font-medium text-[13px] leading-[15px] text-center ">
                Spending Allowance
              </h1>
            </button>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <button className="flex flex-col w-[300px] justify-start items-start py-[18px] px-[22px] gap-[5px] isolate bg-white dark:bg-primary-dark rounded-[10px] border border-[rgbba(0,0,0,0.1)]">
              <p className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)] ">
                Currently allowing infinite
              </p>

              <button className="bg-transparent justify-start flex flex-row items-start w-full text-[20px] leading-[23px] font-normal text-[464646] dark:text-white">
                USOC
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </button>
            </button>
            <div class=" flex flex-col  w-[300px] items-start py-[18px] px-[23px] gap-[5px] bg-white dark:bg-primary-dark border border-[rgba(0,0,0,0.1)] rounded-[8px] ">
              <label
                for="name-with-label"
                className="font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)]"
              >
                Enter Email
              </label>
              <input
                type="text"
                id="name-with-label"
                className="w-full text-[20px] leading-[22px] text-[#464646] dark:text-white font-normal focus:border-transparent "
                name="email"
                placeholder="test@gamil.com"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center p-[10px] gap-[10px] stroke-[#464646] dark:stroke-white">
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
              Will use this to notify you
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[20px] items-center box2 dark:box2d rounded-[15px]">
        <button className="flex flex-row justify-center items-center py-[16px] px-[35px] text-primary-green dark:text-white bg-white hover:text-white dark:hover:bg-white dark:hover:text-primary-dark hover:bg-primary-green dark:bg-primary-dark rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Cancel</h1>
        </button>
        <Link href="/checkout/checkout2" >
        <button className="flex flex-row justify-center items-center py-[16px] px-[20px] text-white dark:text-primary-dark hover:bg-white hover:text-primary-green dark:hover:bg-primary-dark dark:hover:text-white bg-primary-green dark:bg-white rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">
            Subscribe
          </h1>
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Subform1;
