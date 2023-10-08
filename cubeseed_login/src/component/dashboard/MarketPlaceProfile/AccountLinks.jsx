import React from 'react';
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"


const AccountLinks = () => {
  return (
    <div className={styles.accountLinks}>
    <Link href="/myacct">My Account</Link>
    <Link href="/mybusi">My Business</Link>
    <Link href="/mydocs">My Documents</Link>
  </div>
  )
}

export default AccountLinks;
