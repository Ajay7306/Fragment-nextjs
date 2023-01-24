import Header from '@/components/Header'
import Withdrawinput from '@/components/Withdrawinput'
import MerSidebar from '@/sections/MerSidebar'
import React from 'react'

const withdrawal = () => {
  return (
    <div className="flex flex-row justify-start items-start overflow-hidden bg-secondary-white dark:bg-secondary-dark h-100vh w-full">
      <MerSidebar />
      <div className="flex flex-col justify-center items-start gap-[40px]">
        <Header title={"Withdraw"} />
        <Withdrawinput />
      </div>
    </div>
  )
}

export default withdrawal