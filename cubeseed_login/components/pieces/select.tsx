import React, { forwardRef } from "react"

export interface Select extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string
  options: string[]
}

const Select = forwardRef<HTMLInputElement, Select>(
  ({ label, className, type, options, ...props }, ref) => {
    return (
      <div className="w-72">
        <div className="relative h-12 w-full min-w-[200px]">
          <select
            className="disabled:bg-csborder-csneutral-600 peer h-full w-full rounded-[4px] border border-csneutral-600 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-primary outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-csneutral-600 focus:border-2 focus:border-primary-100 focus:border-t-transparent focus:outline-0 disabled:border-0"
            {...props}
          >
            {options?.length ? (
              options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))
            ) : (
              <option>Add options</option>
            )}
          </select>
          <label
            className="before:content[' '] after:content[' '] pointer-events-none
          absolute
           -top-1.5 left-0 flex h-full w-full select-none text-[12px] leading-[1.1] transition-all before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-[4px] before:border-l before:border-t before:border-csneutral-600 before:transition-all after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-[4px] after:border-r after:border-t after:border-csneutral-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-100 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-primary-100 peer-focus:before:border-l-2 peer-focus:before:border-t-2  peer-focus:before:border-primary-100 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-primary-100"
          >
            {props.required && <span className="mx-0.5 text-secondary">*</span>}
            {label}
          </label>
        </div>
      </div>
    )
  }
)

Select.displayName = "Select"

export default Select
