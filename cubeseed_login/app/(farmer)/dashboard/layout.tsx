"use client"

import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel"
import Navbar from "@/component/navbar/Navbar"
import { Inter as FontSans } from "next/font/google"
// import "./globals.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
}

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky inset-0 ">
        <Navbar />
      </header>
      <div>
        <aside className="fixed inset-0 h-screen w-[250px] bg-white shadow-2xl">
          <DashboardSidePannel />
        </aside>
        <main className="ml-[250px]">{children}</main>
      </div>
    </div>
  )
}
