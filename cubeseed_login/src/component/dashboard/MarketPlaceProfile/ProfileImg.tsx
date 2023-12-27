import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import styles from '@/styles/marketplaceprofile.module.css';

export interface ProfileImgProps {
  uploading: boolean;
  selectedImage: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ uploading, selectedImage, handleFileChange }) => {
  const fileData = () => {
    return (
      <form>
        <div className={styles.imageContainer}>
          {selectedImage ? (
            <Image src={selectedImage} alt="Uploaded" width={100} height={100} />
          ) : (
            <div className={styles.demoImage}>
              <span className={styles.timesIcon}>×</span>
            </div>
          )}
        </div>

        <input
          type="file"
          id="image"
          name="picture"
          accept=".png, .jpg, .jpeg"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label
          htmlFor="image"
          className={`${styles.uploadButton} ${uploading ? styles.disabled : ''}`}
          aria-disabled={uploading}
        >
          {uploading ? 'Uploading..' : 'Upload Image'}
        </label>
      </form>
    );
  };

  return <div>{fileData()}</div>;
};

export default ProfileImg;
