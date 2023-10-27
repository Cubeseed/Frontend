import { useState } from "react";

const useDocument = () => {
  const [docInfo, setDocInfo] = useState({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: ""
  });
  const [errors, setErrors] = useState({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: ""
  });

  // Handle user input and validation
  const handleDocumentUpload = (e) => {
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
      if (files.length > 0) {
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

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    console.log(docInfo);
  };

  return {
    docInfo,
    errors,
    handleDocumentUpload,
    handleDocumentSubmit,
  };
};

export default useDocument;
