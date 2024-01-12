import Link from "next/link";
import navStyles from "@/styles/navbar.module.scss";
import React from "react";
import LoginPage from "@/pages/login_page/login-page";

export default function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <h1>CubeSeed</h1>
      <div className={navStyles.navlinkgroup}>
        <ul className={navStyles.navlinks}>
          <li className={navStyles.navlink}>
            <Link href="/about">About</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/features">Features</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/contact_us">Contact Us</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/moderator/users" legacyBehavior>
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.navbuttongroup}>
        <Link
          href="/login_page/login-page"
          legacyBehavior
          className={navStyles.loginbutton}
        >
          <a className={navStyles.button}>Login</a>
        </Link>
        <Link href="/signup" legacyBehavior className={navStyles.signupbutton}>
          <a className={navStyles.button}>Signup</a>
        </Link>
      </div>
    </nav>
  );
}
