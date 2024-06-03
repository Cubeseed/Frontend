import { FormEvent } from "react"
import { useMultiSteps } from "@/hooks/useMultiSteps"
import Navbar from "@/component/navbar/Navbar"
import UserEmail from "@/component/forms/UserEmail"
import ServiceForm from "@/component/forms/ServiceForm"
import UserDetailsForm from "@/component/forms/UserDetailsForm"
import ProgressBar from "@/component/progressbar/ProgressBar"
import Carousel from "@/component/carousel/Carousel"
import homeStyles from "@/styles/home.module.scss"

export default function Home() {
  const stepDivs = [
    <UserEmail key="useremail" />,
    <ServiceForm key="service" />,
    <UserDetailsForm key="userdetail" />,
    // <Confirmation key="confirmation" />,
  ]

  const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } =
    useMultiSteps(stepDivs)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!isLastStep) {
      return next()
    }
    console.log("finished")
    // alert('submitted')
  }

  return (
    <section>
      <Navbar />
      <section className="flex size-full flex-row">
        <section className="m-auto size-full min-h-screen">
          <form onSubmit={handleSubmit}>
            <ProgressBar index={currentIndex} length={steps} />
            {step}
            <div className={homeStyles.actionbutton}>
              {isFirstStep ? (
                <div className="terms ml-auto px-6">
                  Already a member? <span className="login pl-1">Log in</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={back}
                  className={homeStyles.stepbutton}
                >
                  back
                </button>
              )}

              {!isLastStep ? (
                <button
                  type="button"
                  onClick={next}
                  className={homeStyles.stepbutton}
                >
                  next
                </button>
              ) : (
                <button type="submit" className={homeStyles.stepbutton}>
                  submit
                </button>
              )}
            </div>
          </form>
        </section>
        <section className="hidden w-full md:block md:w-2/3">
          <Carousel />
        </section>
      </section>
    </section>
  )
}
