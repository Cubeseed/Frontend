import { useState } from "react";

const useDocument = () => {
  const [docInfo, setDocInfo] = useState({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    category: "",
    uploadEIN: "",
    uploadSSN: ""
  });
  const [error, setError] = useState({});

  // Handle user input and validation
  const handleDocumentUpload = (e) => {
    // Validation for the document types here
    const { name, value } = e.target;

    if (name === "business_tax_id" && !/^[0-9]{9}$/.test(value)) {
      setError("business_tax_id", "Enter a Biz ID");
    }

    if (name === "EIN" && !/^[0-9]{9}$/.test(value)) {
      setError("EIN", "Enter a your EIN")
    }

    if (name === "uploadEIN" && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      error.uploadEIN = "Invalid file type. Please upload a PDF, DOC, or DOCX file.";
      return;
    }

    if (name === "uploadEIN" && file.size > 2097152) {
      error.uploadEIN = "File size too large. Please upload a file that is less than 2 MB.";
      return;
    }if (name === "uploadSSN" && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      error.uploadSSN = "Invalid file type. Please upload a PDF, DOC, or DOCX file.";
      return;
    }

    if (name === "uploadSSN" && file.size > 2097152) {
      error.uploadSSN = "File size too large. Please upload a file that is less than 2 MB.";
      return;
    }

    setDocInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    console.log(docInfo);
  };

  return {
    docInfo,
    error,
    handleDocumentUpload,
    handleDocumentSubmit,
  };
};

export default useDocument;
