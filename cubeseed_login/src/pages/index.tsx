import Carousel from "@/component/carousel/Carousel"
import ServiceForm from "@/component/forms/ServiceForm"
import UserDetailsForm from "@/component/forms/UserDetailsForm"
import UserEmail from "@/component/forms/UserEmail"
import Navbar from "@/component/navbar/Navbar"
import ProgressBar from "@/component/progressbar/ProgressBar"
import { useMultiSteps } from "@/hooks/useMultiSteps"
import homeStyles from "@/styles/home.module.scss"
import { FormEvent } from "react"
import Confirmation from "./confirmation_page/Confirmation"

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
        <section className="h-[60%]">
          <form onSubmit={handleSubmit}>
            <ProgressBar index={currentIndex} length={steps} />
            {step}
            {/* <p className={homeStyles.steps}>
            {currentIndex + 1} / {steps.length}
          </p> */}
            <div className={homeStyles.actionbutton}>
              <button
                type="button"
                onClick={back}
                className={homeStyles.stepbutton}
              >
                back
              </button>
              {!isLastStep ? (
                <button
                  type="button"
                  onClick={next}
                  className={homeStyles.stepbutton}
                >
                  next
                </button>
              ) : (
                <button className={homeStyles.stepbutton}>submit</button>
              )}
            </div>
          </form>
        </section>
        <Carousel />
      </section>
    </section>
  )
}
