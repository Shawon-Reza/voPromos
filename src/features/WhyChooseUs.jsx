import React from 'react'
import choose1 from '../assets/icons/choose1.png'
import choose2 from '../assets/icons/choose2.png'
import dotsbg from '../assets/icons/dotsbg.png'
import { GiCheckMark } from 'react-icons/gi'

const WhyChooseUs = () => {

  return (
    <section
      className="py-12 md:py-16 bg-white"
      style={{
        background: `url(${dotsbg})`
      }}
    >
      <div className="flex flex-col gap-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left top card */}
          <div className="relative">
            <figure className="flex justify-center items-center">
              <img
                src={choose1}
                alt="Why Choose Us"
                className="max-h-[300px] md:max-h-[400px] xl:max-h-[350px] 2xl:max-h-[420px]"
              />
            </figure>
          </div>

          {/* Right column - heading and bullets */}
          <div>
            <p className="text-md xl:text-lg 2xl:text-xl  font-semibold text-[#004260]">Why choose us</p>
            <h2 className="mt-2 text-[#004260] text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">Why Choose VoPromos</h2>

            <ul className="mt-6 space-y-4 xl:text-xl 2xl:text-2xl ">
              <li className="flex gap-3 items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-slate-800">End-To-End Services:</strong>
                  <span className="text-slate-600"> From product sourcing to warehouse delivery.</span>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-slate-800">Global Network:</strong>
                  <span className="text-slate-600"> Verified manufacturers across Asia, North America, and Europe.</span>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-slate-800">Cost Optimization:</strong>
                  <span className="text-slate-600"> Save 10-30% on procurement expenses.</span>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <div>
                  <strong className="text-slate-800">Risk-Free:</strong>
                  <span className="text-slate-600"> Transparent Contracts, Verified Suppliers, And Milestone Payments.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom area: industries list + efficiency card */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        
          <div className='flex  justify-center'>
           
            
            <ul className="mt-4 space-y-3 xl:text-xl 2xl:text-2xl">

               <h4 className="text-slate-900 text-lg xl:text-xl 2xl:text-2xl font-semibold">Industries We Serve</h4>

              <li className="flex gap-3 items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#004260] font-semibold  xl:text-xl 2xl:text-2xl">Retail & E-Commerce</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#004260] font-semibold  xl:text-xl 2xl:text-2xl">Promotional Products & Marketing</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark />
                </span>
                <span className="text-[#004260] font-semibold  xl:text-xl 2xl:text-2xl">Manufacturing & Packaging</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark />
                </span>
                <span className="text-[#004260] font-semibold  xl:text-xl 2xl:text-2xl">Food & Beverage Supply</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#152035] to-[#004E7B] text-white">
                  <GiCheckMark />
                </span>
                <span className="text-[#004260] font-semibold  xl:text-xl 2xl:text-2xl">Startups & Private Label Brands</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <figure>
              <img
                src={choose2}
                alt="Why Choose Us"
                className='max-h-[300px] md:max-h-[400px] xl:max-h-[350px] 2xl:max-h-[420px]'
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs