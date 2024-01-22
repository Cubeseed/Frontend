import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"

const ProfileLinks: React.FC<{ userId?: string }> = ({ userId = "" }) => {
  return (
    <div className={styles.accountLinks}>
      <Link href={`/dashboard/marketplace_dashboard/${userId}/myaccountform`}>
        My Account
      </Link>
      <Link href={`/dashboard/marketplace_dashboard/${userId}/mybusinessform`}>
        My Business
      </Link>
      <Link href={`/dashboard/marketplace_dashboard/${userId}/mydocumentform`}>
        My Document
      </Link>
    </div>
  )
}

export default ProfileLinks
