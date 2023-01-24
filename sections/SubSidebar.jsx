import Sub from "@/components/Sub";
import React from "react";

const SubSidebar = () => {
  return (
    <div className="w-[250px] h-full bg-white dark:bg-primary-dark flex flex-col justify-center items-start py-[30px] px-[30px] gap-[40px]  relative z-10">
      <div className="flex flex-row justify-center items-center gap-[12px]">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS2SURBVHgBxVldUttIEO4evPusG6xzAuBta2tx5FxgjfcAZk9AOAH2CTAnwH7fJdoLhIlJpfKGc4I4J4jzCng63bJkRuMfacZO+KqEpJmR5qPV/0bYAnHciuRkEGNC/A0JDkY31y/sNY3m8R0BTBHgkyLSPKS1TqYQCIQAMNF4hniOgLE7x4QL72w02+SuIYQEDSYj/d8QPOFFWIgaVFd8WV+3pgphCxNm3/UhXokwE62zRK9WSdSFJ+Eck3syzY86mZQtVGULGvHfHZbq3QayLCW6JDLHvOkLd/KRzKHMyRo+xmveUf8V1eejuP0aSlArWwBomvwncoeJYEBghu91ojc9/kEnQlKORO7/iFsHNcDXgNhZ2grpAMroQAWwpQ94aWdOlPQM6CwjEgxRMwPYfSJOw9HNmxPYFYR0lU/mC3lnIz7uQyj4BSdHr9pX8Mx4yRxWCaigEulnYgPjy4h95eD27fU/8AwQsmwjJ3w5ZUM+tL1HwUvMQF3wKTUwjlrPIunGq/ZFRlYQ/cLu1J5fEBZVQISWPcni/wI/GWSKe4o7Fdea3y8IM9lz59nJ6O11FwIgEfFPPiAAt/q6T5DmHE9A6uaXKt8AnHArkQcCwckQfy08h0DsEbm2U88FoPIN7FkJClXC5CqI4YrPlk8pQQICoGVvokJ+kQsgUwn8y56UCAaB4H++m1/XHEF4vQdoYN+zAA4kncUsA7ux5iZuTlsVmVv8bA1NFecXofkvJ07iYhdfiUi1lAEV24tYHTQEgt1iyxmKjFLh0ZHonX2LOGsqUrBfXKUSCED6uRBOlzeF099TvfYHgdLOQL3GAaJeHHv8Bh4QoizFU0MgkoxWLIk4dbzhIKQfjOn5GPMezMbGjm2I+0ElUkaU9ZXTxHkWF1V9TkK+L3Eb3oQ31XM+EOJ7xgx1ST7torTicPEIaZ6xfcg2VH8Ef2ynEvMEXHx4VZWYSkC4B+r/NJVwkRaooOIsF6mvWcZE4VKB6W/TkxBsTdgGO/qvsCztCQePw22J5vDW4Y1gKS6NIQx3RVawU8LyyUE+v4V7YwawQ2DFRscCbqPERSNusyHOc2vJ+ji/DSqz0nYABxzOjcdIKlEw+yQucLcqAamUB/n1A5geBKKWBiWIUn+P1GfD7szfv2NILisVwy5y6uLoPMcp7/wEgJstPbHAUNg5dYbJrf73f7mobd4YzqTGAk+89wy3NqQY5lNRuvT0D2xUCQ4GF6HFZAhEFWTP4iiN7XbsKsIFt6RQvQnNZ32QVStS+RQCzz3RsX2/RJhbo2fOkOSzd6EFZRVYZOtQ4AJnruEuEb7VyYDtxXVHEfvEO+7KBJfu65D3n8HNQxB6q+xnKXDkgcEOADbEZT1w3yDUZeXY3NWnS269rqwF1xrdSHPXZ1nSaeso7ZZz3y0OMEh5Rlq3Ul2vJMuSXUc2nV4n4RxZz23RJFyBCVcPmqsH8ZMTOfJkJ/tZLJqnn2l3/SVvuc4WpqyzvTI3Wv1HGe5sus3CXUG6+g9QTc288uFM2psSdV/8mJ+9XBzFLZa06oRKXCTKxtsLiYhbVRyiozM+ifGwHu9zcRpxeLR1VHRZdHOMQF8IcLwHJtkmof8O5/ItfeuchroAAAAASUVORK5CYII="
          className="w-[30px] h-[30px]"
          alt="autopay"
        />
        <h1 className="font-bold text-[18px] leading-[27px] text-[#464646] dark:text-white">
          Autopay
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start  w-[200px] gap-[115px] px-3">
        <Sub />

        <div className="flex flex-col items-start gap-[2px] w-full h-[106px]">
          <button className="flex flex-row items-center gap-[12px] w-full py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white fill-[#464646] hover:fill-white focus:fill-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13.4597V20.9194C2 21.7579 2.96993 22.2241 3.6247 21.7002L6.45217 19.4383C6.8068 19.1546 7.24742 19 7.70156 19H17C19.7614 19 22 16.7614 22 14V8C22 5.23858 19.7614 3 17 3H7C4.23858 3 2 5.23858 2 8V9.61492"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <circle cx="7.04999" cy="11.0498" r="1.25" />
              <circle cx="12.05" cy="11.0498" r="1.25" />
              <circle cx="17.05" cy="11.0498" r="1.25" />
            </svg>

            <h1 className="font-semibold text-[14px] leading-[21px]">Help</h1>
          </button>
          <button className="flex flex-row items-center w-full gap-[12px] py-[14px] pr-[50px] pl-[15px] bg-transparent focus:bg-primary-green hover:bg-primary-green rounded-[8px] stroke-[#464646] hover:stroke-white focus:stroke-white  text-[#464646] hover:text-white focus:text-white fill-[#464646] hover:fill-white focus:fill-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99995 9L1.99995 7C1.99995 4.23858 4.23853 2 6.99995 2L17 2C19.7614 2 22 4.23858 22 7L22 17C22 19.7614 19.7614 22 17 22L6.99996 22C4.23853 22 1.99996 19.7614 1.99996 17L1.99996 15"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13 15L15.2929 12.7071C15.6834 12.3166 15.6834 11.6834 15.2929 11.2929L13 9"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path d="M15 12L8 12" stroke-width="1.5" stroke-linecap="round" />
            </svg>

            <h1 className="font-semibold text-[14px] leading-[21px]">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubSidebar;
