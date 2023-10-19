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
          <p>Basic Information</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>Business tax ID: ADCGFGHI12346</p>
          <p>Employer ID number(EIN): ADCGFGHI12346</p>
          <p>Social Security (SSN): ADCGFGHI12346</p>
        </div>
        <hr />
        <div className={styles.formEditTitle}>
          <p>Official Documents</p>
          <p>Edit</p>
          </div>
        <div className={styles.formContent}>
          <p>File [1]</p>
          <p>File [2]</p>
        </div>
        </div>
    </div>
    <div className={styles.btnBusiness}>
     
      <button className={styles.btnFilled}>
        <Link href="">Check Status</Link>
      </button>


    </div>
    </>
  )
}
export default MyBusinessFormEdit;