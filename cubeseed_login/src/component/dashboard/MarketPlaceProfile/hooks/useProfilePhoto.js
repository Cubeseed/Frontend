import { useState } from 'react';


const imageMimeType = /image\/(png|jpg|jpeg)/i;

const useProfilePhoto = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); 
  const [errors, setErrors] = useState({ picture: '' }); 

  const handleFileChange = (e) => {
    e.preventDefault();

    const file = e.target.files[0]; 

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

  const submitImage = async (e) => {
    e.preventDefault()
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
      console.log('Photo submitted successfully:', response.data); 
    } catch (error) {
      console.error('Error submitting photo:', error);
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
