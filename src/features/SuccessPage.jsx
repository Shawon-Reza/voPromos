import React from 'react'
import { useLocation } from 'react-router-dom'
import { HiOutlineCheckCircle } from 'react-icons/hi'

const SuccessPage = ({ booking: propBooking, onClose }) => {
    const { state } = useLocation();

    console.log(propBooking)

    // booking info may be passed via navigation state (from the Stepper)
    const booking = propBooking || state?.booking || state?.schedule || {};
    console.log(booking)

    const date = booking?.preferredDate || booking?.selectedDate || '—';
    const time = booking?.preferredTime || booking?.selectedTime || '—';
    const company = booking?.company || booking?.companyName || '—';
    const service = booking?.serviceNeeded || booking?.serviceNeeded || '—';
    const email = booking?.email || booking?.contactEmail || '—';

    // If rendered as modal (onClose provided), don't use full-screen wrapper
    const Container = ({ children }) => (
        onClose ? (
            <div className="w-full bg-white rounded-xl shadow-xl p-8">{children}</div>
        ) : (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-10">{children}</div>
            </div>
        )
    )

    return (
        <Container>
            <div className="flex flex-col items-center text-center relative">
                {onClose && (
                    <button onClick={onClose} aria-label="Close" className="absolute right-2 top-2 text-slate-500 hover:text-slate-800">
                        ✕
                    </button>
                )}

                <div className="w-20 h-20 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow-md">
                    <HiOutlineCheckCircle size={40} className="text-sky-500" />
                </div>

                <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-800">Consultation Booked!</h1>

                <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl">
                    Thank you. Your consultation has been confirmed.
                </p>

                <p className="mt-3 text-sm text-sky-600">
                    We'll send a confirmation email to <span className="font-medium">{email}</span>
                </p>

                <div className="mt-6 w-full max-w-md">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 shadow-sm">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Booking Details:</div>

                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                            <div className="flex flex-col">
                                <span className="text-slate-500">Date:</span>
                                <span className="font-medium">{date}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-500">Time:</span>
                                <span className="font-medium">{time}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-slate-500">Company:</span>
                                <span className="font-medium">{company}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-500">Service Needed:</span>
                                <span className="font-medium">{service}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SuccessPage