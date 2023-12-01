
import Navbar from "@/component/navbar/Navbar"
import ProgressBar from "@/component/progressbar/ProgressBar"
import ServiceForm from "@/component/forms/ServiceForm"
import Confirmation from "./confirmation_page/Confirmation"
import { useMultiSteps } from "@/hooks/useMultiSteps"
import Head from "next/head"
import { FormEvent } from "react"
import homeStyles from "@/styles/home.module.scss"
import Carousel from "@/component/carousel/Carousel"
import UserDetailsForm from "@/component/forms/UserDetailsForm"
import Link from "next/link"
import React from "react"
import Profilepage from "./dashboard/profile"
import MobileNavbar from "@/component/MobileComponents/MobileNavbar"
import MobileStyles from "@/styles/loginpage.module.scss"

export default function Home() {
  const stepDivs = [
    <ServiceForm key={"service"} />,
    <UserDetailsForm key={"userdetail"} />,
    <Confirmation key={"confirmation"} />,

    //<div>three</div>,
    //<div>four</div>,
  ]

  const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } =
    useMultiSteps(stepDivs)

  console.log(`first ${isFirstStep}`, `last ${isLastStep}`)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!isLastStep) return next()
    console.log("finished")
    // alert('submitted')
  }

  const sendToLogin = () => {
    // alert("asd");
    <Link href="/login_page"></Link>
  }

  return (
    <>
      <section className={homeStyles.mainContainer}>
        <Navbar />
        <section className={homeStyles.home}>
          <form onSubmit={handleSubmit}>
            <ProgressBar index={currentIndex} length={steps} />
            <section className={homeStyles.getStarted}>
              <h2>Sign Up</h2>
              <p>Lets get started. Which one of these best describes you?</p>
            </section>
            {step}
            <p className={homeStyles.steps}>
              {currentIndex + 1} / {steps.length}
            </p>
            {!isLastStep ? (
              <button
                type="button"
                onClick={next}
                className={homeStyles.actionbutton}
              >
                next
              </button>
            ) : (
              <button className={homeStyles.actionbutton}>submit</button>
            )}
            <button
              type="button"
              onClick={back}
              className={homeStyles.actionbutton}
            >
              back
            </button>
          </form>
          <Carousel />
        </section>
        <div className={homeStyles.member}>
          <div>
            Already a member?{" "}
            <Link className={homeStyles.memberlink} href="/">
              Log In
            </Link>
          </div>
        </div>
      </section>
      <section className={homeStyles.mobileContainer}>
        <div className={homeStyles.mobileInner}>
           <MobileNavbar />
           <div className={homeStyles.mobileLanding}>
                <div className={homeStyles.mobileOptions}>
                  <p>About</p>
                  <p>Features</p>
                  <p>Contact us</p>
                </div>
                <div className={homeStyles.mobileButtons}>
                  <button><Link href='/login_page/login-page'>Login</Link></button>
                  <button><Link href='/signup'>Sign Up</Link></button>
                </div>
           </div>
        </div>
      </section>
    </>
  )
}
