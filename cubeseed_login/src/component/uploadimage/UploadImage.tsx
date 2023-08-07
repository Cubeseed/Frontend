import React from "react";
import uploadImage from "@/assets/uploadImage.svg";
import styles from "@/styles/UploadImage.module.scss";
import Image from "next/image";

const UploadImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={uploadImage} alt="uploadimage" />
      </div>
      <div className={styles.uploadlink}>
        <label htmlFor="upload-cert" className={styles.uploadLabel}>
          Upload Photo
        </label>
        <input type="file" id="upload-cert" accept="image/*,.pdf" />
      </div>
    </div>
  );
};

export default UploadImage;
