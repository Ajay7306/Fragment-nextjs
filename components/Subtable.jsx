import React from "react";

const Subtable = () => {
  return (
    <div className="container mx-[30px] px-[30px] py-[30px] w-[1060px] h-[300px] bg-white dark:bg-primary-dark rounded-t-[20px] overflow-hidden">
      <h2 className="rounded-[20px] mb-4 text-[18px] w-full font-medium text-[#464646] flex items-center  leading-[20px]">
        {" "}
        Active Subscriptions
      </h2>
      <table className="w-full scrollable">
        <thead className="flex flex-row items-center border-b w-full border-[rgba(0,0,0,0.3)] dark:border-[#222228] ">
          <tr className="flex flex-row justify-between gap-[40px] items-center text-left">
            <th className="flex items-center font-normal mr-[55px] w-[ 183px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)] pr-3 dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)]">
              <h1 className="w-[px]">Name </h1>
            </th>
            <th className="flex items-center font-normal mr-[55px] w-[ 221px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)] pr-3 dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)]">
              <h1 className="w-[px]">Company</h1>
            </th>
            <th className="flex items-center font-normal mr-[55px] w-[ 175px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)] pr-3 dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)]">
              <h1 className="w-[px]">Pricing</h1>
            </th>
            <th className="flex items-center font-normal mr-[55px] w-[ 194px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)]  dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)]">
              <h1 className="w-[111px]">Token allowance</h1>
            </th>
            <th className="flex items-center font-normal mr-[55px] w-[ 130px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)]  dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)] relative left-[-30px]">
              <h1 className="w-[120px]">Next Payment due</h1>
            </th>
            <th className="flex items-center font-normal w-[152px] py-[8px] text-[14px] leading-[18px] text-[rgba(0,0,0,0.7)] dark:text-[rgba(225,225,255,0.7)] pr-3 dark:border-l  dark:border-gradient-to-t from-[rgba(225,252,252,0.25)] to-[rgba(118,118,118,0.27)] relative left-[-60px]">
              <h1 className="w-[70px]">Access</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="flex flex-row justify-between items-center bg-transparent border-b border-[#F4F4F4]">
            <td className="py-[8px] ">
              <div className="w-[90px]">
                <p className="font-normal leading-[18px] flex items-center w-[103px] text-[#464646] dark:text-white">
                  Basic plan
                </p>
              </div>
            </td>
            <td className=" w-[165px] py-[5px] pr-[32px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAk1BMVEUcGxfjHiQjIh4bGhaqISCvISCCIhyjIh+MIh3IICKJIh2VIh6bIh+9ISF1Ihu2ISF7IhzOICNxIhtqIhoAGxYTGxftHiV3HBw4HRjCICIKGxZNHRpGHhk+HhhmHRsAGBRfIBpTHhoqKSXYHyNZHBoAEQ0mHBcsFhN5Fhc3FhIwFRFDFBJcGBUXExA+FRNNFhP6HydDs5bWAAAED0lEQVRoge3biW6bQBAG4CVcC7tcDmsHkoBbTOI2cdv3f7pi6gP2x24q7dCq8kRKpKDs5/kDDPhgn+/+Rn1md7bNuq/zt+EPe/Qr2Hz1V/aVzfZd57L56+be3Jv7f7uqhNIWgTLhquftSqtKjdZ40Ov5xYS7WUK9DmG1vtdq8aAuLvdx9yGwtFpu6xncZ3+pu0U7g/uU6v1ayy+DhencCNxwEDSZ6wk9aKsZBK3WCxo3XGDQX88rd65WsSE3hqAteQ6azvX4taAn3GdDbtxA0G+npdU6pnLTBFznFDS6qSnXCyeCPv4dpbvAoN+Pa6sq1sqM+8jD0HMvB10SuU+dG4ZwJFk7++imZP2GaQYNVyVtv73rObBnJS2xK3hXE0EfhhKt612c/t3/VyvPZL8+9Bu0M7hTQX9TF9wng65XwOUO74Mu70ldLjHog+tpbmjUDeFcaX3fr19WxG4EQffTv1wQuVL0xS9cZnWuVmZdMRH0fiihy826fHr6k7tC4CHczuFi0MuqJXM/+fJQwoU9OqlZGZO7fCroMg61MpTzyZUcp/+qLmOuucJwv1LALalVTLimc5bSA9fa5fT9TgW9ncOVE9O/JnMHhXv0so25VgSuKMANKyLXGbhSwp6Vvc/g+hyH0iqcwZX4JIubirErCVwfL7OaFZ/BnQhahBTuRusXpr8VeWJUJO5U0OnY9c247oh1BJ4rZUjiOqOSMP2tYtyw/0jhOniZ1XhzuBJuSS2fS3rXx3v/LJXDoUXjOls8hENxZk31m2isu8U9y+Xm+01crcJ3DNoz7ZbgJqLGoPkgaIfMxevKhM/g5m8/8BA+n0jp3ImghTyfSulcvAdPhGk3SrQSufqGF/DpDC6rcSidgzbjrnU36twcX+ooTkG7dK79ikGHM7isxgt4/xi0+4nGlZ2b40sdgTDrFlOuvcOgxXFwELqshqfvrG4y95WQuisMWpp1I616136BnI9BG3IDjS16l9X4rJLrU/Z7cMuJ6S8NuhX06/cu2+FQMtkvur/6ZRPTP/L7gUXbr9pAv43cu5EhtxhXcHBZC0PJ6k4anbsx4maX3InpX/gzuOptOmhql7V4pzRHzqze4rnS706khtxAq5OrXnAo0bnZye2GEriJmxT0Lg6lzJ/BtXfQ73IOl9X4rFJiym2CbFxOPtiKQTsBUb8Dl7XQr2XKbbLL/XbTH9zIVM7XXPUdXyVN1vQuqzFoCrdpGisZuc6P/Vs5R3uWoZz7yrIgShxfeKtqNNbt12rlCekkRZDtL3z2j8HI/VEVddj95unhxVZlnudlOV7VLuu+2nb3+uXxfSVcI/0yle8xpT7yNl+l+gfxO/affv/zzb25N/fm/jPuhz9A9mefL7u2uXP/0ufpfgLdoM1f+LQ/XwAAAABJRU5ErkJggg=="
                  alt="image"
                  className="rounded-[15px] w-[40px] h-[40px]"
                />
                <p className="text-[16px] leading-[18px] w-[45px] font-normal text-[#464646]  dark:text-white">
                  Netflix
                </p>
              </div>
            </td>
            <td className="py-[8px] pr-[20px] ">
              <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                10 $/2 Weeks
              </p>
            </td>
            <td className=" py-[15px] pr-[80px] ">
              <div className="flex flex-row justify-start items-center gap-[20px]">
                <p className="font-normal text-[16px] leading-[18px] flex items-center text-[#464646] dark:text-white">
                  1200$
                </p>
                <img
                  src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
                  alt="image"
                  className="rounded-full w-[30px] h-[30px] bg-secondary-white dark:bg-secondary-dark"
                />
              </div>
            </td>
            <td className="py-[8px] pr-[16px] ">
              <div className="flex flex-row justify-start items-center gap-[20px] relative left-[-30px] ">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </button>
                <p className="font-normal leading-[18px] flex items-center text-[#464646] dark:text-white">
                  01/01/23
                </p>
              </div>
            </td>
            <td className="pr-3  ">
              <div className="flex flex-row justify-between items-end">
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-blue-500 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01331 8.18384C0.745884 7.69482 0.745888 7.10387 1.01333 6.61485C2.71275 3.50744 6.0161 1.39941 9.81271 1.39941C13.6094 1.39941 16.9128 3.50751 18.6122 6.615C18.8796 7.10401 18.8796 7.69496 18.6122 8.18398C16.9127 11.2914 13.6094 13.3994 9.81278 13.3994C6.01611 13.3994 2.71271 11.2913 1.01331 8.18384Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.81274 7.39941C6.81274 9.05627 8.15589 10.3994 9.81274 10.3994C11.4696 10.3994 12.8127 9.05627 12.8127 7.39941C12.8127 5.74256 11.4696 4.39941 9.81274 4.39941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-green-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1874 11.3994V15.3994C19.1874 18.1608 16.9488 20.3994 14.1874 20.3994H6.18738C3.42595 20.3994 1.18738 18.1608 1.18738 15.3994V7.39941C1.18738 4.63799 3.42595 2.39941 6.18738 2.39941H10.1874"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4831 5.2741L14.9339 1.81812C15.7144 1.03648 16.9802 1.036 17.7613 1.81705L19.4208 3.47654C20.1951 4.25092 20.2032 5.50457 19.4388 6.28884L12.0098 13.911C11.4454 14.4901 10.6713 14.8167 9.86292 14.8166L7.5907 14.8165C6.95376 14.8165 6.4451 14.2856 6.47189 13.6487V13.6487L6.52101 12.4809L6.57013 11.3131V11.3131C6.60172 10.5621 6.91386 9.85031 7.44478 9.31858L9.0512 7.70974"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.8654 6.00628L17.5515 7.69238"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex justify-center items-center py-[7px] px-[10px] gap-[10px] bg-secondary-white hover:bg-red-600 rounded-[7px] w-[35px] h-[35px] stroke-[#464646] dark:stroke-white hover:stroke-white dark:hover:stroke-[#464646] dark:bg-secondary-dark">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18738 10.8994V9.48169C3.18738 8.45462 2.85426 7.45525 2.23801 6.63359V6.63359C1.3931 5.50705 2.19692 3.89941 3.6051 3.89941H14.7697C16.1778 3.89941 16.9817 5.50705 16.1367 6.63359V6.63359C15.5205 7.45525 15.1874 8.45462 15.1874 9.48169V15.8994C15.1874 18.1086 13.3965 19.8994 11.1874 19.8994H7.18738C4.97824 19.8994 3.18738 18.1086 3.18738 15.8994V14.8994"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1874 14.8994L11.1874 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.18738 14.8994L7.18738 8.89941"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.8242 1.21498C11.5097 1.01357 11.1378 0.899414 10.7459 0.899414H7.62896C7.23707 0.899414 6.86521 1.01357 6.55066 1.21498"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subtable;
