import React from "react";
import userCardInfo from "@/styles/usercardinfo.module.scss";

export default function UserCardinfo() {
  return (
    <section className={userCardInfo.userInfo}>
      <img src="" alt="" />
      <ul>
        <li>
          <span>Name</span>
          <span>Famer's Name</span>
        </li>
        <li>
          <span>Company</span>
          <span>FamerName</span>
        </li>
        <li>
          <span>Contact</span>
          <span>
            +234986464654
            <br />
            email@site.com
          </span>
        </li>
        <li>
          <span>Contact</span>
          <span>
            +234986464654
            <br />
            email@site.com
          </span>
        </li>
      </ul>
    </section>
  );
}
