"use client"

import { useEffect, useState, useRef } from "react"
import { useSchedule } from "../contextApi/ScheduleContext"
import { useNavigate } from 'react-router-dom'
import SuccessPage from './SuccessPage'

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "../components/ui/stepper"
import { Button } from "../components/ui/button"
import Step1 from "./stepperComponents.jsx/Step1"
import Step2 from "./stepperComponents.jsx/Step2"
import Step3 from "./stepperComponents.jsx/Step3"
import { toast } from "react-toastify"


const steps = [1, 2, 3]

export default function StepperComponent() {
  // step values: 1 - Date & Time, 2 - Your Details, 3 - Confirmation, 4 - Success
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const saveHandlerRef = useRef(() => { })
  const { scheduleData, updateSchedule } = useSchedule()


  const handleNextStep = async () => {
    setIsLoading(true)
    try {
      // call registered save handler from child (if any) before moving to next
      if (typeof saveHandlerRef.current === 'function') {
        await Promise.resolve(saveHandlerRef.current())
      }
    } catch (err) {
      console.error('Error saving step data:', err)
    }

    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setIsLoading(false)
    }, 250)
  }





  const handleConfirmBooking = async () => {
    setIsLoading(true)
    try {
      if (typeof saveHandlerRef.current === 'function') {
        await Promise.resolve(saveHandlerRef.current())
      }

      // scheduleData will now contain latest values from steps
      console.log('Confirming booking with payload:', scheduleData)

      // validate scheduleData: if any field is empty, block and show alert
      const missing = Object.entries(scheduleData)
        .filter(([k, v]) => v === null || v === undefined || v === '')
        .map(([k]) => k)

      if (missing.length > 0) {
        const pretty = missing.join(', ')
        toast.warning(`Please fill the following required fields before confirming: ${pretty}`)
        setIsLoading(false)
        return
      }

      // send email via Web3Forms
      try {
        const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'c58f6a2d-0e6f-4872-8b44-909ce6c3622a'

        const message = `New booking received:\n\nName: ${scheduleData.firstName || ''} ${scheduleData.lastName || ''}\nEmail: ${scheduleData.email || ''}\nPhone: ${scheduleData.phone || ''}\nCompany: ${scheduleData.company || ''}\nService: ${scheduleData.serviceNeeded || ''}\nDate: ${scheduleData.preferredDate || ''} ${scheduleData.preferredTime || ''} (${scheduleData.selectedDay || ''})`

        const web3res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: 'Scheduled a Consultation',
            from_name: `${scheduleData.firstName} ${scheduleData.lastName}`,
            // name: `${scheduleData.firstName || ''} ${scheduleData.lastName || ''}`.trim(),
            // email: scheduleData.email || '',
            message,
          }),
        })

        if (!web3res.ok) {
          const txt = await web3res.text().catch(() => 'Web3Forms request failed')
          console.warn('Web3Forms send failed:', txt)
        } else {
          console.log('Web3Forms email sent successfully')
          setBookingPayload(scheduleData)
          setShowSuccessModal(true)
        }
      } catch (err) {
        console.warn('Error sending Web3Forms email:', err)
      }

    } catch (err) {
      console.error('Error during confirm booking:', err)

    } finally {
      setIsLoading(false)
    }
  }





  console.log(currentStep)
  const captions = ['Date & Time', 'Your Details', 'Review & Confirm']

  const navigate = useNavigate()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [bookingPayload, setBookingPayload] = useState(null)

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    // reset stepper to first step
    setCurrentStep(1)

    // clear schedule data in context
    try {
      updateSchedule('preferredDate', null)
      updateSchedule('preferredTime', null)
      updateSchedule('selectedDay', null)
      updateSchedule('company', null)
      updateSchedule('email', null)
      updateSchedule('firstName', null)
      updateSchedule('lastName', null)
      updateSchedule('phone', null)
      updateSchedule('serviceNeeded', null)
    } catch (err) {
      console.warn('Error resetting schedule data', err)
    }

    // clear booking payload
    setBookingPayload(null)
  }


  return (
    <div className="mx-auto px-5 max-w-2xl md:max-w-3xl lg:max-w-5xl space-y-8 text-center ">

      <div className="mx-auto max-w-xl">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1"
              loading={isLoading}
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 text-sm text-[#3D3D3D] font-semibold text-center">{captions[step - 1]}</div>
                <StepperTrigger asChild>
                  <StepperIndicator />
                </StepperTrigger>
              </div>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
      </div>




      <div className="md:mt-15 lg:mt-20">
        {currentStep === 1 && <Step1 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
        {currentStep === 2 && <Step2 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
        {currentStep === 3 && <Step3 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
      </div>
      {/* {currentStep === 4 && <Step4 />} */}



      <div className="flex justify-between space-x-4">
        <Button
          variant="outline"
          className="w-32 cursor-pointer  hover:bg-[#0E8BD5] hover:text-white hover:scale-110 transform transition-all ease-in-out duration-700 shadow-2xl border-[#0E8BD5]"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32 cursor-pointer bg-[#0E8BD5] text-white hover:bg-[#0E8BD5] hover:text-white hover:scale-110 transform transition-all ease-in-out duration-700 shadow-2xl"
          onClick={currentStep === steps.length ? handleConfirmBooking : handleNextStep}
          disabled={currentStep > steps.length}
        >
          {currentStep === steps.length ? 'Confirm booking' : 'Next step'}
        </Button>
      </div>

      {/* Success modal overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-9998 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={handleSuccessClose} />
          <div className="relative z-50 w-full max-w-2xl p-6">
            <SuccessPage booking={bookingPayload} onClose={handleSuccessClose} />
          </div>
        </div>
      )}

    </div>
  )
}
