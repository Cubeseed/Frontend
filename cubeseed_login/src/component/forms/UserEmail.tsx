import { useSignUpContext } from "@/context/signup"
import React from "react"
import { FaMeta } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
// import "@/styles/globals.css"

const EmailRegex = /^\S+@\S+\.\S+$/
const UserEmail: React.FC = () => {
  const { email, setEmail, errors, setErrors } = useSignUpContext()
  const handleEmailChange = (e: { target: { value: any } }) => {
    const { value } = e.target
    setEmail(value)

    // Validate email immediately on input change
    validateEmail(value)
  }

  const validateEmail = (value: string) => {
    const errObj = { ...errors }

    if (!value.trim()) {
      errObj["email"] = "email is required"
    } else if (!EmailRegex.test(value)) {
      errObj["email"] = "Please enter a valid email"
    } else {
      errObj["email"] = "" // Clear error if email is valid
    }

    setErrors(errObj)
  }

  return (
    <div className=" m-auto flex flex-col justify-center p-4 align-middle sm:w-full md:w-1/2 ">
      <h1 className="signup-text  mb-4 mt-8 text-2xl">Sign up to Cubeseed</h1>
      <div className="input-wrapper my-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={`mb-1 border ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-2 flex items-center justify-center">
        <span className=" w-full border-t border-solid border-gray-300"></span>
        <span className="mx-2">OR</span>
        <span className="w-full border-t border-solid border-gray-300"></span>
      </div>
      <div className="social-signin mb-2 flex justify-center gap-2 rounded-full border-2 border-solid p-1 align-bottom">
        <FcGoogle />
        <button className="">Sign up with Google</button>
      </div>
      <div className="social-signin mb-8 flex justify-center gap-2 rounded-full border-2 border-solid p-1 align-bottom">
        <FaMeta />
        <button className="">Sign up with Meta</button>
      </div>
      <p className="terms mb-10 mt-4">
        By signing up with Cubeseed you agree to the
        <span className="policy px-1">Terms and Conditions,</span>and
        <span className="policy px-1">Privacy Policy</span>.
      </p>
    </div>
  )
}

export default UserEmail
