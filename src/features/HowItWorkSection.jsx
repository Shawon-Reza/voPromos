import React from 'react'
import work1 from '../assets/icons/work1.png'
import work2 from '../assets/icons/work2.png'
import work3 from '../assets/icons/work3.png'
import work4 from '../assets/icons/work4.png'
import work5 from '../assets/icons/work5.png'
import work6 from '../assets/icons/work6.png'
import { Marquee } from '../components/ui/marquee'



const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We discuss your business needs, product specs, and goals.",
    img: work1, // Replace with actual path
    color: 'green-500',
  },
  {
    step: "02",
    title: "Supplier Research",
    description: "Our team identifies and vets 2–3 qualified suppliers for comparison.",
    img: work2,
    color: 'yellow-500',
  },
  {
    step: "03",
    title: "Quotation & Negotiation",
    description: "We secure the best pricing and terms, presenting full cost transparency.",
    img: work3,
    color: 'indigo-500',
  },
  {
    step: "04",
    title: "Approval & Contract",
    description: "You select the supplier, and we finalize the Purchase Order (PO).",
    img: work4,
    color: 'teal-500',
  },
  {
    step: "05",
    title: "Production & QC",
    description: "We oversee manufacturing and pre-shipment inspection.",
    img: work5,
    color: 'rose-500',
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    description: "We manage logistics, customs, and delivery to your chosen warehouse.",
    img: work6,
    color: 'sky-500',
  },
];


const colorMap = {
  'green-500': '#10b981',
  'yellow-500': '#f59e0b',
  'indigo-500': '#6366f1',
  'teal-500': '#14b8a6',
  'rose-500': '#fb7185',
  'sky-500': '#0ea5e9',
}

const HowItWorkSection = () => {
  return (
    <section className="">
      {/* Hero band */}
      <div className="relative overflow-hidden">
        <div className="bg-[url('https://images.unsplash.com/photo-1508385082359-f3b34f3a2e8a?auto=format&fit=crop&w=1400&q=60')] bg-center bg-no-repeat bg-cover opacity-40 h-40 sm:h-48"></div>
        <div className="-mt-32 sm:-mt-36">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <h2 className="mt-2 text-2xl sm:text-3xl xl:text-4xl font-extrabold text-[#004260]">Our 6-Step <br /> Procurement Process</h2>

              <p className="mt-3 text-md sm:text-lg md:text-xl text-slate-500 mx-auto">Our streamlined process makes supply chain management simple and transparent.</p>

              <div className="mt-4 flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps marquee */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8 bg-[#E6EDF2] py-6">
        <Marquee pauseOnHover repeat={3} className="py-2">
          {processSteps.map((s) => {
            const accent = colorMap[s.color] || '#0ea5e9'
            return (
              <div key={s.step} className="shrink-0 w-96 h-48 px-3">
                <div className="bg-white rounded-xl p-6 h-full shadow-sm flex items-center gap-6">

                  <div>
                    <div style={{ backgroundColor: accent }} className="w-14 h-1.5 rounded mb-3" />

                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-slate-700">{s.step}</span>
                      <h4 className="text-[#004260] font-semibold text-base">{s.title}</h4>
                    </div>

                    <p className="mt-2 text-sm text-[#848484]">{s.description}</p>

                  </div>
                  <img src={s.img} alt={`Step ${s.step} icon`} className="w-20 h-20 rounded-full object-cover" />
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}

export default HowItWorkSection