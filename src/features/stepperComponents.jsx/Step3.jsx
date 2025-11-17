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
    // console.log(scheduleData)
    // merge context data with any explicit data prop (data prop overrides nothing)
    const finalData = { ...scheduleData, ...data }

    const handleConfirm = () => {
        const payload = { ...finalData }
        console.log('Final review payload:', payload)
        if (typeof onConfirm === 'function') onConfirm(payload)
    }

    return (
        <section className="p-6 bg-white rounded-lg shadow-sm text-start" >
            <h2 className="text-2xl font-semibold text-[#3D3B3B] mb-2">Review Your Details</h2>
            <p className="text-sm text-slate-500 mb-6">Please verify your information before confirming.</p>

            <div className="border-t border-slate-100 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Name</div>
                        <div className="text-sky-600 mt-1">{finalData.firstName || ''} {finalData.lastName || ''}</div>
                    </div>

                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Email</div>
                        <div className="text-sky-600 mt-1">{finalData.email || ''}</div>
                    </div>

                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Service Needed</div>
                        <div className="text-sky-600 mt-1">{finalData.serviceNeeded || ''}</div>
                    </div>

                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Phone</div>
                        <div className="text-sky-600 mt-1">{finalData.phone || ''}</div>
                    </div>

                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Company</div>
                        <div className="text-sky-600 mt-1">{finalData.company || ''}</div>
                    </div>

                    <div>
                        <div className=" text-[#3D3B3B] font-semibold text-sm">Date & Time</div>
                        <div className="text-sky-600 mt-1">
                            <div>{finalData.selectedDay || ''}</div>
                            <div>{finalData.preferredDate || ''} {finalData.preferredTime ? `, ${finalData.preferredTime}` : ''}</div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Step3