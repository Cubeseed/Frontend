import { useState, useEffect, ChangeEvent } from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;
const allowedDocumentTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

interface DocumentInfo {
  business_tax_id: string;
  EIN: string;
  SSN: string;
  uploadEIN: string;
  uploadSSN: string;
}

interface DocumentErrors {
  business_tax_id: string;
  EIN: string;
  SSN: string;
  uploadEIN: string;
  uploadSSN: string;
}

interface DocumentHook {
  docInfo: DocumentInfo;
  errors: DocumentErrors;
  uploading: boolean;
  selectedImage: string;
  photoErrors: { picture: string };
  handleDocumentUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDocumentSubmit: (e: React.FormEvent) => Promise<void>;
}

const useDocument = (): DocumentHook => {
  const [docInfo, setDocInfo] = useState<DocumentInfo>({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: ""
  });

  const [errors, setErrors] = useState<DocumentErrors>({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: ""
  });

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoErrors, setPhotoErrors] = useState({ picture: '' });

  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    if (name === "business_tax_id") {
      if (!/^[0-9A-Za-z]+$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          business_tax_id: "Should contain both letters and numbers"
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, business_tax_id: "" }));
      }
    }

    if (name === "EIN" || name === "SSN") {
      if (!/^\d+$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Should be purely numbers"
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    }

    if (name === "uploadEIN" || name === "uploadSSN") {
      const allowedFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (files && files.length > 0) {
        const file = files[0];
        if (!allowedFileTypes.includes(file.type)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Invalid file type. Please upload a PDF, DOC, or DOCX file."
          }));
        } else if (file.size > 2097152) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "File size too large. Please upload a file that is less than 2 MB."
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
      }
    }

    setDocInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];

    if (file && file.type.match(imageMimeType)) {
      if (file.size <= 2 * 1024 * 1024) {
        setSelectedImage(URL.createObjectURL(file));
        setSelectedFile(file);
        setPhotoErrors({ picture: '' });
      } else {
        setPhotoErrors({ picture: 'Photo size must be smaller than 2MB.' });
      }
    } else if (file && allowedDocumentTypes.includes(file.type)) {
      const name = e.target.name;
      if (file.size > 2097152) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "File size too large. Please upload a file that is less than 2 MB."
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    } else {
      setPhotoErrors({ picture: 'Please select a valid image.' });
    }
  };

  const handleDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error !== "")) {
      console.error("Document form has validation errors. Please fix them before submitting.");
      return;
    }
    if (Object.values(photoErrors).some((error) => error !== "")) {
      console.error("Photo form has validation errors. Please fix them before submitting.");
      return;
    }
    try {
      const documentResponse = await fetch("https://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/businessprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(docInfo),
      });

      if (!documentResponse.ok) {
        console.error("Failed to update user profile details");
        console.log(docInfo);
        return;
      }

      const photoFormData = new FormData();
      photoFormData.append('myImage', selectedFile as Blob);
      const photoResponse = await fetch('https://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/userprofilephoto', {
        method: 'POST',
        body: photoFormData,
      });

      if (!photoResponse.ok) {
        console.error("Failed to update profile picture");
        console.log(photoFormData);
        return;
      }

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    console.log('Selected Photo:', selectedImage);
  }, [selectedImage]);

  return {
    docInfo,
    errors,
    uploading,
    selectedImage,
    handleFileChange,
    photoErrors,
    handleDocumentUpload,
    handleDocumentSubmit
  };
};

export default useDocument;
