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


const LandingPage = () => {
  return (
    <div>
      {/* Navbar section....F */}
      <section className="bg-[#152136] fixed w-full top-0 left-0 z-50">
        <Navbar></Navbar>
      </section>

      {/* Here Section .......... */}
      <section id="home" className="mt-16">
        <HeroSection></HeroSection>
      </section>

      {/* About us section..... */}
      <section id="about" className="py-12 md:py-20 px-6 md:px-8 lg:px-12">
        <AboutSection></AboutSection>
      </section>

      {/* Service Section */}
      <section id="services" className="bg-linear-to-tr from-[#0f2940] to-[#063f5f] py-6 md:py-12 px-6 md:px-8 lg:px-12">
        <ServiceSection></ServiceSection>
      </section>

      {/* Why choose us Section */}
      <section id="why" className=" px-6 md:px-8 lg:px-12">
        <WhyChooseUs></WhyChooseUs>
      </section>

      {/* Meet The owner */}
      <section>
        <MeetTheOwnerSection></MeetTheOwnerSection>
      </section>

      {/* Why its work */}
      <section id="how">
        <HowItWorkSection></HowItWorkSection>
      </section>

      {/* Request a quote */}
      <section>
        <RequestQuote></RequestQuote>
      </section>

      {/* Freequently asked questions */}
      <section className="py-12 md:py-20 px-6 md:px-8 lg:px-12 bg-[#F9F9F9]">
        <FrequentlyAskQuestions></FrequentlyAskQuestions>
      </section>


      {/* Footer............ */}
      <section>
        <Footer></Footer>
      </section>




    </div>
  )
}

export default LandingPage