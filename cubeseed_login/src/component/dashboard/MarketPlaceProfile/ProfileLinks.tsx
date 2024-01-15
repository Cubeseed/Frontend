import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"

const ProfileLinks: React.FC = () => {
  return (
    <div className={styles.accountLinks}>
      <Link href="/dashboard/marketplace_dashboard/myaccountform">
        My Account
      </Link>
      <Link href="/dashboard/marketplace_dashboard/mybusinessform">
        My Business
      </Link>
      <Link href="/dashboard/marketplace_dashboard/mydocumentform">
        My Documents
      </Link>
    </div>
  )
}

export default ProfileLinks
