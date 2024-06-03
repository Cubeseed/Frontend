"use client"

import navStyles from "@/styles/navbar.module.scss"
import cubeseed from "@assets/cubeseedlogo.svg"
import loginIcon from "@assets/icons/loginIcon.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${navStyles.nav} w-full overflow-hidden md:h-auto`}>
      <div className="flex w-screen items-center justify-between px-5 py-4 lg:px-12">
        <Image
          src={cubeseed}
          alt="cubeseed logo"
          width={200}
          className={navStyles.navlogo}
        />

        <ul className={`${navStyles.navlinks} hidden space-x-8 md:flex`}>
          <li className={navStyles.navlink}>
            <Link href="/about">About</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/features">Features</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/contact_us">Testimonials</Link>
          </li>
          <li className={navStyles.navlink}>
            <div className={navStyles.loginbutton}>
              <Image src={loginIcon} alt="icon indicating user login option" />
              <Link href="/login_page/login-page" legacyBehavior>
                <a>Login</a>
              </Link>
            </div>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="group space-y-1 md:hidden" onClick={toggleMenu}>
          <div className="h-1 w-6 bg-dark-green"></div>
          <div className="h-1 w-6 bg-dark-green"></div>
          <div className="h-1 w-6 bg-dark-green"></div>
        </button>

        {/* Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="absolute -top-full right-0 flex flex-col justify-end space-y-3 pb-10 duration-150 group-focus:top-0">
              <button
                className="relative ml-auto px-10 py-8"
                onClick={toggleMenu}
              >
                <div className="absolute h-1 w-6 rotate-45 bg-dark-green"></div>
                <div className="absolute h-1 w-6 -rotate-45 bg-dark-green"></div>
              </button>
              <li
                className={`${navStyles.navlink} flex w-full justify-center py-4 `}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`${navStyles.navlink} flex w-full justify-center py-4 `}
              >
                <Link href="/features">Features</Link>
              </li>
              <li
                className={`${navStyles.navlink} flex w-full justify-center py-4 `}
              >
                <Link href="/contact_us">Testimonials</Link>
              </li>
              <li
                className={`${navStyles.navlink} flex w-full justify-center py-4 `}
              >
                <div className={navStyles.loginbutton}>
                  <Image
                    src={loginIcon}
                    alt="icon indicating user login option"
                  />
                  <Link href="/login_page/login-page">
                    <a>Login</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
