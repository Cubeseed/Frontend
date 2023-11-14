import React, { forwardRef } from "react"

export interface InputRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ label, className, type, ...props }, ref) => {
    return (
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="html"
          data-ripple-dark="true"
        >
          <input
            id="html"
            name="type"
            type="radio"
            className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border text-primary-100 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-[20px] before:w-[20px] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-100 checked:before:bg-primary-100 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary-100 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-black"
          htmlFor="html"
        >
          {label}
        </label>
      </div>
    )
  }
)

InputRadio.displayName = "InputRadio"

export default InputRadio
