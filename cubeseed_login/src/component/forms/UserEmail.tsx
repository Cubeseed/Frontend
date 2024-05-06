import { useSignUpContext } from "@/context/signup"
import { SignUpErrors } from "@cs/lib/types/index"
import React, { useEffect } from "react"
import { FaMeta } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
// import "@/styles/globals.css"

const UserEmail: React.FC = () => {
  const { email, setEmail, errors, setErrors } = useSignUpContext()
  useEffect(() => {
    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const errObj: SignUpErrors = {}

    if (!emailValidation.test(email)) {
      errObj["email"] = "Please enter a valid email"
    } else {
      errObj["email"] = ""
    }
    setErrors(errObj)
  }, [email, setErrors])

  return (
    <div className=" m-auto flex w-3/6 flex-col justify-center align-middle ">
      {/* {errors.email && <p className="signup-error">{errors.email}</p>} */}
      <div className="input-wrapper my-4">
        <input
          type="email"
          className="required:border-red-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-8 flex flex-row justify-center">
        <span className="border-2 border-solid">
          <hr />
        </span>
        <span>or</span>
        <span className="border-2 border-solid">
          <hr />
        </span>
      </div>
      <div className="mb-2 flex cursor-pointer justify-center rounded-full border-2 border-solid p-1">
        <FcGoogle />
        <button className="px-1">Sign up with Google</button>
      </div>
      <div className="mb-6 flex cursor-pointer justify-center rounded-full border-2 border-solid p-1">
        <FaMeta />
        <button className="px-1">Sign up with Meta</button>
      </div>
      <p>
        By signing up with Cubeseed you agree to the Terms and Conditions, and
        Privacy Policy.
      </p>
    </div>
  )
}

export default UserEmail
