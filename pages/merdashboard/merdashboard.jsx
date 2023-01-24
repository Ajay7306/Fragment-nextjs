import Header from "@/components/Header";
import Mertable from "@/components/Mertable";
import MerSidebar from "@/sections/MerSidebar";
import MerStats from "@/sections/MerStats";
import React from "react";

const merdashboard = () => {
  return (
    <div className="flex flex-row justify-start items-start overflow-hidden bg-secondary-white dark:bg-secondary-dark h-100vh w-full">
      <MerSidebar />
      <div className="flex flex-col items-start gap-[40px]">
        <Header title={"Dashboard"} />
        <MerStats />

        <Mertable />
      </div>
    </div>
  );
};

export default merdashboard;
