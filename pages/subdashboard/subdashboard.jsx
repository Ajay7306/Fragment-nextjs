import Header from '@/components/Header';
import Subtable from '@/components/Subtable';
import SubSidebar from '@/sections/SubSidebar';
import Substats from '@/sections/Substats';
import React from 'react'



const Subdashboard = () => {
  return (
    <div className="flex flex-row justify-start items-start overflow-hidden bg-secondary-white dark:bg-secondary-dark h-100vh w-full">
    <SubSidebar />
     <div className="flex flex-col items-start gap-[40px]">
     <Header title={"Dashboard"} />
     <Substats/>
     <Subtable />
     </div>
     </div>
  )
};

export default Subdashboard;