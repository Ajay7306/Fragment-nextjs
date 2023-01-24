import StatsCard1 from "@/components/StatsCard1";
import StatsCard2 from "@/components/StatsCard2";
import React from "react";

const Substats = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[1110px] px-[25px] ">
      <StatsCard1 title={"Current Balance"} price={1500} />
      <StatsCard2 title={"Active Subscribers"} num={1500} />
      <StatsCard1 title={"Lifetime Revenue Generated"} price={1500} />
    </div>
  );
};

export default Substats;
