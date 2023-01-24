
import Subform2 from "@/components/Subform2";
import React from "react";

const checkout2 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-secondary-white dark:bg-secondary-dark gap-[40px]">
    <div className="flex flex-row justify-between items-center w-full bg-white dark:bg-primary-dark py-[20px] px-[40px] box2 dark:box2d">
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
      <button className="flex flex-row justify-center items-center px-[15px] py-[10px] text-[#464646] hover:text-white dark:hover:text-[#464646] dark:text-white bg-white gap-[16px]  hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark rounded-[5px] box2 dark:box2d text-[16px] font-semibold leading-[20px]">Connect Wallet</button>

    </div>
    <Subform2 />
  </div>
  );
};

export default checkout2;
