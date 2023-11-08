import React, { forwardRef } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={`peer h-[48px] w-full rounded-[4px] border border-[#99A19F] px-3 py-2.5 font-sans text-sm font-normal text-[#002629] placeholder:text-transparent focus:border-[#002629] focus:outline-none ${className}`}
          {...props}
        />
        <label
          htmlFor="date"
          className="peer-focus:-top-3.4 absolute -top-1.5 left-1.5 z-10 bg-transparent text-[11px] font-normal leading-tight text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-[11px] peer-focus:text-[#002629]"
        >
          {label}
        </label>
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
