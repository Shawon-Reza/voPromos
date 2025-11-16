import React, { useState } from 'react'
import { MdOutlineCall, MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci";
import { FaBusinessTime, FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Requestbg from '../assets/icons/Requestbg.png'


export default function RequestQuote() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const [fileName, setFileName] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleFile(e) {
    const f = e.target.files && e.target.files[0]
    setFileName(f ? f.name : '')
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Simple demo handler — replace with real API call
    console.log('submit', { ...form, fileName })
    alert('Request submitted (demo). Check console for payload.')
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* .................................. */}
      <div

        className='py-20 lg:py-44 xl:pb-60  top-0 left-0 w-full z-0'
        style={{
          background: `url(${Requestbg}) no-repeat center/cover`
        }}
      >

        <div className="text-center mb-8 text-white ">
          <h1 className="text-3xl sm:text-4xl font-extrabold ">Let’s Build a Smarter Supply Chain Together.</h1>
          <p className="mt-3  max-w-2xl mx-auto">We'd love to hear from you. Whether you're ready to streamline your sourcing and logistics process or just want to learn more, our team is here to help.</p>
        </div>
      </div>



      <div className="max-w-[1200px] mx-auto bg-white z-50 -mt-16 lg:-mt-24 xl:-mt-48 xl:rounded-t-2xl">

        {/* ........................................... */}
        <div className="bg-white  shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-auto items-center xl:rounded-2xl lg:px-6 ">
          {/* Left contact card...................... */}
          <div className="p-8 bg-gradient-to-b from-sky-700 via-sky-800 to-sky-900 text-white rounded-b-2xl lg:rounded-t-2xl ">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="mt-3 text-sky-100">Tell us about your project and we'll provide a customized quote within 24 hours.</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <MdOutlineMailOutline size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm text-sky-100">info@vopromos.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <MdOutlineCall size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone Number</div>
                    <div className="text-sm text-sky-100">(623) 279-3800</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <CiLocationOn size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <div className="text-sm text-sky-100">2942 N 24th St Ste 115<br />Phoenix, Arizona 85016-7849 US</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <FaBusinessTime size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Business Hours</div>
                    <div className="text-sm text-sky-100">Monday - Friday: 9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3 ">
                <a
                  href="https://www.facebook.com/Vopromos"
                  target='_blank'
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20">
                  <FaSquareFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/vopromos" target='_blank' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20">
                  <FaInstagramSquare size={24} />
                </a>
                <a href="https://x.com/vopromos" target='_blank' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20">
                  <BsTwitterX size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: form ..............................*/}
          <form onSubmit={handleSubmit} className="p-8 lg:p-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#004260]">Request a Quote</h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#004260]">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Enter here" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Enter here" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Enter here" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Enter here" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Company Name</label>
                <input name="company" value={form.company} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Enter here" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]">
                  <option value="">Select service</option>
                  <option>Product Sourcing</option>
                  <option>Supplier Vetting</option>
                  <option>Logistics & Shipping</option>
                  <option>Custom Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Budget Range $</label>
                <input name="budget" value={form.budget} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="$10,000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#004260]">Timeline</label>
                <select name="timeline" value={form.timeline} onChange={handleChange} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]">
                  <option value="">Select timeline</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#004260]">Upload Photo</label>
              <div className="mt-2 flex items-center gap-4">
                <label className="flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm cursor-pointer bg-[#F3F3F3] hover:bg-slate-50 ">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V8a4 4 0 014-4h2a4 4 0 014 4v8" /></svg>
                  <span>Choose File</span>
                  <input type="file" onChange={handleFile} className="hidden" />
                </label>
                <div className="text-sm text-slate-500">{fileName || 'No file chosen'}</div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#004260]">Descriptions</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Tell us about your project, requirements, and any specific needs... "></textarea>
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button type="submit" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">Submit Request
                <RiSendPlaneFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}