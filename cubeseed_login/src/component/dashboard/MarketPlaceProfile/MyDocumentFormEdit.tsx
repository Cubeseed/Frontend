import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import ProfileImg from "./ProfileImg"
import styles from "../../../styles/marketplaceprofile.module.css"
import useProfilePhoto from "./hooks/useProfilePhoto"
import useDocument from "./hooks/useDocument"

interface MyDocumentFormEditProps {
  userId: string
}

const MyDocumentFormEdit: React.FC<MyDocumentFormEditProps> = ({ userId }) => {
  const { docInfo } = useDocument()
  const { uploading, selectedImage, handleFileChange, error } =
    useProfilePhoto()

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.profileImg}>
          <ProfileImg
            uploading={uploading}
            selectedImage={selectedImage}
            handleFileChange={handleFileChange}
            error={error}
          />
        </div>

        <div className={styles.profileContent}>
          <div className={styles.formEditTitle}>
            <p>Basic Information</p>
            <button>Edit</button>
          </div>

          <div className={styles.formContent}>
            <p>Business tax ID: {docInfo?.business_tax_id}</p>
            <p>Employer ID number (EIN): {docInfo?.EIN}</p>
            <p>Social Security (SSN): {docInfo?.SSN}</p>
          </div>
          <hr />

          <div className={styles.formEditTitle}>
            <p>Official Documents</p>
            <button>Edit</button>
          </div>

          <div className={styles.formContent}>
            <p>File [1]: {docInfo?.EIN}</p>
            <p>File [2]: {docInfo?.SSN}</p>
          </div>
        </div>
      </div>
      <div className={styles.btnBusiness}>
        <button className={styles.btnFilled}>
          <Link href="">Update</Link>
        </button>
      </div>
    </>
  )
}

export default MyDocumentFormEdit
