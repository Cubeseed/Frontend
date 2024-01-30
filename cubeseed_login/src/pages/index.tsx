import Navbar from "@/component/navbar/Navbar"
import ProgressBar from "@/component/progressbar/ProgressBar"
import ServiceForm from "@/component/forms/ServiceForm"
import Confirmation from "./confirmation_page/Confirmation"
import { useMultiSteps } from "@/hooks/useMultiSteps"
import Head from "next/head"
import { FormEvent } from "react"
import homeStyles from "@/styles/home.module.scss"
import styles from "@/styles/Login.module.scss"
import Carousel from "@/component/carousel/Carousel"
import UserDetailsForm from "@/component/forms/UserDetailsForm"
import UserEmail from "@/component/forms/UserEmail"
import Link from "next/link"
import React from "react"

export default function Home() {
  const stepDivs = [
    <UserEmail key={"useremail"} />,
    <UserDetailsForm key={"userdetail"} />,
    <ServiceForm key={"service"} />,
    <Confirmation key={"confirmation"} />,
  ]

  const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } =
    useMultiSteps(stepDivs)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!isLastStep) return next()
    console.log("finished")
    // alert('submitted')
  }

  return (
    <section>
      <Navbar />
      <section className={homeStyles.home}>
        <form onSubmit={handleSubmit}>
          <ProgressBar index={currentIndex} length={steps} />
          <section className={homeStyles.getStarted}>
            <h2>Sign Up to Cubeseed</h2>
          </section>
          {step}
          <p className={homeStyles.steps}>
            {currentIndex + 1} / {steps.length}
          </p>
          <button
            type="button"
            onClick={back}
            className={homeStyles.actionbutton}
          >
            back
          </button>
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
  )
}
