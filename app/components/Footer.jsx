import React from 'react'
import Image from "next/image"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
 <section className="relative  min-h-screen w-full bg-white">
  <div className="absolute  inset-x-0 bottom-0 h-3/4 bg-emerald-300  " >
  <div className='flex flex-wrap mt-12 sm:mt-20 md:mt-24 items-center justify-between translate-y-1/2  text-black p-2 sm:p-5'>
  <div className='flex flex-col items-center gap-3'>
     <Image src="/Logo1.png" alt="Logo" width={70} height={50} className="flex w-4 h-auto sm:w-12 sm:w-16 lg:w-20"></Image>
     <div className='flex gap-1'>
        <Facebook className="w-2 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
        <Twitter className="w-2 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
        <Youtube className="w-2 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
        <Instagram className="w-2 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
     </div>
  </div>
  <div className='text-[8px] sm:text-base'>
    <h1 className='font-bold'>Our Activities</h1>
    <h3>Northern Lights</h3>
    <h3>Cruising & sailing</h3>
    <h3>Multi-activities</h3>
    <h3>Kayaing</h3>
  </div>
  <div className='text-[8px] sm:text-base'>
    <h1 className='font-bold'>Travel Blogs</h1>
    <h3>Bali Travel Guide</h3>
    <h3>Sri Lanks Travel Guide</h3>
    <h3>Peru Travel Guide</h3>
    <h3>Bali Travel Guide</h3>
  </div>
  <div className='text-[8px] sm:text-base'>
    <h1 className='font-bold'>About Us</h1>
    <h3>Our Story</h3>
    <h3>Work with us</h3>
  </div>
  <div className='text-[8px] sm:text-base'>
    <h1 className='font-bold'>Contact Us</h1>
    <h3>Our Story</h3>
    <h3>Work with us</h3>
  </div>

  </div>
  
  </div>
  <div className="absolute z-10 inset-x-10 sm:inset-x-20 rounded-4xl  -translate-y-1/4 sm:-translate-y-1/2 bottom-1/2 md:bottom-3/5  bg-emerald-200 " >
  <div className='flex justify-between items-center'>
  <div className="justify-start items-center px-5 pt-5 z-20">
    <h2 className=" text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Subscribe <br /> Newsletter
     </h2>
     <div className=" mt-4 text-sm font-semibold text-gray-900">The Travel</div>

    <p className="mt-1 text-xs sm:text-sm text-gray-700 max-w-md">
    Get inspired! Receive travel discounts, tips and behind the scenes stories.
    </p>

    <div className="flex flex-col sm:flex-row mt-4 w-full max-w-md gap-1">
    <input
        type="email"
        placeholder="Your email address"
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none"
    />
    <button className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black">
        Subscribe
    </button>
    </div>
    
    </div>
    <div>
        <img src="/box.png" alt="floating" className="hidden sm:block sm:w-40"></img>
    </div>
    </div>
  
  </div>

  
</section>
  )
}
