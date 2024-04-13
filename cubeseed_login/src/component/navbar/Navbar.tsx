import Link from "next/link"
import React from "react"
import SignInPage from "@/pages/signin"
import Container from "@/comps/Container"
import Logo from "./Logo"
import { PiUserCircleFill } from "react-icons/pi"

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full border-b border-[#8bc8c8] bg-[#e2f5f5] shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />

            {/* Links */}
            <div className="flex cursor-pointer flex-row items-center gap-8 text-[15px] text-[#03656b]">
              <Link href="/about">
                <div className="hover:text-[#4cacb3]">About</div>
              </Link>
              <Link href="/features">
                <div className="hover:text-[#4cacb3]">Features</div>
              </Link>
              <Link href="/testimonials">
                <div className="hover:text-[#4cacb3]">Testimonials</div>
              </Link>

              {/* Sign in button */}
              <Link href="/signin">
                <div className="flex flex-row items-center gap-1 hover:text-[#4cacb3]">
                  <PiUserCircleFill size={28} />
                  <div>Sign in</div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
