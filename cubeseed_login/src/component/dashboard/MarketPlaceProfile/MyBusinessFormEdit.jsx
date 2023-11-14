import React from 'react';
import Link from "next/link";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from './ProfileImg';

const MyBusinessFormEdit = ()  => {
  return (
    <>
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg />
      </div>
      <div className={styles.profileContent}>
          <div className={styles.formEditTitle}>
          <p>Business Details</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Company Name</p>
          <p>Company Email</p>
          <p>Company Phone</p>
          <p>Category</p>
        </div>
        <hr />
        <div className={styles.formEditTitle}>
          <p>Business Address</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Business Address</p>
        </div>
        <hr />
        <div className={styles.formEditTitle}>
          <p>Custom Fields</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Business Website Link...</p>
        </div>

        </div>
    </div>
    <div className={styles.btnBusiness}>
      {/* <button className={styles.btnOutlined}>
        <Link href="">Delete Account</Link>
      </button> */}
      
      <button className={styles.btnFilled} style={{ marginLeft: 'auto' }} >
        <Link href="/dashboard/marketplace_profile/mydocumentformedit">Next</Link>
      </button>


    </div>
    </>
  )
}
export default MyBusinessFormEdit;