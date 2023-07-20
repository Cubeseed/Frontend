import React from "react";
import Image from "next/image";
import style from "@/styles/FarmNavBar.module.scss";

export default function FarmNavBar() {
  return (
    <nav className={style.navBar}>
      <div>
        <Image src="/cubeseed.png" alt="" width={100} height={40} />
      </div>
      <div>
        <Image src="/notification.svg" alt="" width={30} height={20} />
        <Image src="/chartBuble.svg" alt="" width={30} height={20} />
        <Image src="/profileIcon.svg" alt="" width={30} height={20} />
      </div>
    </nav>
  );
}
