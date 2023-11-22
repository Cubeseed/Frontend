import Link from "next/link"
import { Icons } from "./icons"

export const TopNav = () => {
  return (
    <nav className="h-[100px] p-4 md:px-16">
      <div className="flex items-center justify-end gap-4">
        <Icons.bell />
        <Icons.chat />
        <Icons.wallet />
      </div>
    </nav>
  )
}
