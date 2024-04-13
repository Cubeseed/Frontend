import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import loginoptions from "@assets/loginoptions.png"
import logo from "@assets/cubeseed.png"
import Navbar from "@/component/navbar/Navbar"

import { FcGoogle } from "react-icons/fc"
import { GoArrowLeft } from "react-icons/go"
import facebookicon from "@assets/facebook-icon.png"
import rightpane from "@assets/signup-rightpane.png"
import ProgressBar from "@/comps/ProgressBar"

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void
  onForgotPassword: () => void
}

const SignUpPage: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    if (email === "") {
      setEmailError("Please enter valid email address")
    } else {
      setEmailError("")
    }

    if (password === "") {
      setPasswordError("Wrong password")
    } else {
      setPasswordError("")
    }

    // if (email !== '' && password !== '') {
    //   // Perform login logic
    //   router.push('/farm-verification');
    // }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //onSubmit(email, password, rememberMe);
    login(email, password)
  }

  const login = async (username: string, password: string) => {
    try {
      // api url
      const response = await fetch("http://localhost:8000/api/auth/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        // Login successful
        // Redirect the user to the desired page or perform any other actions
        console.log("Login successful:", data)
      } else {
        // Login failed
        // Handle the error, e.g., show an error message to the user
        console.log("Login failed")
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Login failed", error)
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left pane */}
      <div className="flex w-8/12 flex-col items-center justify-between p-4">
        {/* "Quit" button */}
        <div className="mr-auto flex flex-row items-center pt-[5%] text-sm">
          <Link href="/">
            <div className="mr-auto flex flex-row items-center justify-center gap-2 pl-10 text-[16px] text-[#03656b]">
              <GoArrowLeft size={22} />
              <span>Quit</span>
            </div>
          </Link>
        </div>

        {/* Sign up content */}
        <div className="flex w-7/12 flex-col justify-between">
          {/* Progres bar */}
          <div className="pb-[10%] pt-[4%]">
            <ProgressBar stepsCompleted={1} totalSteps={6} />
          </div>

          <div>
            <div className="mb-10 text-[22px] font-semibold">
              Sign up to Cubeseed
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-sm border border-[#03656b] px-4 py-2 focus:outline-none"
                placeholder="Email"
              />
            </div>

            {/* Divider with "OR"  */}
            <div className="relative mt-1 flex w-full items-center py-5">
              <div className="flex-grow border-t border-[#7ea9ab]"></div>
              <span className="mx-4 flex-shrink text-[12px] text-[#7ea9ab]">
                OR
              </span>
              <div className="flex-grow border-t border-[#7ea9ab]"></div>
            </div>

            {/* Sign up with Google and Facebook buttons */}
            <div className="flex flex-col gap-1">
              <Link href="/">
                <div className="flex w-full flex-row items-center justify-center gap-2 rounded-3xl border border-[#03656b] p-2 text-center text-sm text-[#03656b]">
                  <FcGoogle size={18} />
                  <span>Sign up with Google</span>
                </div>
              </Link>
              <Link href="/">
                <div className="flex w-full flex-row items-center justify-center gap-2 rounded-3xl border border-[#03656b] p-2 text-center text-sm text-[#03656b]">
                  <Image
                    src={facebookicon}
                    height="20"
                    width="20"
                    alt="Facebook Icon"
                  />
                  <span>Sign up with Facebook</span>
                </div>
              </Link>
            </div>

            {/* Terms and conditions */}
            <div className="mt-8 text-sm">
              <div className="mb-1">
                By signing up with Cubeseed you agree to the
              </div>
              <Link href="/">
                <span className="font-semibold text-[#03656b]">
                  Terms and Conditions,
                </span>
              </Link>
              <span> and </span>
              <Link href="/">
                <span className="font-semibold text-[#03656b]">
                  Privacy Policy.
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Login button */}
        <div className="ml-auto flex flex-row items-center py-[10%] pr-12 text-sm">
          <div className="mr-2">Already a member?</div>
          <Link href="/signin">
            <span className="mr-10 font-bold text-[#03656b]">Log in</span>
          </Link>

          <Link href="/">
            <div className="w-full items-center justify-center rounded-[100px] bg-[#27797e] px-12 py-2 text-center text-white">
              Next
            </div>
          </Link>
        </div>
      </div>

      {/* Right pane */}
      <div className="w-4/12">
        <Image
          src={rightpane}
          className="h-screen w-full object-cover"
          alt="Right pane"
        />
      </div>
    </div>
  )
}

export default SignUpPage
