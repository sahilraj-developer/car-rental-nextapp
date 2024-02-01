import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='grid frid-cols-1 md:grid-cols-2'>
            <h2 className='text-[40px] md:text-[60px] font-bold'>
                Premium Car Rental in Your Area</h2>
                <h2 className='text-[20px] text-grey'>Book the selected car effortlessly, pay for driving only,Book the car Now</h2>

                <button className='p-2 mt-5 bg-blue px-4 rounded-full hover:scale-105 transaction-all '>Explore Cars</button>
        </div>
        <div>
            {/* <Image src='' alt='hero' 
            width={400}
            height={500}
            className='w-full object-cover '
            /> */}

        </div>
    </div>
  )
}

export default Hero