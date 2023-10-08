import React,{ useState } from "react";

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
    const newErrors = { ...errors };
   
    if (name === "name" && value.length < 3) {
     newErrors[name] = "Name length must be greater than or equal to 3 characters";
      } else {
        newErrors[name] = "";
      }
    if (name === "phone_number" && !/^([0-9]+)(\(\w+\))?$/) {
      setErrors("Invalid phone number");
    } else {
      newErrors[name] = "";
    }
    
    if (name === "email" && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
        setErrors("Enter a valid Email")
    }else {
      newErrors[name] = "";
    }

    if (name === "location" && !/^[a-zA-Z]+$/.test(value)) {
      setErrors("Enter a valid Country")
    }else {
      newErrors[name] = "";
    }
     setErrors(newErrors);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();
    console.log(formData);
  };

  // const maskPassword = (value) => {
  //   if (value === undefined) {
  //     return "";
  //   }
  //   return value.replace(/./g, "*");
  // };


  

  return {
    formData,
    handleUserInputs,
    handleSubmit,
    errors,
  };
};

export default useProfile;
