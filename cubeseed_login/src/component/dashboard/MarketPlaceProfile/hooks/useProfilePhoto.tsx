import React, { useState } from 'react';

const imageMimeType = new RegExp('image\/(png|jpg|jpeg)', 'i');

interface ProfilePhotoState {
  selectedImage: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitImage: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Use Promise to handle asynchronous operations
  errors: { picture: string };
  uploading: boolean;
}

const useProfilePhoto = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<ProfilePhotoState['errors']>({ picture: '' });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files![0];

    if (file.type.match(imageMimeType)) {
      if (file.size <= 2 * 1024 * 1024) {
        setSelectedImage(URL.createObjectURL(file));
        setSelectedFile(file);
      } else {
        setErrors({ picture: 'Photo size must be smaller than 2MB.' });
      }
    } else {
      setErrors({ picture: 'Please select a valid image.' });
    }
  };

  const submitImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUploading(true);

    if (!selectedFile) {
      setErrors({ picture: 'Please select an image.' });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('myImage', selectedFile);

      const response = await fetch('/api/marketplaceprofilephoto', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      const data = await response.json();
      console.log('Photo submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting photo:', error);
      alert('An error occurred while submitting the photo. Please try again later.'); // Inform the user of the error
    }

    setUploading(false);
  };

  return {
    selectedImage,
    handleFileChange,
    submitImage,
    errors,
    uploading,
  };
};

export default useProfilePhoto;