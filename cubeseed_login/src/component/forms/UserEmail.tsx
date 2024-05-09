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
    <div className=" m-auto flex w-3/6 flex-col justify-center align-middle ">
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
      <div className="align-center my-auto flex justify-center">
        <span className="line">
          <hr />
        </span>
        <span>OR</span>
        <span className="line">
          <hr />
        </span>
      </div>
      <div className="social-signin mb-2 flex justify-center gap-2 rounded-full border-2 border-solid p-1 align-bottom">
        <FcGoogle />
        <button className="">Sign up with Google</button>
      </div>
      <div className="social-signin mb-8 flex justify-center gap-2 rounded-full border-2 border-solid p-1 align-bottom">
        <FaMeta />
        <button className="">Sign up with Meta</button>
      </div>
      <p className="mb-10 mt-4">
        By signing up with Cubeseed you agree to the{" "}
        <span>Terms and Conditions</span> , and
        <span>Privacy Policy</span>.
      </p>
    </div>
  )
}

export default UserEmail
