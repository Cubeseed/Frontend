import { useState, ChangeEvent, FormEvent } from "react"

interface FormData {
  name: string
  phone_number: string
  email: string
  location: string
  old_password: string
  new_password: string
}

interface Errors {
  name: string
  phone_number: string
  email: string
  location: string
  old_password: string
  new_password: string
}

const useProfile = () => {
  const phoneRegex = /^\+234[789]\d{9}$/

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone_number: "",
    email: "",
    location: "",
    old_password: "",
    new_password: "",
  })

  const [errors, setErrors] = useState<Errors>({
    name: "",
    phone_number: "",
    email: "",
    location: "",
    old_password: "",
    new_password: "",
  })

  const handleUserInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newFormData = { ...formData }
    const newErrors = { ...errors }

    if (name === "name") {
      newFormData[name] = value
      newErrors[name] =
        value.length < 3 ? "Name must be at least 3 characters" : ""
    } else if (name === "phone_number") {
      const cleanedValue = value.replace(/\D/g, "")
      newFormData[name] =
        cleanedValue.length === 10 ? `+234${cleanedValue}` : value
      newErrors[name] = !phoneRegex.test(newFormData[name])
        ? "Do not include the first 0 digit"
        : ""
    } else if (name === "email") {
      newFormData[name] = value
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? "Enter a valid email"
        : ""
    } else if (name === "location") {
      newFormData[name] = value
      newErrors[name] = !/^[a-zA-Z]+$/.test(value)
        ? "Enter a valid Country"
        : ""
    } else if (name === "old_password" || name === "new_password") {
      newFormData[name] = value
      newErrors[name] =
        value.length < 8 ? "Password must be at least 8 characters" : ""
    }

    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/myaccount", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to submit form data")
      }
      const data = await response.json()
      alert("Successfully submitted")
      console.log("Form data submitted successfully:", data)
    } catch (error) {
      console.error("Error submitting form data:", error)
    }
  }

  return {
    formData,
    handleUserInputs,
    handleSubmit,
    errors,
  }
}

export default useProfile
