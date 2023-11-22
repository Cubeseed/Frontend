"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { SideNavItems } from "@cs/types"
import { usePathname } from "next/navigation"
import { cmb } from "@cs/lib/util"

interface MobileSidenavProps {
  items: SideNavItems[]
}

export const MobileSidenav = ({ items }: MobileSidenavProps) => {
  const path = usePathname()
  return (
    <nav className="grid gap-2">
      {items.map((item, index: number) => {
        const Icon = Icons[item.icon || "home"]
        return (
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cmb(
                path === item.href
                  ? "bg-primary-100 text-white"
                  : "bg-transparent",
                index === 5 && "mt-20",
                "flex items-center gap-3 rounded-full p-2"
              )}
            >
              <span className="">
                <Icon fill={`${path === item.href ? "#ffffff" : "#002629"}`} />
              </span>
            </Link>
          )
        )
      })}
      <Link href="/" className="p-4">
        Sign out
      </Link>
    </nav>
  )
}
