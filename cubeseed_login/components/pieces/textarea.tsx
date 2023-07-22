import React, { forwardRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <textarea
          className={`peer h-[121px] px-3 py-2.5 font-sans text-sm font-normal w-full border rounded-[4px] border-[#99A19F] text-[#002629] placeholder-transparent focus:outline-none focus:border-[#002629] ${className}`}
          {...props}
        />
        <label
          htmlFor="date"
          className="absolute left-1.5 z-10 -top-1.5 text-gray-600 leading-tight text-[11px] bg-transparent font-normal transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.4 peer-focus:text-[#002629] peer-focus:text-[11px]"
        >
          {label}
        </label>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
