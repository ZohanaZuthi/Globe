"use client"
import {Plane, BedDouble, Heart,Building,Plus} from 'lucide-react'
import {useState} from "react"
export default function Hero() {
    const [value,setValue]=useState("1 room,2 guests")
    const options = [
    "1 room, 2 guests",
    "1 room, 3 guests",
    "2 rooms, 4 guests",
    "2 rooms, 6 guests",
  ];
  return (
    <section className="relative pt-32 h-[50vh] sm:h-[70vh] lg:h-[85vh] w-full  border bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 "></div>
        <div className="absolute grid grid-cols-2 inset-0 z-10  text-xl sm:text-4xl md:text-6xl px-4 sm:px-24 items-center font-white ">
        <div ><span>Make your travel whishlist, well do the rest</span>
        <br/>
        <span className="text-xs sm:text-sm">Special offers to suit your plan</span></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[95%] sm:w-[90%] lg:w-[80%] bg-white rounded-2xl shadow-xl p-6 z-20 text-black">

        <h3 className="text-lg mb-4">Where are you flying?</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-gray-500">
           <div className="relative w-full">
            <label className="absolute -top-2 left-3 px-1 bg-white">Enter Destination</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 bg-white">
                <BedDouble className="w-2 sm:w-5 h-2 sm:h-5" />
                <input type="text" placeholder="Istanbul, Turkey" className="w-full outline-none text-sm text-gray-800"/>
                </div>
           </div>
           <div className="relative w-full">
            <label className="absolute -top-2 left-3 px-1 bg-white ">Check In</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 bg-white">
                
                <input type="date" placeholder="Fri 12/2" className="w-full outline-none text-sm text-gray-800"/>
                </div>
           </div>
           <div className="relative w-full">
            <label className="absolute -top-2 left-3 px-1 bg-white ">Check Out</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 bg-white">
                
                <input type="date" placeholder="Fri 12/2" className="w-full outline-none text-sm text-gray-800"/>
                </div>
           </div>
           <div className="relative w-full">
            <label className="absolute -top-2 left-3 px-1 bg-white ">Room & Guests</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 bg-white">
                <select value={value} onChange={(e)=>setValue(e.target.value)} 
                className="w-full bg-transparent text-sm text-gray-800 outline-none cursor-pointer">
                    {options.map((opt)=>(
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>

                </div>
           </div>
        </div>

        <div className="flex items-center justify-end mt-4 gap-1">
            <button className="flex items-center gap-2 bg-white  text-white px-6 py-2 rounded-md">
                <Plus color="#000000" />
            <span className='text-black'>Add Places</span>
            </button>
            <button className="flex items-center gap-2 bg-olive-700 text-white px-6 py-2 rounded-md">
                <Building color="#000000" />
            <span className='text-black'>Show Places</span>
            </button>
        </div>

</div>
    </section>
  );
}