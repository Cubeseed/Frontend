import Link from "next/link"
import navStyles from "@/styles/navbar.module.scss"
import React from "react"
import cubeseed from "@assets/cubeseedlogo.svg"
import loginIcon from "@assets/icons/loginIcon.svg"
import Image from "next/image"

const Navbar: React.FC = () => {
  return (
    <nav className={navStyles.nav}>
      <Image
        src={cubeseed}
        alt="cubeseed logo"
        width={200}
        className={navStyles.navlogo}
      />
      <div className={navStyles.navlinkgroup}>
        <ul className={navStyles.navlinks}>
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
      </div>
    </nav>
  )
}

export default Navbar
