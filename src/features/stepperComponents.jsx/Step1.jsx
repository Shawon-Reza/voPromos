import { useSchedule } from '../../contextApi/ScheduleContext'
import React, { useState, useEffect } from 'react'

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const Step1 = ({ onChange, setSaveHandler } = {}) => {
    const [selectedDay, setSelectedDay] = useState('Tue')
    const [preferredDate, setPreferredDate] = useState('')
    const [preferredTime, setPreferredTime] = useState('')
    const {scheduleData, updateSchedule } = useSchedule();
    
    // ensure initial selectedDay is present in context on mount
    useEffect(() => {
        if (typeof updateSchedule === 'function') updateSchedule('selectedDay', selectedDay)
    }, [selectedDay, updateSchedule])




    const handleSelectDay = (day) => {
        setSelectedDay(day)
        if (typeof updateSchedule === 'function') updateSchedule('selectedDay', day)
        if (typeof onChange === 'function') onChange({ selectedDay: day, preferredDate, preferredTime })
    }

    const handleDateChange = (e) => {
        setPreferredDate(e.target.value)
        if (typeof updateSchedule === 'function') updateSchedule('preferredDate', e.target.value)
        if (typeof onChange === 'function') onChange({ selectedDay, preferredDate: e.target.value, preferredTime })
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
                            onClick={() => handleSelectDay(day)}
                            className={
                                `flex-1 min-w-0 px-2 sm:px-5 text-sm sm:text-md cursor-pointer py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 text-center ` +
                                (selectedDay === day
                                    ? 'bg-sky-600 text-white border-sky-600'
                                    : 'bg-slate-100 text-slate-700 border-slate-200')
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

            <div className="mt-6 flex items-center gap-3">
                <button
                    type="button"
                    onClick={handleConsole}
                    className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                    Console Data
                </button>

                <p className="text-sm text-slate-500">Or integrate with the parent stepper using the <code>onChange</code> prop.</p>
            </div>
        </section>
    )
}

export default Step1