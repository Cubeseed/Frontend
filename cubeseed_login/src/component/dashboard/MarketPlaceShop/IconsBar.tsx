import React from "react"
import { FaRegHeart, FaRegBell, FaRegEnvelope } from "react-icons/fa"

import "@/styles/global.css"
import styles from "@/styles/marketplaceshop.module.css"
import UserCircleImg from "./UserCircleImg"
import { FaRegUserCircle } from "react-icons/fa"

const ShopIconBar: React.FC = () => {
  return (
    <div className={styles.shopIconBar}>
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 rounded-full bg-[#d0dad7] p-3">
          <FaRegHeart className="h-5 w-5" />
          Favorite
        </button>

        <FaRegBell className={styles.searchIcon} />
        <FaRegEnvelope className={styles.searchIcon} />
        <UserCircleImg icon={<FaRegUserCircle />} />
      </div>
    </div>
  )
}

export default ShopIconBar
