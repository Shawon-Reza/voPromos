import React from 'react'
import owner from '../assets/icons/owner.png'
import meetoverlap from '../assets/icons/meetoverlap.png'
import { PinContainer } from '../components/ui/3d-pin'
import SplitText from '../components/SplitText'


const MeetTheOwnerSection = () => {


  return (
    <section className="py-16 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-800 text-white">
      <div className=" mx-auto px-6 md:px-8 lg:px-12">


        <div className="flex flex-col md:flex-row  justify-center gap-8 lg:gap-16 items-center ">
          {/* Left: profile card */}
          <div className="flex justify-center md:justify-start py-20">
        
            <PinContainer
              title="Alex Vo - LinkedIn"
              href="https://www.linkedin.com/in/vopromos"
            >
             <div className="relative w-80 rounded-2xl p-5 bg-white/5 border border-white/10 shadow-lg">
              {/* image frame */}
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-transparent to-white/2">
                <img src={owner} alt="Alex Vo" className="w-full h-80 object-cover rounded-lg" />
              </div>

              {/* name & role bar */}
              <div className="mt-4 bg-white/6 rounded-lg p-3 flex items-center gap-3">

                <div className="flex-1">
                  <div className="text-white font-semibold">Alex Vo</div>
                  <div className="text-slate-200 text-sm">Procurement Consultant | Owner</div>
                </div>
                <a
                  href="https://www.linkedin.com/in/vopromos"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-2  hover:scale-120 transform transition-all ease-in duration-500 px-3 py-1 rounded-full text-sm">

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 10.271h-3v-4.5c0-1.072-.021-2.448-1.49-2.448-1.491 0-1.72 1.164-1.72 2.37v4.578h-3v-9h2.884v1.232h.041c.402-.76 1.384-1.562 2.847-1.562 3.042 0 3.605 2.003 3.605 4.604v5.726z" />
                  </svg>
                </a>
              </div>
            </div>
            </PinContainer>

          </div>

          {/* Right: description */}
          <div className="prose prose-invert max-w-none text-slate-100">

              <SplitText
              text="Meet the Owner"
              className="text-start text-3xl md:text-4xl font-extrabold mb-8"
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
            {/* <h2 className="text-start text-3xl md:text-4xl font-extrabold mb-8">Meet the Owner</h2> */}

            <p className="text-base md:text-lg">Hi, I'm Alex Vo, founder of VoPromos LLC. I started this company because I've seen firsthand how frustrating and time-consuming sourcing and logistics can be for growing businesses. Finding the right supplier, getting fair pricing, and making sure products arrive on time shouldn't feel like a guessing game — and that's where I come in.</p>

            <p className="mt-4 text-base md:text-lg">With a background in business operations and supplier management, I built VoPromos to help companies simplify their purchasing and delivery process from start to finish. I take pride in building real relationships with clients and suppliers, making sure every project runs smoothly, transparently, and efficiently.</p>

            <p className="mt-4 text-base md:text-lg">At the end of the day, I'm passionate about helping businesses save time, lower costs, and have peace of mind knowing that someone they trust is handling their procurement and logistics.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheOwnerSection