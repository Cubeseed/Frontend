import React from "react"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export const Textarea = ({ label, className, ...props }: TextareaProps) => {
  return (
    <div className="relative w-full min-w-[200px]">
      <textarea
        className="border-blue-gray-200 text-blue-gray-700 disabled:bg-blue-gray-50 peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-csneutral-600 placeholder-shown:border-t-csneutral-600 focus:border-2 focus:border-primary-100 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0"
        placeholder=" "
        {...props}
      ></textarea>
      <label className="before:content[' '] after:content[' '] text-blue-gray-400 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-csneutral-600 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-100 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-primary-100 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-primary-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
        {label}
      </label>
    </div>
  )
}

Textarea.displayName = "Textarea"

export default Textarea
