import Link from "next/link";
import navStyles from "../styles/navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <h1>
        Cubeseed
      </h1>
      <ul className="desktopLinks">
        <li>
          <Link href='/create'>
            About
          </Link>
        </li>
        <li>
          <Link href='/create'>
            Features
          </Link>
        </li>
        <li>
          <Link href='/create'>
            Contact Us
          </Link>
        </li>
        <li>
          <Link href='/create'>
            Login
          </Link>
        </li>
        <li>
          <Link href='/create'>
            Sign Up
          </Link>
        </li>
      </ul>
      {/* <ul className={navStyles.links}>
       
      </ul> */}
    </nav>
  )
}
