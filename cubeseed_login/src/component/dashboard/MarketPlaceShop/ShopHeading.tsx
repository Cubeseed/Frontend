// ShopHeading.tsx
import React from "react"
import "@/styles/global.css"
import styles from "@/styles/marketplaceshoplocal.module.css"
import UserCircleImg from "./UserCircleImg"
import { FaRegMap } from "react-icons/fa"

interface ShopHeadingProps {
  shopHeading: string
  location: string
  showLocation: boolean
}

const ShopHeading: React.FC<ShopHeadingProps> = ({
  shopHeading,
  location,
  showLocation,
}) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.heading}>
        <h2>{shopHeading}</h2>
        {showLocation && (
          <div className="flex space-x-4">
            <p>{location}</p>
            <span className="mt-[-4px] text-[#002629]">
              <UserCircleImg icon={<FaRegMap />} />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopHeading
