"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { SideNavItems } from "@cs/types"
import { usePathname } from "next/navigation"
import { cmb } from "@cs/lib/util"

interface DashboardSideNavProps {
  items: SideNavItems[]
}

export const DashboardSideNav = ({ items }: DashboardSideNavProps) => {
  const path = usePathname()
  return (
    <nav className="grid items-center gap-2">
      {items.map((item, index: number) => {
        const Icon = Icons[item.icon || "home"]
        return (
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cmb(
                path === item.href
                  ? "rounded-full bg-primary-100 text-white"
                  : "bg-transparent",
                index === 4 && "mt-20",
                "flex h-[56px] w-[56px] items-center px-4 py-2 text-sm font-medium md:w-full md:justify-between md:rounded-[100px]"
              )}
            >
              <span className="flex items-center gap-3">
                <span className="">
                  <Icon
                    fill={`${path === item.href ? "#ffffff" : "#002629"}`}
                  />
                </span>
                <span className="hidden md:block">{item.title}</span>
              </span>
              <span className="hidden md:block">{item.notification}</span>
            </Link>
          )
        )
      })}
      <Link href="/" className="hidden p-4 md:block">
        Sign out
      </Link>
    </nav>
  )
}
