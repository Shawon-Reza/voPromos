import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const bg = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60'

    return (
        <section
            id="home"
            className="relative w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-slate-900/70 backdrop-brightness-75"></div>

            <div className="relative  mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
                <div className="text-center mx-auto">
                    <h2 className="text-[#0E8BD5] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        Your Complete Procurement
                    </h2>
                    <h1 className="mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Partner From Source
                        <br />
                        to Storage
                    </h1>

                    <p className="mt-6 text-slate-200/85 text-base sm:text-lg md:text-base lg:text-lgmx-auto">
                        Helping businesses simplify global sourcing, purchasing, and logistics. VoPromos connects you with verified
                        suppliers, negotiates the best prices, and manages delivery so you focus on growth.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="#services"
                            className="inline-block bg-[#0E8BD5] hover:bg-sky-600 text-white font-semibold px-5 py-3 rounded-md shadow-md transition"
                        >
                            Initiate a Project
                        </a>

                        <p
                          
                            className="inline-block border border-slate-200/30 text-slate-100 hover:text-white px-5 py-3 rounded-md transition"
                            onClick={() => navigate('/schedule-consultation')}
                        >
                            Schedule A Consultation
                        </p>
                    </div>
                </div>
            </div>

            {/* stats row */}
            <div className="relative">
                <div className=" mx-auto px-6 md:px-8 lg:px-12 -mt-6 md:-mt-10">
                    <div className="bg-gradient-to-b from-slate-900/40 to-transparent backdrop-blur-sm rounded-md overflow-hidden shadow-lg">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 text-center text-slate-100 py-6">
                            <div className="px-6 border-r border-slate-800/40">
                                <div className="mb-2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm text-slate-300 mt-1">Vetted Suppliers</div>
                            </div>

                            <div className="px-6 border-r border-slate-800/40">
                                <div className="mb-2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm text-slate-300 mt-1">Industries Served</div>
                            </div>

                            <div className="px-6 border-r border-slate-800/40">
                                <div className="mb-2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 6h.01M7 14h.01M7 18h.01" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm text-slate-300 mt-1">Successful Shipments</div>
                            </div>

                            <div className="px-6">
                                <div className="mb-2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm text-slate-300 mt-1">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection