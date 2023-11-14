import React from 'react';
import Link from "next/link";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from './ProfileImg';

const MyAccountFormEdit = ()  => {
  return (
    <>
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg />
      </div>
      <div className={styles.profileContent}>
        
          <div className={styles.formEditTitle}>
          <p>Personal Detail</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Name</p>
          <p>Phone Number</p>
          <p>Email</p>
          <p>Location</p>
        </div>
        <hr />
        <div className={styles.formEditTitle}>
          <p>Password</p>
          <p>Chnage Password</p>
          </div>
        <div className={styles.formContent}>
          <p>Password</p>
        </div>
        <hr />
        <div className={styles.formEditTitle}>
          <p>Preferred Products</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Animal feed, Cocoa Products, Coffee and tea, Frui...</p>
        </div>

        </div>
    </div>
    <div className={styles.btn}>
      <button className={styles.btnOutlined}>
        <Link href="">Delete Account</Link>
      </button>
      <button className={styles.btnFilled}>
        <Link href="/dashboard/marketplace_profile/mybusinessformedit">Next</Link>
      </button>


    </div>
    </>
  )
}
export default MyAccountFormEdit;