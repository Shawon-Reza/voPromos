import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
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
  <article className="w-72 md:w-80 shrink-0 rounded-xl overflow-hidden bg-white/5 hover:bg-linear-to-b from-[#0E8BD5] to-[#5C5C5C] transform  border border-white/10 p-4 shadow-lg flex flex-col hover:scale-[1.03] transition-all duration-700">
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
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollState();
    const handleResize = () => {
      updateScrollState();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollByDirection = (dir = "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = Math.floor(el.clientWidth * 0.8);
    const left = dir === "left" ? -step : step;
    el.scrollBy({ left, behavior: "smooth" });
    // schedule update after scroll
    setTimeout(updateScrollState, 300);
  };

  const onScroll = () => updateScrollState();

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByDirection("right");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByDirection("left");
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-visible rounded-2xl py-8 ">

      <div className="w-full  ">
        <div className="mb-6 px-4 md:px-6 lg:px-8">
          <h3 className="text-white text-sm font-medium">Services</h3>
          <p className="mt-2 text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            <span className="block">Procurement & Logistics Solutions</span>
            <span className="block text-sky-300">Tailored to Your Business</span>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onScroll={onScroll}
              className="flex gap-4 px-4 md:px-6 lg:px-8 overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x py-4"
              aria-label="Services carousel"
            >
              {services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>

          {/* Left / Right controls moved to section root for global positioning */}
        </div>
      </div>

      {/* subtle edge gradients */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-white/8 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-white/8 to-transparent" /> */}
      {/* buttons positioned relative to the section root */}
      <button
        onClick={() => scrollByDirection("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className={`absolute -left-4 md:-left-6 top-[60%] -translate-y-1/2 z-30 p-3 cursor-pointer rounded-full bg-black/50 hover:bg-black/60 transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
      >
        <MdChevronLeft size={22} color="white" />
      </button>

      <button
        onClick={() => scrollByDirection("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className={`absolute -right-4 md:-right-6 top-[60%] -translate-y-1/2 z-30 p-3 cursor-pointer rounded-full bg-black/50 hover:bg-black/60 transition-opacity ${canScrollRight ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
      >
        <MdChevronRight size={22} color="white" />
      </button>
    </section>
  );
};

export default ServiceSection;
