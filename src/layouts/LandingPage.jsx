import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import AboutSection from "../features/AboutSection"
import FrequentlyAskQuestions from "../features/FrequentlyAskQuestions"
import HeroSection from "../features/HeroSection"
import HowItWorkSection from "../features/HowItWorkSection"
import MeetTheOwnerSection from "../features/MeetTheOwnerSection"
import RequestQuote from "../features/RequestQuote"
import ServiceSection from "../features/ServiceSection"
import WhyChooseUs from "../features/WhyChooseUs"
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}


const LandingPage = () => {
  const location = useLocation()

  useEffect(() => {
    // if navigated here with state.scrollTo, scroll to the target after mount
    const id = location?.state?.scrollTo
    if (!id) return
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      const header = document.querySelector('header')
      const offset = header ? header.offsetHeight : 80
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
      // clear the navigation state so repeated mounts don't re-scroll
      try { window.history.replaceState({}, document.title, window.location.pathname) } catch (e) { }
    }, 120)
    return () => clearTimeout(timer)
  }, [location])
  return (
    <div>
      {/* Navbar section....F */}
      <section className="bg-[#152136] fixed w-full top-0 left-0 z-50">
        <Navbar></Navbar>
      </section>

      {/* Here Section .......... */}
      <motion.section id="home" className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <HeroSection />
      </motion.section>

      {/* About us section..... */}
      <motion.section id="about" className="py-12 md:py-20 px-6 md:px-8 lg:px-12" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <AboutSection />
      </motion.section>

      {/* Service Section */}
      <motion.section id="services" className="bg-linear-to-tr from-[#0f2940] to-[#063f5f] py-6 md:py-12 px-6 md:px-8 lg:px-12" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <ServiceSection />
      </motion.section>

      {/* Why choose us Section */}
      <motion.section id="why" className=" px-6 md:px-8 lg:px-12" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <WhyChooseUs />
      </motion.section>

      {/* Meet The owner */}
      <motion.section className="py-8 -mt-7" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <MeetTheOwnerSection />
      </motion.section>

      {/* Why its work */}
      <motion.section id="how" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <HowItWorkSection />
      </motion.section>

      {/* Request a quote */}
      <motion.section className="py-10 -my-15" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <RequestQuote />
      </motion.section>

      {/* Freequently asked questions */}
      <motion.section className="py-12 md:py-20 px-6 md:px-8 lg:px-12 bg-[#F9F9F9]" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <FrequentlyAskQuestions />
      </motion.section>


      {/* Footer............ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={fadeInUp}>
        <Footer />
      </motion.section>




    </div>
  )
}

export default LandingPage