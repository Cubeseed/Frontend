"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import logo from "@assets/cubeseed.png"

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push("/")}
      className="block cursor-pointer"
      src={logo}
      height="120"
      width="120"
      alt="Logo"
    />
  )
}

export default Logo
