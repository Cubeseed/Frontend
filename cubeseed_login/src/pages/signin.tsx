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

const SignInPage: React.FC<LoginFormProps> = ({
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
      <div className="flex w-8/12 flex-col items-center justify-center p-4">
        {/* Sign up content */}
        <div className="flex w-7/12 flex-col">
          <div>
            <div className="mb-10 text-[22px] font-semibold">
              Sign in to Cubeseed
            </div>

            {/* Email & password input */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-sm border border-[#03656b] px-4 py-2 focus:outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-sm border border-[#03656b] px-4 py-2 focus:outline-none"
                placeholder="Password"
              />
            </div>

            {/* Remember me */}
            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4"
                />
                <label htmlFor="myCheckbox" className="ml-2">
                  Remember me
                </label>
              </div>
              <Link href="/">
                <span className="font-bold text-[#03656b]">
                  Forgot Password?
                </span>
              </Link>
            </div>

            {/* Sign in button */}
            <div className="mt-8 flex flex-col items-center justify-center text-sm">
              <Link href="/" className="mb-4">
                <div className="w-full items-center justify-center rounded-[30px] bg-[#27797e] px-[140px] py-2 text-center text-white">
                  Sign in
                </div>
              </Link>

              <div className="flex flex-row">
                <div className="mr-2">Not a member yet?</div>
                <Link href="/signup">
                  <span className="font-bold text-[#03656b]">Sign up</span>
                </Link>
              </div>
            </div>

            {/* Divider with "OR"  */}
            <div className="relative mt-1 flex w-full items-center py-5">
              <div className="flex-grow border-t border-[#7ea9ab]"></div>
              <span className="mx-4 flex-shrink text-[12px] text-[#7ea9ab]">
                OR
              </span>
              <div className="flex-grow border-t border-[#7ea9ab]"></div>
            </div>

            {/* Sign in with Google and Facebook buttons */}
            <div className="flex flex-col gap-1">
              <Link href="/">
                <div className="flex w-full flex-row items-center justify-center gap-2 rounded-3xl border border-[#03656b] p-2 text-center text-sm text-[#03656b]">
                  <FcGoogle size={18} />
                  <span>Sign in with Google</span>
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
                  <span>Sign in with Facebook</span>
                </div>
              </Link>
            </div>
          </div>
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

export default SignInPage

/**
 * <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.logincontainer}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" className={styles.logoimg} />
        </div>
        <div className={styles.title}>
          <h1 className={styles.titletext}>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginform}>
          <div className={styles.inputwrap}>
            <label className={styles.emaillabel}>Email:</label>

            <input
              className={styles.emailinput}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <div className={styles.emailerror}>{emailError}</div>
            )}
          </div>

          <div className={styles.inputwrap}>
            <label className={styles.passwordlabel}>Password:</label>
            <input
              className={styles.passwordinput}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <div className={styles.passworderror}>{passwordError}</div>
            )}
          </div>

          <div className={styles.after_input}>
            <div className={styles.inputwrap_check}>
              <label className={styles.checklabel}>
                <input
                  className={styles.checkinput}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>

            <div className={styles.forgotpassword}>
              <a
                href="#"
                onClick={onForgotPassword}
                className={styles.forgotlink}
              >
                Forgot password?
              </a>
            </div>
          </div>

          <Link href="#" legacyBehavior className={styles.loginbtn}>
            <a>
              <button
                className={styles.button}
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
            </a>
          </Link>
          <div className={styles.line}>
            <hr />
          </div>

          <div className={styles.or}>OR</div>
          <div className={styles.loginoptions}>
            <Link href="/redirect_page/redirect-page">
              <Image
                src={loginoptions}
                alt="loginoptions"
                className={styles.optionsimg}
              />
            </Link>
          </div>

          <div className={styles.new}>
            <p className={styles.new_text}>New to CubeSeed? Get Started</p>
          </div>

          <div className={styles.links}>
            <a href="#help" className={styles.helplink}>
              Help
            </a>
            <a href="#privacy" className={styles.privacylink}>
              Privacy
            </a>
            <a href="#terms" className={styles.termslink}>
              Terms
            </a>
          </div>
        </form>
      </div>
    </div>
 */
