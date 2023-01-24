import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-row justify-between items-center w-full p-12'>
    <Link href="merdashboard/merdashboard">
    <button className='flex flex-row justify-center items-center px-[15px] py-[10px] text-[#464646] hover:text-white dark:hover:text-[#464646] dark:text-white bg-white gap-[16px]  hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark rounded-[5px] box2 dark:box2d text-[16px] font-semibold leading-[20px]'>Merchant</button>
    </Link>
    <Link href="subdashboard/subdashboard">
    <button className='flex flex-row justify-center items-center px-[15px] py-[10px] text-[#464646] hover:text-white dark:hover:text-[#464646] dark:text-white bg-white gap-[16px]  hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark rounded-[5px] box2 dark:box2d text-[16px] font-semibold leading-[20px]'>Subscriber's dashboard</button>
    </Link>
    <Link href="checkout/checkout">
    <button className='flex flex-row justify-center items-center px-[15px] py-[10px] text-[#464646] hover:text-white dark:hover:text-[#464646] dark:text-white bg-white gap-[16px]  hover:bg-primary-dark dark:hover:bg-white dark:bg-primary-dark rounded-[5px] box2 dark:box2d text-[16px] font-semibold leading-[20px]'>Checkout</button>
    </Link>
    </div>
  )
}
