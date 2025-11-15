import React from 'react'
import about1 from '../assets/icons/about1.png'
import about2 from '../assets/icons/about2.png'
import overlapimg from '../assets/icons/overlapimg.png'
import Rectangle from '../assets/icons/Rectangle.png'
import { GiCheckMark } from 'react-icons/gi'

const AboutSection = () => {


    return (
        //  px-6 md:px-8 lg:px-12

        <section className=" bg-white text-slate-800 ">
            <div className=" mx-auto ">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 items-center">
                    {/* Overlaping img........ */}
                    <img
                        src={overlapimg}
                        alt="overlapping images"
                        className='absolute bottom-0 right-0 z-10'
                    />

                    {/* left image with badge */}
                    <div className="relative">
                        <img src={about1}
                            alt="team meeting"
                            className="w-full rounded-3xl object-cover shadow-lg max-h-[520px] 2xl:max-h-[450px] "
                        />


                        <div className="absolute -top-8 -right-6 md:-right-3 ">
                            <figure>
                                {/* <img src={Rectangle} alt="badge background" /> */}
                                <div
                                    className='text-white rounded-tr-xl rounded-bl-xl px-8 py-4 md:px-12 md:py-5 md:scale-120 rounded-2xl'
                                    style={{
                                        background: `url(${Rectangle}) no-repeat center/cover`
                                    }}
                                >
                                    <div className="text-2xl font-bold">5+</div>
                                    <div className="text-xs opacity-90">Years Experience</div>
                                </div>
                            </figure>

                        </div>
                    </div>

                    {/* right content */}
                    <div>
                        <p className="text-md text-[#092846] font-bold">About Us</p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#004260]">Who We are</h2>

                        <p className="mt-4 text-[#45556C] ">
                            VoPromos LLC is a procurement and consulting firm specializing in sourcing, purchasing, delivery, and
                            storage solutions. Founded with the goal of simplifying complex supply chains, we help businesses of all
                            sizes access reliable suppliers and streamline their operations.
                        </p>

                        <p className="mt-3 text-slate-600 leading-relaxed">
                            Our team brings experience in global sourcing, import/export, and logistics management – ensuring you get
                            quality products, fair pricing, and reliable delivery every time.
                        </p>

                        <div className="mt-6">
                            <h4 className="text-base font-semibold text-[#45556C]">Core Values:</h4>
                            <ul className="mt-3 space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-[#152035] to-[#004E7B] text-white">
                                      <GiCheckMark />
                                    </span>
                                    <div>
                                        <strong className="text-[#0E8BD5]">Transparency:</strong>
                                        <span className="text-slate-600"> Clear communication and cost breakdowns.</span>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                     <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-[#152035] to-[#004E7B] text-white">
                                      <GiCheckMark />
                                    </span>
                                    <div>
                                        <strong className="text-[#0E8BD5]">Efficiency:</strong>
                                        <span className="text-slate-600"> Time-saving systems and vetted processes.</span>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-[#152035] to-[#004E7B] text-white">
                                      <GiCheckMark />
                                    </span>
                                    <div>
                                        <strong className="text-[#0E8BD5]">Reliability:</strong>
                                        <span className="text-slate-600"> Long-term supplier relationships built on trust.</span>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                     <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-[#152035] to-[#004E7B] text-white">
                                      <GiCheckMark />
                                    </span>
                                    <div>
                                        <strong className="text-[#0E8BD5]">Integrity:</strong>
                                        <span className="text-slate-600"> We protect your interests at every step.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* mission & vision section */}
                <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-lg text-[#004260] font-bold">About Mission & Vision</p>
                        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#004260]">Building Trust and Efficiency One Connection at a Time.</h3>

                        <h4 className="mt-6 text-lg font-semibold text-[#004260]">Our Mission</h4>
                        <p className="mt-2 text-[#45556C]">To connect businesses with trusted suppliers and logistics partners, ensuring every product is sourced, produced, and delivered with precision and care.</p>

                        <h4 className="mt-4 text-lg font-semibold text-[#004260]">Our Vision</h4>
                        <p className="mt-2 text-[#45556C]">To be the trusted bridge between businesses and global suppliers, simplifying procurement and enabling growth.</p>
                    </div>

                    <div>
                        <img src={about2} alt="logistics" className="w-full rounded-3xl object-cover shadow-md max-h-[400px] " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection