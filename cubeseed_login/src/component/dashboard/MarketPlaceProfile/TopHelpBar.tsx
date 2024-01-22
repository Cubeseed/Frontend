import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"

const TopHelpBar: React.FC = () => {
  return (
    <div className={styles.helpBar}>
      <Link href="/help">Help</Link>
      <Link href="/contact">Contact us</Link>
    </div>
  )
}

export default TopHelpBar
