import React from "react"
import userCardInfo from "@/styles/usercardinfo.module.scss"
import Farmer from "@/assets/farmer image 1.png"
import Image from "next/image"

export default function UserCardinfo() {
  return (
    <section className={userCardInfo.userInfo}>
      <Image src={Farmer} alt="" width={70} height={70} className="img" />
      <div className={userCardInfo.listWrapper}>
        <ul className={userCardInfo.list}>
          <li>Name</li>
          <li>Company</li>
          <li>Contact</li>
          <li>Address</li>
        </ul>
        <ul className={userCardInfo.list}>
          <li>Famer&apos;sName</li>
          <li> Farm Name</li>
          <li>
            +234986464654
            <br />
            email@site.com
          </li>
          <li>
            Building Street Address
            <br />
            City,State/province,country
          </li>
        </ul>
      </div>
    </section>
  )
}
