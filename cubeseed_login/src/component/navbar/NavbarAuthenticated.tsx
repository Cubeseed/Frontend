import Link from "next/link"
import React from "react"
import SignInPage from "@/pages/signin"
import Container from "@/comps/Container"
import Logo from "./Logo"
import { PiUserCircleFill } from "react-icons/pi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { LiaClipboardListSolid } from "react-icons/lia"
import { RxMagnifyingGlass } from "react-icons/rx"

const NavbarAuthenticated = () => {
  return (
    <div className="fixed z-10 w-full border-b border-[#8bc8c8] bg-[#e2f5f5] shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row justify-between">
            <Logo />

            {/* Searchbar */}
            <div className="-my-[1px] mr-[20%] flex w-[35%] rounded-3xl border-[1px] border-[#03656b] bg-white lg:mr-[30%]">
              <input
                type="text"
                className="w-[90%] rounded-3xl rounded-r-none px-4 focus:outline-none"
                placeholder="Search"
              />
              <button className="flex items-center border-l px-4 text-gray-500">
                <RxMagnifyingGlass size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex cursor-pointer flex-row items-center gap-8 text-[15px] text-[#03656b]">
              <Link href="/signin">
                <IoMdNotificationsOutline size={22} />
              </Link>
              <Link href="/signin">
                <LiaClipboardListSolid size={22} />
              </Link>
              <Link href="/signin">
                <PiUserCircleFill size={28} />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavbarAuthenticated
