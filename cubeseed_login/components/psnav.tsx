import React from "react"
import { Icons } from "./icons"

export default function psnav() {
  return (
    <div className="mt-8 flex items-center gap-8">
      <div className="flex h-[48px] flex-1 items-center rounded-[28px] border bg-[#1D1B2014] pr-6">
        <select className="rounded-l-[28px] bg-primary-900 p-4">
          <option value="category">Category</option>
        </select>
        <input
          className="flex-1 bg-transparent px-4 py-2 outline-none"
          placeholder=" Enter Products/ service to search"
          type="text"
        />
        <Icons.search />
      </div>
      <div className="flex items-center gap-4">
        <Icons.cart />
        <Icons.chat />
        <Icons.account />
      </div>
    </div>
  )
}
