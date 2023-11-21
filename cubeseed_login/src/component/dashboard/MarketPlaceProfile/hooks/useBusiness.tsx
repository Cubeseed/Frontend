import { useState, ChangeEvent } from "react";

interface BusinessFormData {
  company_name: string;
  company_email: string;
  company_phone: string;
  category: string;
  business_address: string;
  custom_fields: string;
}

interface BusinessErrors {
  company_name: string;
  company_email: string;
  company_phone: string;
  location: string;
  category: string;
  business_address: string;
  custom_fields: string;
}

interface BusinessHook {
  bizData: BusinessFormData;
  errors: BusinessErrors;
  handleBizInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessSubmit: (e: React.FormEvent) => Promise<void>;
}

const useBusiness = (): BusinessHook => {
  const phoneRegex = /^\+234[789]\d{9}$/;
  const [bizData, setBizData] = useState<BusinessFormData>({
    company_name: "",
    company_email: "",
    company_phone: "",
    category: "",
    business_address: "",
    custom_fields: ""
  });

  const [errors, setErrors] = useState<BusinessErrors>({
    company_name: "",
    company_email: "",
    company_phone: "",
    location: "",
    category: "",
    business_address: "",
    custom_fields: ""
  });

  const handleBizInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...bizData };
    const newErrors = { ...errors };

    if (name === 'company_name') {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? 'Company name must be at least 3 characters' : '';
    } else if (name === 'company_email') {
      newFormData[name] = value;
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email' : '';
    }else if (name === 'company_phone') {
      const cleanedValue = value.replace(/\D/g, '');
      newFormData[name] = cleanedValue.length === 10 ? `+234${cleanedValue}` : value;
      newErrors[name] = !phoneRegex.test(newFormData[name]) ? 'Do not include the first 0 digit' : '';
    } else if (name === 'category') {
      newFormData[name] = value;
      newErrors[name] = value === "Select" ? "Select a category" : "";
    } else if (name === 'business_address') {
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

  const handleBusinessSubmit = async (e: React.FormEvent) => {
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
      alert("Successfully Submitted")
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
