import React from 'react'
import {Plane, BedDouble, Heart} from 'lucide-react'
import Image from "next/image"


export default function Navbar() {
  return (
    <div className='fixed  bg-white w-full z-50'>
        <div className='flex flex-row px-4 py-4 mx-auto max-w-7xl justify-start items-center gap-6'>
           <div className="flex items-center gap-1 sm:gap-6">
          <button className="flex items-center gap-0 sm:gap-2 text-gray-700 hover:text-green-600 transition">
            <Plane className="w-3 sm:w-5 h-3 sm:h-5" />
            <span className="text-[10px] sm:text-base">Find Flights</span>
          </button>
          <button className="flex items-center gap-0 sm:gap-2 text-gray-700 hover:text-green-600 transition">
            <BedDouble className="w-2 sm:w-5 h-2 sm:h-5" />
            <span className="text-[10px] sm:text-base font-medium">Find stays</span>
          </button>
        </div>
        <Image src="/Logo.png" alt="Logo" width={70} height={50} className="absolute left-1/2 -translate-x-1/2 w-10 h-auto sm:w-12 sm:w-16 lg:w-20"></Image>
        <div className='absolute right-0 sm:right-4  flex flex-row '>
       <button className='flex gap-0 sm:gap-2 items-center text-gray-700 mr-1 sm:mr-4'>
       <Heart className=" w-2 sm:w-5 h-2 sm:h-5 text-black" />
        <span className="text-[10px] sm:text-base font-medium">Favorites</span>       </button>
       <div className='flex gap-0 sm:gap-2 items-center text-gray-700 mr-4'>
        <Image src="/Pro.png" alt="profile" width={32} height={32} className='rounded-full w-4 h-auto sm:w-8 sm:w-10 lg:w-12'></Image>
        <span className="text-[10px] sm:text-base font-medium">John D.</span>

       </div>
        </div>
        </div>
        

    </div>
  )
}
