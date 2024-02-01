import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className='flex items-center  justify-between p-3 px-5 shadow-sm border-b-[1px]'><Image src='' 
    alt='logo'
    width={150} 
    height={100}
     />
     <div className='hidden md:flex gap-5'>
         <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-2 cursor-pointer'>Home</h2>
         <h2  className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-2 cursor-pointer'>History</h2> 
         <h2  className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-2 cursor-pointer'>Contact US</h2> 
          </div>
          <UserButton/>
      </div>
  )
}

export default index