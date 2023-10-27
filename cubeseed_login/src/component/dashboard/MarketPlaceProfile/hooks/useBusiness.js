import React,{ useState } from "react";

const useBusiness = () => {
  const [bizData, setBizData] = useState({
    company_name: "",
    company_email: "",
    company_phone: "",
    category: "",
    business_address: "",
    custom_fields: ""
  });
  const [errors, setErrors] = useState({
    company_name: "",
    company_email: "",
    company_phone: "",
    location: "",
    category: "",
    business_address: "",
    custom_fields: ""
  });
  
  const handleBizInputs = (e) => {
    // e.preventDefault();
      const { name, value } = e.target;
      const newFormData = { ...bizData };
      const newErrors = { ...errors };
    
      if (name === 'company_name') {
        newFormData[name] = value;
        newErrors[name] = value.length < 3 ? 'Company name must be at least 3 characters' : '';
      } else if (name === 'company_email') {
        newFormData[name] = value;
        newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email' : '';
      } else if (name === 'company_phone') {
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = cleanedValue.length === 10 ? `+234${cleanedValue}` : value;
        newFormData[name] = formattedValue;
        newErrors[name] = (cleanedValue.length !== 10 && cleanedValue.length !== 0) 
          || (formattedValue.length !== 13) ? 'Nigerian phone number must have 10 digits' : '';      
      } else if (e.target.id === "outlined-select-category") {
        newFormData["category"] = value;
        newErrors["category"] = value === "Select" ? "Select a category" : "";
      }  else if (name === 'business_address') {
        newFormData[name] = value;
        newErrors[name] = value.length > 128 ? 'Business Address should be 128 characters long' : '';
      } else if (name === "custom_fields") {
        newFormData[name] = value;
        newErrors[name] =
          !/^(https?:\/\/)?[^\s/$.?#].[^\s]*$/.test(value) ? "Enter a valid website URL" : "";
      }
    
      setBizData(newFormData);
      setErrors(newErrors);
    };
    

  const handleBusinessSubmit = async (e) => {
   e.preventDefault();

   try {
     const response = await fetch('/api/mybusiness', {
       method: 'POST',
       body: JSON.stringify({ bizData }),
       headers: {
         'Content-Type': 'application/json'
       }
     });
 
     if (!response.ok) {
       throw new Error('Failed to submit form data');
     }
     const data = await response.json();
     console.log('Form data submitted successfully:', data);
   } catch (error) {
     console.error('Error submitting form data:', error);
   }
  };


  return {
    bizData,
    handleBizInputs,
    handleBusinessSubmit,
    errors,
  };
};

export default useBusiness;
