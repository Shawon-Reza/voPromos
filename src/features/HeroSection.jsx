import SplitText from '../components/SplitText';
import TextReveal from '../components/ui/textreveal';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const bg = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60'

    const textToAnimate = "Helping businesses simplify global sourcing, purchasing, and logistics. VoPromos connects you with verified suppliers, negotiates the best prices, and manages delivery so you focus on growth."

    // Use a mount-driven key so the TextReveal component remounts
    // whenever this HeroSection mounts — ensuring the animation
    // plays each time the section renders.
    const [revealKey, setRevealKey] = useState(null);
    useEffect(() => {
        setRevealKey(Date.now());
    }, []);

    return (
        <section
            id="home"
            className="relative w-full bg-center bg-cover min-h-[calc(100vh-60px)] pb-5 sm:pb-0 flex flex-col justify-between"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-slate-900/70 backdrop-brightness-75"></div>

            <div className="relative mx-auto px-6 md:px-8 lg:px-12 flex-1 flex items-center pt-10 sm:pt-32 md:pt-30 xl:pt-32">
                <div className="text-center mx-auto max-w-4xl">
                    <h2 className="text-[#0E8BD5] text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                        Your Complete Procurement
                    </h2>

                    <SplitText
                        text="Partner From Source"
                        className="mt-4 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"

                    />
                    <SplitText
                        text="to Storage"
                        className="mt-4 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"

                    />

                    {/* <h1 className="mt-4 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Partner From Source
                        <br />
                        to Storage
                    </h1> */}

                    <div className="sm:mt-6 text-slate-200/85 text-base sm:text-lg md:text-lg mx-auto max-w-3xl">
                        {revealKey && (
                            <TextReveal key={revealKey} textToAnimate={textToAnimate} />
                        )}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="#services"
                            className="inline-block bg-[#0E8BD5] hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition text-sm sm:text-base"
                        >
                            Initiate a Project
                        </a>

                        <button
                            className="inline-block border border-slate-200/30 text-slate-100 hover:text-white px-6 py-3 rounded-md transition text-sm sm:text-base cursor-pointer"
                            onClick={() => navigate('/schedule-consultation')}
                        >
                            Schedule A Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* absolute left-1/2 transform -translate-x-1/2 bottom-8 w-[92%]  */}
            {/* stats row */}

            <div className="max-w-6xl mx-auto flex flex-col justify-end">
                <div className="bg-gradient-to-b from-slate-900/40 to-transparent backdrop-blur-sm rounded-md overflow-hidden shadow-lg">

                    <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide py-4 sm:py-6 sm:grid sm:grid-cols-4 sm:gap-0 sm:overflow-visible sm:px-0 text-center text-slate-100 hidden sm:flex">

                        <div className="flex-shrink-0 w-64 sm:w-auto sm:px-6 sm:border-r sm:border-slate-800/40 sm:last:border-0 text-center">
                            <div className="mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xl md:text-2xl font-bold">25+</div>
                            <div className="text-sm text-slate-300 mt-1">Vetted Suppliers</div>
                        </div>

                        <div className="flex-shrink-0 w-64 sm:w-auto sm:px-6 sm:border-r sm:border-slate-800/40 sm:last:border-0 text-center">
                            <div className="mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xl md:text-2xl font-bold">25+</div>
                            <div className="text-sm text-slate-300 mt-1">Industries Served</div>
                        </div>

                        <div className="flex-shrink-0 w-64 sm:w-auto sm:px-6 sm:border-r sm:border-slate-800/40 sm:last:border-0 text-center">
                            <div className="mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 6h.01M7 14h.01M7 18h.01" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xl md:text-2xl font-bold">25+</div>
                            <div className="text-sm text-slate-300 mt-1">Successful Shipments</div>
                        </div>

                        <div className="flex-shrink-0 w-64 sm:w-auto sm:px-6 text-center">
                            <div className="mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xl md:text-2xl font-bold">25+</div>
                            <div className="text-sm text-slate-300 mt-1">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection