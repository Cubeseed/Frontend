import React, { useState } from 'react';
import Image from 'next/image';
import MarketPlaceProfileImg from '../../../api/marketplaceprofileimg';
import styles from '@/styles/marketplaceprofile.module.css';

const ProfileImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        setSelectedFile(file);
      } else {
        alert('Please select a file smaller than 2MB.');
      }
    }
  };

  const onUploadButtonClick = () => {
    if (selectedFile) {
      MarketPlaceProfileImg(selectedFile)
        .then(response => {
          console.log('Image uploaded successfully:', response);
          // Additional actions after successful upload
        })
        .catch(error => {
          console.error('Error uploading image:', error.message);
          // Handle error
        });
    } else {
      alert('Please select a file.');
    }
  };

  const fileData = () => {
    return (
      <div>
        <div className={styles.imageContainer}>
          {selectedFile ? (
            <Image src={URL.createObjectURL(selectedFile)} alt="Uploaded" width={100} height={100} />
          ) : (
            <div className={styles.demoImage}>
              <span className={styles.timesIcon}>×</span>
            </div>
          )}
        </div>
       
      <input type="file" id="fileInput" style={{ display: 'none' }} onChange={onFileChange} />
      <label htmlFor="fileInput" className={styles.uploadButton}>
        Upload Image
      </label>
      
       
      </div>
      
    );
  };

  return <div>{fileData()}</div>;
};

export default ProfileImg;
