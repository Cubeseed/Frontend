import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"

const ProfileLinks: React.FC = () => {
  return (
    <div className={styles.accountLinks}>
      <Link href="/dashboard/profiles/personalprofile">My Account</Link>
      <Link href="/dashboard/profilesbusiness">My Business</Link>
      <Link href="/dashboard/profiles/document">My Documents</Link>
    </div>
  )
}

export default ProfileLinks
