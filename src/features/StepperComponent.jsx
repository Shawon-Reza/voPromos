"use client"

import { useEffect, useState, useRef } from "react"

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
import Step4 from "./stepperComponents.jsx/Step4"

const steps = [1, 2, 3]

export default function StepperComponent() {
  // step values: 1 - Date & Time, 2 - Your Details, 3 - Confirmation, 4 - Success
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const saveHandlerRef = useRef(() => {})

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
  console.log(currentStep)
  return (
    <div className="mx-auto px-5 max-w-2xl md:max-w-3xl lg:max-w-5xl space-y-8 text-center">

      <div className="mx-auto max-w-xl">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1"
              loading={isLoading}
            >
              <StepperTrigger asChild>
                <StepperIndicator />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
      </div>




      {currentStep === 1 && <Step1 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
      {currentStep === 2 && <Step2 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
      {currentStep === 3 && <Step3 setSaveHandler={(fn) => (saveHandlerRef.current = fn)} />}
      {/* {currentStep === 4 && <Step4 />} */}



      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32 cursor-pointer"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32 cursor-pointer"
          onClick={handleNextStep}
          disabled={currentStep > steps.length}
        >
          Next step
        </Button>
      </div>
      
    </div>
  )
}
