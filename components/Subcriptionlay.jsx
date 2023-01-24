import React from 'react'
import SubscriptionCard from './SubscriptionCard'


const Subcriptionlay = () => {
  return (
    <div className='w-full flex flex-row  justify-between items-center px-[50px]'>
       <div className='flex flex-row justify-center items-center p-[10px] gap-[10px] bg-white dark:bg-primary-dark rounded-full stroke-[#464646] dark:stroke-white'>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.1666 26.2516C30.998 23.814 32.0833 20.7838 32.0833 17.5002C32.0833 9.44601 25.5541 2.91683 17.4999 2.91683C9.44577 2.91683 2.91658 9.44601 2.91659 17.5002C2.91659 25.5543 9.44577 32.0835 17.4999 32.0835C19.574 32.0835 21.5469 31.6505 23.3333 30.87"  stroke-width="2.1875" stroke-linecap="round"/>
<path d="M19.3958 12.8335L15.4425 16.5044C14.8211 17.0814 14.8211 18.0648 15.4425 18.6417L19.3958 22.3127" stroke-width="2.1875" stroke-linecap="round"/>
</svg>
        </div>
        <div className='flex flex-row items-center gap-[40px]'>
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
    </div>
    
       
        <div className='flex flex-row justify-center items-center p-[10px] gap-[10px] bg-white dark:bg-primary-dark rounded-full stroke-[#464646] dark:stroke-white'>
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.71011 31.5508C11.4369 33.5995 14.8266 34.8135 18.4998 34.8135C27.5096 34.8135 34.8134 27.5096 34.8134 18.4999C34.8134 9.49019 27.5096 2.18636 18.4998 2.18636C9.49011 2.18636 2.18628 9.49019 2.18628 18.4999C2.18628 20.82 2.67062 23.0271 3.54371 25.0253" stroke-width="2.44703" stroke-linecap="round"/>
<path d="M16.3789 23.7202L20.8012 19.6138C21.4963 18.9683 21.4963 17.8683 20.8012 17.2229L16.3789 13.1164"  stroke-width="2.44703" stroke-linecap="round"/>
</svg> 
        </div>

    </div>
   
  )
}

export default Subcriptionlay