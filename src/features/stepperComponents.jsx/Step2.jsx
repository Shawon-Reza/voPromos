import React, { useState, useEffect } from 'react'
import { useSchedule } from '../../contextApi/ScheduleContext'


const services = [
    'Product Sourcing',
    'Supplier Management',
    'Price Negotiation & Contracting',
    'Shipping & Logistics',
    'Warehousing & Storage',
    'Consulting & Procurement Strategy',
]

const Step2 = ({ onChange, setSaveHandler } = {}) => {
    const {scheduleData, updateSchedule } = useSchedule()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [serviceNeeded, setServiceNeeded] = useState('')

    // initialize local form state from context if values exist
    useEffect(() => {
        if (!scheduleData) return

        setFirstName(scheduleData.firstName || '')
        setLastName(scheduleData.lastName || '')
        setEmail(scheduleData.email || '')
        setPhone(scheduleData.phone || '')
        setCompany(scheduleData.company || '')
        setServiceNeeded(scheduleData.serviceNeeded || '')
    }, [scheduleData])

    const notifyParent = (patch = {}) => {
        const combined = {
            firstName,
            lastName,
            email,
            phone,
            company,
            serviceNeeded,
            ...patch,
        }
        updateSchedule('firstName', combined.firstName)
        updateSchedule('lastName', combined.lastName)
        updateSchedule('email', combined.email)
        updateSchedule('phone', combined.phone)
        updateSchedule('company', combined.company)
        updateSchedule('serviceNeeded', combined.serviceNeeded)
        if (typeof onChange === 'function') onChange(combined)
    }

    useEffect(() => {
        if (typeof setSaveHandler === 'function') {
            setSaveHandler(() => () => {
                notifyParent()
                return { firstName, lastName, email, phone, company, serviceNeeded }
            })
        }
        return () => {
            if (typeof setSaveHandler === 'function') setSaveHandler(() => () => { })
        }
    }, [firstName, lastName, email, phone, company, serviceNeeded, setSaveHandler])

    const handleConsole = () => {
        const payload = { firstName, lastName, email, phone, company, serviceNeeded }
        console.log('Step2 payload:', payload)
    }

    return (
        <section className="p-6 md:pb-14 bg-white rounded-lg shadow-sm text-start">
            <h2 className="text-2xl font-bold text-[#004260] mb-2">Your Information</h2>
            <p className="text-sm text-slate-500 mb-6">Tell us more about yourself and your business.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2 ">First Name</span>
                    <input
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        placeholder="Enter here"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); notifyParent({ firstName: e.target.value }) }}
                        aria-label="First name"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2">Last Name</span>
                    <input
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        placeholder="Enter here"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); notifyParent({ lastName: e.target.value }) }}
                        aria-label="Last name"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2">Email Address</span>
                    <input
                        type="email"
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        placeholder="Enter here"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); notifyParent({ email: e.target.value }) }}
                        aria-label="Email address"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2">Phone Number</span>
                    <input
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        placeholder="Enter here"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); notifyParent({ phone: e.target.value }) }}
                        aria-label="Phone number"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2">Company Name</span>
                    <input
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        placeholder="Enter here"
                        value={company}
                        onChange={(e) => { setCompany(e.target.value); notifyParent({ company: e.target.value }) }}
                        aria-label="Company name"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-md font-semibold text-[#004260] mb-2">Service Needed</span>
                    <select
                        value={serviceNeeded}
                        onChange={(e) => { setServiceNeeded(e.target.value); notifyParent({ serviceNeeded: e.target.value }) }}
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-200"
                        aria-label="Service needed"
                    >
                        <option value="">Select service</option>
                        {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </label>
            </div>


        </section>
    )
}

export default Step2