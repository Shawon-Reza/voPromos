import { RiCalendarScheduleFill } from 'react-icons/ri'
import Navbar from '../components/layout/Navbar'
import React from 'react'
import StepperComponent from './StepperComponent'

const ScheduleConsultation = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <section className='bg-[#152136] fixed w-full top-0 left-0 z-50 '>
                <Navbar></Navbar>
            </section>

            <div className='flex items-center justify-center pt-28 gap-2 text-3xl font-bold  text-[#004260]'>
                <RiCalendarScheduleFill size={26} />
                <h1 className='text-[#004260]'> Schedule a Consultation</h1>
            </div>

            {/* ............................ */}


            <section className='mt-10'> 
                <StepperComponent />
            </section>
        </div>
    )
}

export default ScheduleConsultation