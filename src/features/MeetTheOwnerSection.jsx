import React from 'react'

const MeetTheOwnerSection = () => {
  const img = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=60'

  return (
    <section className="py-16 bg-gradient-to-b from-sky-800 via-sky-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8">Meet the Owner</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: profile card */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 md:w-80 rounded-2xl p-5 bg-white/5 border border-white/10 shadow-lg">
              {/* image frame */}
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-transparent to-white/2">
                <img src={img} alt="Alex Vo" className="w-full h-80 object-cover rounded-lg" />
              </div>

              {/* name & role bar */}
              <div className="mt-4 bg-white/6 rounded-lg p-3 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">AV</div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold">Alex Vo</div>
                  <div className="text-slate-200 text-sm">Procurement Consultant | Owner</div>
                </div>
                <a href="#" aria-label="LinkedIn profile" className="ml-2 inline-flex items-center gap-2 bg-white/6 hover:bg-white/12 px-3 py-1 rounded-full text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 10.271h-3v-4.5c0-1.072-.021-2.448-1.49-2.448-1.491 0-1.72 1.164-1.72 2.37v4.578h-3v-9h2.884v1.232h.041c.402-.76 1.384-1.562 2.847-1.562 3.042 0 3.605 2.003 3.605 4.604v5.726z" />
                  </svg>
                </a>
              </div>

              {/* small LinkedIn badge overlay bottom-left */}
              <div className="absolute -left-4 bottom-4">
                <div className="w-14 h-14 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: description */}
          <div className="prose prose-invert max-w-none text-slate-100">
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