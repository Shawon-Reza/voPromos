import React from "react";
import { Marquee } from "../components/ui/marquee.jsx";
import { MdOutlineArrowOutward } from "react-icons/md";
import service1 from '../assets/icons/service1.png'
import service2 from '../assets/icons/service2.png'
import service3 from '../assets/icons/service3.png'
import service4 from '../assets/icons/service4.png'
import service5 from '../assets/icons/service5.png'
import service6 from '../assets/icons/service6.png'

const services = [
  {
    title: "Product Sourcing",
    description:
      "We identify, vet, and negotiate with trusted manufacturers to find the best price, quality, and turnaround time.",
    image:
      service1,
  },
  {
    title: "Supplier Management",
    description:
      "We handle communication, compliance, and quality assurance so you never chase updates again.",
    image:
      service2,
  },
  {
    title: "Price Negotiation & Contracting",
    description:
      "Using our global network and negotiation expertise, we secure competitive pricing and favorable supplier terms.",
    image:
      service3,
  },
  {
    title: "Shipping & Logistics",
    description:
      "From factory to your warehouse, we coordinate freight, customs clearance, and insurance under FOB, CIF, or DDP terms.",
    image:
      service4,
  },
  {
    title: "Warehousing & Storage",
    description:
      "Need short-term or long-term storage? Our U.S. warehouse partners handle storage, labeling, and fulfillment.",
    image:
      service5,
  },
  {
    title: "Consulting & Procurement Strategy",
    description:
      "We help you build or improve your supply chain operations – from vendor selection to cost optimization.",
    image:
     service6,
  },
];

// single row marquee — repeat children to create continuous scroll

const ServiceCard = ({ image, title, description }) => (
  <article className="w-72 md:w-80 shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-4 shadow-lg flex flex-col hover:scale-[1.03] transition-transform duration-700">
    <div className="mb-3">
      <div className="flex justify-between items-start">
        <h4 className="text-white text-lg font-semibold">{title}</h4>
        <div className="p-2 bg-white/24 rounded-full">
          <MdOutlineArrowOutward size={20} color="white" />
        </div>
      </div>
      <p className="mt-2 text-slate-200 text-sm">{description}</p>
    </div>

    {/* image always placed at the end of the card */}
    <figure className="mt-auto rounded-md overflow-hidden bg-slate-800">
      <img src={image} alt={title} className="w-full h-36 object-cover grayscale" />
    </figure>
  </article>
);

const ServiceSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl py-8 ">

      <div className="w-full  ">
        <div className="mb-6 px-4 md:px-6 lg:px-8">
          <h3 className="text-white text-sm font-medium">Services</h3>
          <p className="mt-2 text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            <span className="block">Procurement & Logistics Solutions</span>
            <span className="block text-sky-300">Tailored to Your Business</span>
          </p>
        </div>

        <div>
          <Marquee pauseOnHover repeat={3} className="[--duration:20s]">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* subtle edge gradients */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-white/8 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-white/8 to-transparent" /> */}
    </section>
  );
};

export default ServiceSection;
