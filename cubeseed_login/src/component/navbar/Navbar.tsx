// import Link from "next/link";
// import navStyles from "../styles/navbar.module.scss"

// export default function Navbar() {
//   return (
//     <nav className={navStyles.nav}>
//       <h1>
//         Cubeseed
//       </h1>
//       <ul className="desktopLinks">
//         <li>
//           <Link href='/create'>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link href='/create'>
//             Features
//           </Link>
//         </li>
//         <li>
//           <Link href='/create'>
//             Contact Us
//           </Link>
//         </li>
//         <li>
//           <Link href='/create'>
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link href='/create'>
//             Sign Up
//           </Link>
//         </li>
//       </ul>
//       {/* <ul className={navStyles.links}>
       
//       </ul> */}
//     </nav>
//   )
// }

import Link from "next/link";
import navStyles from "@/styles/navbar.module.scss"
import React from 'react';
import LoginPage from "@/pages/login_page/login-page";


export default function Navbar() {

  return (
    <nav className={navStyles.nav}>
      <h1>
        CubeSeed
      </h1>
      <div className={navStyles.navlinkgroup}>
        <ul className={navStyles.navlinks}>
          <li className={navStyles.navlink}>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href='/features'>
              Features
            </Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href='/contact_us'>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.navbuttongroup}>
        <Link href="/login_page/login-page" legacyBehavior className={navStyles.loginbutton}>
          <a className={navStyles.button}>Login</a>
        </Link>
        <Link href="/signup" legacyBehavior className={navStyles.signupbutton}>
          <a className={navStyles.button}>Signup</a>
        </Link>
      </div>
      {/*}
        <li className="login-link">
          <Link className="login-link" href='/login'>
            Login
          </Link>
        </li>
        <li className="signup-link">
          <Link href='/sign_up'>
            Sign Up
          </Link>
        </li>
      </ul>
  */}

      {/* <ul className={navStyles.links}>
       
      </ul> */}
    </nav>
  )
}

