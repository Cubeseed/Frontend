import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"

const ProfileIdLinks: React.FC<{ userId?: string }> = ({ userId = "" }) => {
  return (
    <div className={styles.accountLinks}>
      <Link href={`/dashboard/profiles/${userId}/`}>My Account</Link>
      <Link href={`/dashboard/profiles/${userId}/business`}>My Business</Link>
      <Link href={`/dashboard/profiles/${userId}/document`}>My Document</Link>
    </div>
  )
}

export default ProfileIdLinks
