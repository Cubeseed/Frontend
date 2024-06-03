"use client"

import { useSignUpContext } from "@/context/signup"
import { useEffect } from "react"
import { SignUpErrors } from "@cs/types"

export default function UserDetailsForm() {
  const {
    fullName,
    setFullName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    address,
    setAddress,
    errors,
    setErrors,
  } = useSignUpContext()

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    switch (name) {
      case "fullName":
        setFullName(value)
        break
      case "password":
        setPassword(value)
        break
      case "confirmPassword":
        setConfirmPassword(value)
        break
      case "address":
        setAddress(value)
        break
      default:
        break
    }
  }

  useEffect(() => {
    const errObj: SignUpErrors = {}

    if (fullName.trim() === "") {
      errObj["fullName"] = "Please enter your full name"
    } else {
      errObj["fullName"] = ""
    }

    if (!address.trim()) {
      errObj["address"] = "Please enter your address"
    } else {
      errObj["address"] = ""
    }

    if (password.trim().length < 8) {
      errObj["password"] = "Password must be at least 8 characters long"
    } else {
      errObj["password"] = ""
    }

    if (password !== confirmPassword) {
      errObj["confirmPassword"] = "Passwords do not match"
    } else {
      errObj["confirmPassword"] = ""
    }

    setErrors(errObj)
  }, [fullName, password, confirmPassword, address, setErrors])

  return (
    <div className=" m-auto flex w-3/6 flex-col justify-center align-middle">
      <div className="input-wrapper my-4">
        {errors.fullName && <p className="signup-error">{errors.fullName}</p>}
        <input
          value={fullName}
          placeholder="Full name"
          name="fullName"
          onChange={handleInputChange}
          type="text"
        />
      </div>

      <div className="input-wrapper my-4">
        {errors.address && <p className="signup-error">{errors.address}</p>}
        <input
          type="text"
          placeholder="Address"
          value={address}
          name="address"
          onChange={handleInputChange}
        />
      </div>

      <div className="input-wrapper my-4">
        {errors.password && <p className="signup-error">{errors.password}</p>}
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
      </div>

      <div className="input-wrapper my-4">
        {errors.confirmPassword && (
          <p className="signup-error">{errors.confirmPassword}</p>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}
