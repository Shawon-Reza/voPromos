import React from 'react'
import logo from '../../assets/icons/logo.png'
import logoTitle from '../../assets/icons/logoTitle.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone, MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    const id = 'home';
    if (location.pathname !== '/') {
      return navigate('/', { state: { scrollTo: id } });
    }
    const el = document.getElementById(id);
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 80;
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }


  return (
    <footer className="bg-[#092848] text-slate-200">
      <div className="px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: logo + tagline */}
          <div className="space-y-4">
            <div
              onClick={goToHome}
              className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="VoPromos Logo" className="h-10" />
              <img src={logoTitle} alt="VoPromos Logo" className="h-5" />
            </div>
            <p className="text-slate-300 max-w-md">Simplifying supply chain management for businesses worldwide.</p>
          </div>

          {/* Middle: quick links */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" onClick={(e) => {
                  e.preventDefault();
                  const id = 'home'
                  if (location.pathname !== '/') return navigate('/', { state: { scrollTo: id } })
                  const el = document.getElementById(id)
                  const header = document.querySelector('header')
                  const offset = header ? header.offsetHeight : 80
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
                }} className="text-slate-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => {
                  e.preventDefault();
                  const id = 'services'
                  if (location.pathname !== '/') return navigate('/', { state: { scrollTo: id } })
                  const el = document.getElementById(id)
                  const header = document.querySelector('header')
                  const offset = header ? header.offsetHeight : 80
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
                }} className="text-slate-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#how" onClick={(e) => {
                  e.preventDefault();
                  const id = 'how'
                  if (location.pathname !== '/') return navigate('/', { state: { scrollTo: id } })
                  const el = document.getElementById(id)
                  const header = document.querySelector('header')
                  const offset = header ? header.offsetHeight : 80
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
                }} className="text-slate-300 hover:text-white">How It Works</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  const id = 'about'
                  if (location.pathname !== '/') return navigate('/', { state: { scrollTo: id } })
                  const el = document.getElementById(id)
                  const header = document.querySelector('header')
                  const offset = header ? header.offsetHeight : 80
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
                }} className="text-slate-300 hover:text-white">About Us</a>
              </li>
            </ul>
          </div>

          {/* Right: contact */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <MdLocalPhone size={20} className='text-[#00B0B9]' />
                <a href="tel:+16232795800" className="hover:text-white">(623) 275-9800</a>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineMail size={20} className='text-[#00B0B9]' />
                <a href="mailto:info@vopromos.com" className="hover:text-white">info@vopromos.com</a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <IoLocation size={20} className='text-[#00B0B9]' />
                <div>
                  <div>2942 N 24th St Ste 115</div>
                  <div>PMB 333050</div>
                  <div>Phoenix, Arizona 85016-7849 US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#929292]" />

      <div className="bg-[#062233] text-slate-400 text-sm py-4 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <div className=''>© {new Date().getFullYear()} VoPromos LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer