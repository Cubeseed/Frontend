import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileImg from "./ProfileImg";
import styles from "../../../styles/marketplaceprofile.module.css"

const MyBusinessFormEdit = ({ userId }) => {
  const [profileImgData, setProfileImgData] = useState({});
  const [docData, setDocData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileImgResponse, docResponse] = await Promise.all([
          axios.get(`https://userprofilephoto/${userId}`),
          axios.get(`https://usersdoc/${userId}`),
        ]);

        setProfileImgData(profileImgResponse.data);
        setDocData(docResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.profileImg}>
          <ProfileImg data={profileImgData} />
        </div>
        <div className={styles.profileContent}>
          <div className={styles.formEditTitle}>
            <p>Basic Information</p>
            <button>Edit</button>
          </div>
          <div className={styles.formContent}>
            <p>Business tax ID: {docData.business_tax_id}</p>
            <p>Employer ID number (EIN): {docData.EIN}</p>
            <p>Social Security (SSN): {docData.SSN}</p>
          </div>
          <hr />
          <div className={styles.formEditTitle}>
            <p>Official Documents</p>
            <button>Edit</button>
          </div>
          <div className={styles.formContent}>
            <p>File [1]: {docData.file1}</p>
            <p>File [2]: {docData.file2}</p>
          </div>
        </div>
      </div>
      <div className={styles.btnBusiness}>
        <button className={styles.btnFilled}>
          <Link href="">Update</Link>
        </button>
      </div>
    </>
  );
};

export default MyBusinessFormEdit;
