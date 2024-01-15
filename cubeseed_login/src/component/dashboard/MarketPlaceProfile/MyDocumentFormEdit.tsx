import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import ProfileImg, { ProfileImgProps } from "./ProfileImg"
import styles from "../../../styles/marketplaceprofile.module.css"

interface DocData {
  business_tax_id: string
  EIN: string
  SSN: string
  file1: string
  file2: string
}

interface MyDocumentFormEditProps {
  userId: string
}

const MyDocumentFormEdit: React.FC<MyDocumentFormEditProps> = ({ userId }) => {
  const [profileImgData, setProfileImgData] = useState<ProfileImgProps>({
    uploading: false,
    selectedImage: null,
    handleFileChange: () => {},
  })
  const [docData, setDocData] = useState<DocData>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileImgResponse, docResponse] = await Promise.all([
          axios.get<ProfileImgProps>(`https://userprofilephoto/${userId}`),
          axios.get<DocData>(`https://usersdoc/${userId}`),
        ])

        setProfileImgData(profileImgResponse.data)
        setDocData(docResponse.data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId]) // Update data based on userId changes

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // Verify the existence of userId before proceeding
  if (!userId) {
    return <div>Error: Missing user ID</div>
  }

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.profileImg}>
          <ProfileImg {...profileImgData} handleFileChange={() => {}} />
        </div>

        <div className={styles.profileContent}>
          <div className={styles.formEditTitle}>
            <p>Basic Information</p>
            <button>Edit</button>
          </div>

          <div className={styles.formContent}>
            <p>Business tax ID: {docData?.business_tax_id}</p>
            <p>Employer ID number (EIN): {docData?.EIN}</p>
            <p>Social Security (SSN): {docData?.SSN}</p>
          </div>
          <hr />

          <div className={styles.formEditTitle}>
            <p>Official Documents</p>
            <button>Edit</button>
          </div>

          <div className={styles.formContent}>
            <p>File [1]: {docData?.file1}</p>
            <p>File [2]: {docData?.file2}</p>
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
