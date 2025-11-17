import { useSchedule } from '../../contextApi/ScheduleContext';
import React from 'react'

/**
 * Step3 — Review Your Details
 * Props:
 * - data: object containing all collected fields
 * - onConfirm: optional callback invoked with the payload when user confirms
 */
const Step3 = ({ data = {}, onConfirm } = {}) => {
    const { scheduleData } = useSchedule();
    console.log(scheduleData)
    // merge context data with any explicit data prop (data prop overrides nothing)
    const finalData = { ...scheduleData, ...data }

    const handleConfirm = () => {
        const payload = { ...finalData }
        console.log('Final review payload:', payload)
        if (typeof onConfirm === 'function') onConfirm(payload)
    }

    return (
        <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Review Your Details</h2>
            <p className="text-sm text-slate-500 mb-6">Please verify your information before confirming.</p>

            <div className="border-t border-slate-100 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
                    <div>
                        <div className="text-xs text-slate-500">Name</div>
                        <div className="text-sky-600 mt-1">{finalData.firstName || ''} {finalData.lastName || ''}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500">Email</div>
                        <div className="text-sky-600 mt-1">{finalData.email || ''}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500">Service Needed</div>
                        <div className="text-sky-600 mt-1">{finalData.serviceNeeded || ''}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500">Phone</div>
                        <div className="text-sky-600 mt-1">{finalData.phone || ''}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500">Company</div>
                        <div className="text-sky-600 mt-1">{finalData.company || ''}</div>
                    </div>

                    <div>
                        <div className="text-xs text-slate-500">Date & Time</div>
                        <div className="text-sky-600 mt-1">
                            <div>{finalData.selectedDay || ''}</div>
                            <div>{finalData.preferredDate || ''} {finalData.preferredTime ? `, ${finalData.preferredTime}` : ''}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                    Confirm & Submit
                </button>

                <p className="text-sm text-slate-500">Click to confirm. The payload is logged to the console and passed to `onConfirm` if provided.</p>
            </div>
        </section>
    )
}

export default Step3