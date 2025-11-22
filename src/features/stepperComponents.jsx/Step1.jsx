import { useSchedule } from '../../contextApi/ScheduleContext'
import React, { useState, useEffect } from 'react'

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const Step1 = ({ onChange, setSaveHandler } = {}) => {
    // start with no day selected so user can choose manually
    const [selectedDay, setSelectedDay] = useState('')
    const [preferredDate, setPreferredDate] = useState('')
    const [preferredTime, setPreferredTime] = useState('')
    const {scheduleData, updateSchedule } = useSchedule();

    // local YYYY-MM-DD for today's date (used as min for date input)
    const pad = (n) => String(n).padStart(2, '0')
    const now = new Date()
    const todayStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
    
    // keep context in sync but only write when a day is chosen
    useEffect(() => {
        if (selectedDay && typeof updateSchedule === 'function') updateSchedule('selectedDay', selectedDay)
    }, [selectedDay, updateSchedule])

    // initialize local form state from context when available
    useEffect(() => {
        if (!scheduleData) return

        if (scheduleData.preferredDate) setPreferredDate(scheduleData.preferredDate)
        if (scheduleData.preferredTime) setPreferredTime(scheduleData.preferredTime)
        if (scheduleData.selectedDay) setSelectedDay(scheduleData.selectedDay)
    }, [scheduleData])




    const handleSelectDay = (day) => {
        // Manual selection disabled — weekday is computed from the chosen date only.
        return
    }

    const handleDateChange = (e) => {
        const val = e.target.value

        // prevent selecting a past date
        if (val && val < todayStr) {
            console.warn('Preferred date cannot be in the past')
            return
        }

        setPreferredDate(val)
        if (typeof updateSchedule === 'function') updateSchedule('preferredDate', val)
        if (typeof onChange === 'function') onChange({ selectedDay, preferredDate: val, preferredTime })
    }

    const handleTimeChange = (e) => {
        setPreferredTime(e.target.value)
        if (typeof updateSchedule === 'function') updateSchedule('preferredTime', e.target.value)
        if (typeof onChange === 'function') onChange({ selectedDay, preferredDate, preferredTime: e.target.value })
    }

    const handleConsole = () => {
        const payload = { selectedDay, preferredDate, preferredTime }
        console.log('Step1 payload:', payload)
    }

    // If the user chooses a specific date, compute the actual weekday
    // and sync `selectedDay` so review step shows consistent information.
    useEffect(() => {
        if (!preferredDate) return

        try {
            // Parse as local midnight to avoid timezone shifts when using plain YYYY-MM-DD
            const d = new Date(preferredDate + 'T00:00:00')
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            const computed = dayNames[d.getDay()]

            if (computed && computed !== selectedDay) {
                setSelectedDay(computed)
                if (typeof updateSchedule === 'function') updateSchedule('selectedDay', computed)
                if (typeof onChange === 'function') onChange({ selectedDay: computed, preferredDate, preferredTime })
            }
        } catch (err) {
            // parsing failed — ignore and keep existing selection
            console.warn('Could not parse preferredDate for weekday sync', err)
        }
    }, [preferredDate])

    // register save handler so parent can request persisting this step's values
    useEffect(() => {
        if (typeof setSaveHandler === 'function') {
            setSaveHandler(() => () => {
                updateSchedule('selectedDay', selectedDay)
                updateSchedule('preferredDate', preferredDate)
                updateSchedule('preferredTime', preferredTime)
                return { selectedDay, preferredDate, preferredTime }
            })
        }

        return () => {
            if (typeof setSaveHandler === 'function') setSaveHandler(() => () => {})
        }
    }, [selectedDay, preferredDate, preferredTime, setSaveHandler, updateSchedule])

    return (
        <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2 text-start text-[#004260]">Select Date & Time</h2>
            <p className="text-sm text-slate-500 mb-6 text-start">Choose a time that works best for your consultation.</p>

            <div className="border rounded-lg p-4 mb-8">
                <div className="flex gap-1">
                    {days.map((day) => (
                        <button
                            key={day}
                            type="button"
                            aria-pressed={selectedDay === day}
                            disabled
                            className={
                                `flex-1 min-w-0 px-2 sm:px-5 text-sm sm:text-md py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 text-center ` +
                                (selectedDay === day
                                    ? 'bg-sky-600 text-white border-sky-600'
                                    : 'bg-slate-100 text-slate-700 border-slate-200') +
                                ' opacity-60 cursor-not-allowed'
                            }
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            <h3 className="text-xl font-medium text-[#004260] mb-4 text-start">Available Time Slot</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <label className="flex flex-col">
                    <span className="text-sm text-slate-600 mb-2 text-start">Preferred Date</span>
                    <input
                        type="date"
                        value={preferredDate}
                        min={todayStr}
                        onChange={handleDateChange}
                        className="px-3 py-2 border rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
                        aria-label="Preferred date"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-sm text-slate-600 mb-2">Preferred Time</span>
                    <select
                        value={preferredTime}
                        onChange={handleTimeChange}
                        className="px-3 py-2 border rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
                        aria-label="Preferred time slot"
                    >
                        <option value="">Select a time slot</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                    </select>
                </label>
            </div>

            {preferredDate && selectedDay && (
                <p className="text-sm text-slate-500 mt-2 text-start">Day locked to <span className="font-semibold text-sky-600">{selectedDay}</span> because a specific date was chosen.</p>
            )}

           
        </section>
    )
}

export default Step1