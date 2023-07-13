import upload from '@/assets/upload.png';
import { useEffect, useState } from "react";
import styles from '@/styles/upload.module.scss'

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState("");
    

    useEffect(() => {}, [selectedFile]);


    return (
    <div className={styles.main}>
        <form className={styles.verificationContainer}>
        <div className={styles.verification}>
            <div className={styles.uploadCertificate}>
                <div className={styles.formGroup}>
                <img src={upload.src} alt="" />
                <div className={styles.selectedFile}>
                    <p className={styles.p}>
                    {selectedFile ? `Selected File: ${selectedFile}` : " "}
                    </p>
                </div>
                <span>Supports: JPG, PNG, PDF</span>
                <label
                    htmlFor="upload-cert"
                    className={styles.uploadLabel}
                >
                    Upload from Device
                    <input
                    type="file"
                    id="upload-cert"
                    accept="image/*,.pdf"
                    onChange={(e) => setSelectedFile(e.target.value)}
                    />
                </label>
                </div>
            </div>
        </div>
      </form>
    </div>
    )

}