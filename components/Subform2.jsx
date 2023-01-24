import React from 'react'
import { useRouter } from 'next/navigation'

const Subform2 = () => {
  const router = useRouter();
  const shoot = () => {
    alert("Your Subcribtion is Successfully completed");
    router.push('/subdashboard/subdashboard')
    
  }
  return (
    <div className='flex flex-col w-full items-center gap-[100px] pt-[40px]'>
        <div className='flex flex-col items-start py-[30px] px-[25px] gap-[44px] bg-white dark:bg-primary-dark rounded-[15px]'>
            <h1 className='flex flex-row justify-center items-center  gap-[10px] font-medium text-[18px] leading-[23px] text-[#464646] hover:text-primary-dark'>By Subscribing you,</h1>
            <div className="flex flex-row justify-start items-center  gap-[10px] stroke-[#464646] dark:stroke-white">
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
            Allow AutoPay to charge you immediately
            </h1>
          </div>
          <div className="flex flex-row justify-start items-center  gap-[10px] stroke-[#464646] dark:stroke-white">
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
            <h1 className="font-normal text-[18px] leading-[ 19px] text-[#464646] dark:text-white text-center">
            Approve Autopay to take 10USOC $ /  2Weeks from your wallet, in perpetuity
Or
until 1500 USDC $
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[20px] items-center box2 dark:box2d rounded-[15px]">
        <button className="flex flex-row justify-center items-center py-[16px] px-[35px] text-primary-green dark:text-white bg-white hover:text-white dark:hover:bg-white dark:hover:text-primary-dark hover:bg-primary-green dark:bg-primary-dark rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">Cancel</h1>
        </button>
        
        <button onClick={shoot} className="flex flex-row justify-center items-center py-[16px] px-[20px] text-white dark:text-primary-dark hover:bg-white hover:text-primary-green dark:hover:bg-primary-dark dark:hover:text-white bg-primary-green dark:bg-white rounded-[12px]">
          <h1 className="font-semibold text-[18px] leading-[20px] ">
            Subscribe
          </h1>
        </button>
       
      </div>

    </div>
  )
}

export default Subform2