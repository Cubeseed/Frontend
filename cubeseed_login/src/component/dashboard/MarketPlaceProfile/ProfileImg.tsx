import React, { ChangeEvent } from "react"
import Image from "next/image"
import styles from "@/styles/marketplaceprofile.module.css"

interface ProfileImgProps {
  uploading: boolean
  selectedImage: string | null
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: string
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  uploading,
  selectedImage,
  handleFileChange,
  error,
}) => {
  return (
    <form>
      <div className={styles.imageContainer}>
        {selectedImage ? (
          <div className={styles.circularImage}>
            <Image
              src={selectedImage}
              alt="Uploaded"
              width={100}
              height={100}
            />
          </div>
        ) : (
          <div className={styles.demoImage}>
            <span className={styles.timesIcon}>×</span>
          </div>
        )}
      </div>

      <label
        htmlFor="image"
        className={`${styles.uploadButton} ${uploading ? styles.disabled : ""}`}
      >
        {error && <p className={styles.error}>Invalid Image</p>}
        {uploading ? "Uploading.." : "Upload Image"}
      </label>

      <input
        type="file"
        id="image"
        name="picture"
        accept=".png, .jpg, .jpeg"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </form>
  )
}

export default ProfileImg
