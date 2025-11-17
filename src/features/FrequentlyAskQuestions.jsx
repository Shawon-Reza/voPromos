import React, { useState } from 'react'
import faqimg from '../assets/icons/faqimg.png'
import SplitText from '../components/SplitText'

const faqs = [
  {
    q: 'What Industries Do You Work With?',
    a: 'We work with retail, e-commerce, promotional products, manufacturing, food & beverage, and startups building private label brands. Our supplier network covers a broad set of industries so we can match the right partners to your needs.'
  },
  {
    q: 'Do You Only Work With Overseas Suppliers?',
    a: 'No. We work with verified suppliers globally and locally. We choose suppliers based on capability, price, and delivery performance—not solely location.'
  },
  {
    q: 'Can You Help With Shipping And Customs?',
    a: 'Yes. We coordinate all shipping logistics including freight, customs clearance, and delivery. We can work under FOB, CIF, or DDP depending on your preference and risk profile.'
  },
  {
    q: 'Do You Inspect The Products Before Shipping?',
    a: 'We arrange pre-shipment inspections and quality control checks to ensure products meet specifications before they leave the factory.'
  },
  {
    q: 'Can VoPromos Store My Products?',
    a: 'We can help arrange warehousing and distribution through our logistics partners. Tell us your volume and requirements and we will propose options.'
  },
  {
    q: 'What Makes VoPromos Different From A Sourcing Agent Or Broker?',
    a: 'We manage end-to-end procurement, supplier relationships, and logistics with transparency and milestone-driven payments. Our focus is on reducing risk and delivering measurable savings for our clients.'
  }
]

export default function FrequentlyAskQuestions() {
  // Open the first FAQ item by default so the answers are initially shown
  const [open, setOpen] = useState(0)

  return (
    <section className="">

      <div className="mx-auto space-y-7 md:grid grid-cols-12 gap-4 lg:gap-10 xl:gap-16 items-center">
        {/* Left image/hero */}
        <div className="h-full order-2 lg:order-1 flex items-center justify-center col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
          <img
            src={faqimg}
            alt="thinking person with question marks"
            className="w-full h-full rounded-2xl shadow-lg object-cover max-h-[500px] sm:max-h-[600px] md:max-h-[800px] max-w-[380px] sm:max-w-[480px] md:max-w-[600px]"
          />
        </div>

        {/* Right: FAQ accordion */}
        <div className="order-1 lg:order-2 col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <SplitText
            text="Frequently Asked Questions"
            className="text-3xl xl:text-4xl font-extrabold text-[#004260]"
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

          {/* <h2 className="text-3xl xl:text-4xl font-extrabold text-[#004260]">Frequently Asked Questions</h2> */}
          <p className="mt-3 text-[#45556C]">We understand that choosing the right sourcing and logistics partner is an important decision — here are answers to common questions.</p>

          <div className="mt-6 space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i
              const btnId = `faq-button-${i}`
              const panelId = `faq-panel-${i}`
              return (
                <div key={i} className="bg-[#F0F0F0] border-slate-100 rounded-lg shadow-sm">

                  <button
                    id={btnId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                  >
                    <div>
                      <div className="text-[#004260] font-bold xl:text-lg">{f.q}</div>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L10 5.414 5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`px-4 pb-4 transition-all duration-300 ${isOpen ? 'pt-0 max-h-96 overflow-hidden opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                  >
                    <div className="text-sm text-slate-600 mt-1">{f.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}