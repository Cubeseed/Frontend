import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/marketplaceprofile.module.css';
import useProfilePhoto from './hooks/useProfilePhoto';

const ProfileImg = () => {
  const { uploading, selectedImage, handleFileChange, submitImage, errors } = useProfilePhoto();


  useEffect(() => {
    console.log('Selected Photo:',selectedImage);
  }, [selectedImage]);

  const fileData = () => {
    return (
      <form>
        <div className={styles.imageContainer}>
        {selectedImage ? (
          <Image
          src={selectedImage}
            alt="Uploaded"
            width={100}
            height={100}
          />
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
          accept='.png, .jpg, .jpeg'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="image" className={styles.uploadButton} disabled={uploading}>
         {uploading ? "Uploading.." : "Upload Image"}
        </label>
        {/* {errors.picture && <div className={styles.error}>{errors.picture}</div>}
        <button onClick={submitImage} className="absolute text-black top-10">
          Submit Image
        </button> */}
      </form>
    );
  };

  return <div>{fileData()}</div>;
};

export default ProfileImg;
