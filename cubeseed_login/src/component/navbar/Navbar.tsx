import Link from "next/link"
import navStyles from "@/styles/navbar.module.scss"
import React from "react"
import cubeseed from "@assets/cubeseedlogo.svg"
import loginIcon from "@assets/icons/loginIcon.svg"
import Image from "next/image"

const Navbar: React.FC = () => {
  return (
    <nav className={`${navStyles.nav} w-full overflow-hidden`}>
      <div className="flex items-center justify-between px-5 py-4 lg:px-12">
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
        <button className="group space-y-1 md:hidden">
          <div className="h-1 w-6 bg-dark-green"></div>
          <div className="h-1 w-6 bg-dark-green"></div>
          <div className="h-1 w-6 bg-dark-green"></div>

          {/* Menu */}
          <ul
            className="absolute -top-0 right-0 flex w-screen 
          flex-col justify-end space-y-3 pb-10 duration-150"
          >
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
                <Link href="/login_page/login-page" legacyBehavior>
                  <a>Login</a>
                </Link>
              </div>
            </li>
          </ul>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
