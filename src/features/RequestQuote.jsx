import React, { useState } from 'react'
import SuccessPage from './SuccessPage'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCall, MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci"
import { FaBusinessTime, FaSquareFacebook } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { BsTiktok, BsTwitterX } from "react-icons/bs"
import { RiSendPlaneFill } from "react-icons/ri"
import Requestbg from '../assets/icons/Requestbg.png'
import SplitText from '../components/SplitText'
import { toast } from 'react-toastify'

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

  const [files, setFiles] = useState([])
  const [fileNames, setFileNames] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFile = (e) => {
    const list = Array.from(e.target.files || [])
    if (!list.length) {
      setFiles([])
      setFileNames([])
      return
    }

    // filter only image/* MIME types
    const images = list.filter((f) => f && f.type && f.type.startsWith('image/'))
    const rejectedCount = list.length - images.length
    if (rejectedCount > 0) {
      toast.warning(`Only image files are allowed. ${rejectedCount} file(s) were ignored.`)
    }

    if (images.length) {
      setFiles(images)
      setFileNames(images.map((f) => f.name))
    } else {
      setFiles([])
      setFileNames([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const required = ['firstName', 'email', 'service']
    const missing = required.filter((k) => !form[k])
    if (missing.length > 0) {
      toast.warning(`Please fill required fields: ${missing.join(', ')}`)
      setIsLoading(false)
      return
    }

    try {
      let imageUrls = []
      if (files && files.length) {
        // Upload each file to Cloudinary and collect URLs
        for (const f of files) {
          const uploadData = new FormData()
          uploadData.append('file', f)
          uploadData.append('upload_preset', 'VoPromos')

          const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/dwujij1xx/image/upload`, {
            method: 'POST',
            body: uploadData,
          })

          const uploadJson = await uploadRes.json()
          if (!uploadRes.ok || !uploadJson.secure_url) {
            console.error('Cloudinary upload error:', uploadJson)
            toast.error(`File upload failed for ${f.name}. Please try again.`)
            setIsLoading(false)
            return
          }
          imageUrls.push(uploadJson.secure_url)
        }
      }

      const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '299c8058-2c7e-48e9-b5ce-6e79ac635af4'

      const fullName = `${form.firstName || ''} ${form.lastName || ''}`.trim()

      const message = `
Quote request details:

Name: ${fullName}
Email: ${form.email || ''}
Phone: ${form.phone || ''}
Company: ${form.company || ''}
Service: ${form.service || ''}
Budget: ${form.budget || ''}
Timeline: ${form.timeline || ''}

Description:
${form.description || ''}
    
${imageUrls && imageUrls.length ? `Uploaded Files:\n${imageUrls.join('\n')}` : ''}
    `.trim()

      const emailRes = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New quote request from website',
          from_name: fullName,
          email: form.email,
          message,
        }),
      })

      const json = await emailRes.json().catch(() => null)

      if (!emailRes.ok || !json.success) {
        console.error('Web3Forms error', json)
        toast.error('Failed to send email. Please try again later.')
        setIsLoading(false)
        return
      }

      // Success: preserve payload, reset form/files, show success alert + modal
      const payload = { ...form }

      console.log(payload)
      toast.success('Request submitted successfully!')
      // reset form and files immediately
      setForm({
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
      setFiles([])
      setFileNames([])

      setQuotePayload(payload)
      setShowSuccessModal(true)
    } catch (err) {
      console.error('Submit error:', err)
      toast.info('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }


  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [quotePayload, setQuotePayload] = useState(null)

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    // reset form
    setForm({
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
    setQuotePayload(null)
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-0">
      {/* Background Banner */}
      <div
        className='py-20 lg:py-44 xl:pb-60 top-0 left-0 w-full z-0'
        style={{ background: `url(${Requestbg}) no-repeat center/cover` }}
      >
        <div className="text-center mb-8 text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Let’s Build a Smarter Supply Chain Together.
          </h1>
          <p className="mt-3 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're ready to streamline your sourcing and logistics process or just want to learn more, our team is here to help.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-[1200px] mx-auto bg-white z-50 -mt-16 lg:-mt-24 xl:-mt-48 xl:rounded-t-2xl">
        <div className="bg-white shadow-xl grid grid-cols-1 lg:grid-cols-2 items-center xl:rounded-2xl lg:px-6">
          {/* Left Contact Info */}
          <div className="p-8 bg-gradient-to-b from-sky-700 via-sky-800 to-sky-900 text-white rounded-b-2xl lg:rounded-t-2xl">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="mt-3 text-sky-100">
                Tell us about your project and we'll provide a customized quote within 24 hours.
              </p>

              <div className="mt-6 space-y-4">
                <InfoItem icon={<MdOutlineMailOutline size={24} />} title="Email" value="info@vopromos.com" />
                <InfoItem icon={<MdOutlineCall size={24} />} title="Phone Number" value="(623) 279-3800" />
                <InfoItem icon={<CiLocationOn size={24} />} title="Location" value="2942 N 24th St Ste 115 PMB 333050 Phoenix, Arizona 85016-7849 US" />
                <InfoItem icon={<FaBusinessTime size={24} />} title="Business Hours" value="Monday - Friday: 9:00 AM - 5:00 PM" />
              </div>

              <div className="mt-8 flex gap-3">
                <SocialIcon href="https://www.facebook.com/Vopromos" icon={<FaSquareFacebook size={24} />} />
                <SocialIcon href="https://www.instagram.com/vopromos" icon={<FaInstagramSquare size={24} />} />
                <SocialIcon href="https://x.com/vopromos" icon={<BsTwitterX size={24} />} />
                <SocialIcon href="https://www.tiktok.com/@vopromos" icon={<BsTiktok size={24} />} />
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <form onSubmit={handleSubmit} className="p-8 lg:p-10">

            <SplitText
              text="Request a Quote"
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#004260]"
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

            {/* <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#004260]">Request a Quote</h3> */}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} />
              <InputField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} />
              <InputField name="email" label="Email Address" value={form.email} onChange={handleChange} type="email" />
              <InputField name="phone" label="Phone Number" value={form.phone} onChange={handleChange} />
              <InputField name="company" label="Company Name" value={form.company} onChange={handleChange} />

              <SelectField name="service" label="Service Needed" value={form.service} onChange={handleChange} options={["Product Sourcing", "Supplier Management", "Price Negotiation & Contracting", "Shipping & Logistics", "Warehousing & Storage", "Consulting & Procurement Strategy"]} />
              <InputField name="budget" label="Budget Range $" value={form.budget} onChange={handleChange} />
              <SelectField name="timeline" label="Timeline" value={form.timeline} onChange={handleChange} options={["1-3 months", "3-6 months", "6+ months"]} />
            </div>

            {/* File Upload */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-[#004260]">Upload Photo</label>
              <div className="mt-2 flex items-center gap-4">
                <label className="flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm cursor-pointer bg-[#F3F3F3] hover:bg-slate-50">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V8a4 4 0 014-4h2a4 4 0 014 4v8" /></svg>
                  <span>Choose File</span>
                  <input type="file" accept="image/*" multiple onChange={handleFile} className="hidden" />
                </label>
                <div className="text-sm text-slate-500">{(fileNames && fileNames.length) ? fileNames.join(', ') : 'No file chosen'}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-[#004260]">Descriptions</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]" placeholder="Tell us about your project, requirements, and any specific needs..." />
            </div>

            {/* Submit */}
            <div className="mt-6 flex items-center justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center gap-2 ${isLoading ? 'bg-sky-400' : 'bg-sky-600 hover:bg-sky-700'} text-white font-semibold px-5 py-2.5 rounded-lg shadow`}
              >
                {isLoading ? 'Submitting Request...' : 'Submit Request'} <RiSendPlaneFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// --- Reusable Components ---

const InputField = ({ name, label, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-[#004260]">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]"
      placeholder="Enter here"
    />
  </div>
)

const SelectField = ({ name, label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-[#004260]">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 text-sm bg-[#F3F3F3]"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
)

const InfoItem = ({ icon, title, value }) => (
  <div className="flex items-start gap-3">
    <div className="shrink-0">{icon}</div>
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-sm text-sky-100 whitespace-pre-line">{value}</div>
    </div>
  </div>
)

const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20">
    {icon}
  </a>
)
