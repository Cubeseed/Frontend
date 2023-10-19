import { useState } from "react";

const useProfile = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    location: "",
    old_password: "",
    new_password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone_number: "",
    email: "",
    location: "",
    old_password: "",
    new_password: "",
  });

  //handle user input and validation
  const handleUserInputs = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    const newErrors = { ...errors };
  
    if (name === 'name') {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? 'Name must be at least 3 characters' : '';
    } else if (name === 'phone_number') {
      const cleanedValue = value.replace(/\D/g, '');
      newFormData[name] = cleanedValue.length === 10 ? `+234${cleanedValue}` : value;
    newErrors[name] = (cleanedValue.length !== 10 && cleanedValue.length !== 0) 
    || newFormData[name].length !== 13 ? 'Nigerian phone number must have 10 digits' : '';
    } else if (name === 'email') {
      newFormData[name] = value;
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email' : '';
    } else if (name === 'location') {
      newFormData[name] = value;
      newErrors[name] = !/^[a-zA-Z]+$/.test(value) ? 'Enter a valid Country' : '';
    }
  
    setFormData(newFormData);
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('/api/myaccount', {
        method: 'POST',
        body: JSON.stringify({ formData }),
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
    formData,
    handleUserInputs,
    handleSubmit,
    errors,
  };
};

export default useProfile;
  
  
