import Navbar from "@/component/navbar/Navbar";
import ProgressBar from "@/component/progressbar/ProgressBar";
import { useSignUpContext } from "@/context/signup";
import ServiceForm from "@/component/forms/ServiceForm";
import Confirmation from "./confirmation_page/Confirmation";
import { useMultiSteps } from "@/hooks/useMultiSteps";
import Head from "next/head";
import { FormEvent } from "react";
import homeStyles from "@/styles/home.module.scss";
import styles from "../styles/Login.module.scss";
import Carousel from "@/component/carousel/Carousel";
import UserDetailsForm from "@/component/forms/UserDetailsForm";
import Link from "next/link";
import React from "react";
import Profilepage from "./dashboard/profile";

export default function Home() {
  const stepDivs = [
    <ServiceForm key={"service"} />,
    <UserDetailsForm key={"userdetail"} />,
    <Confirmation key={"confirmation"} />,

    //<div>three</div>,
    //<div>four</div>,
  ];

  const { groupurl, fullName, email, password } = useSignUpContext();

  const { steps, step, next, back, currentIndex, isLastStep, isFirstStep } =
    useMultiSteps(stepDivs);

  console.log(`first ${isFirstStep}`, `last ${isLastStep}`);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isLastStep) return next();
    const payload = {
      username: fullName,
      email: email,
      groups: [groupurl],
      password: password,
    };

    console.log("payload", payload);

    try {
      const response = await fetch(
        "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Registration Success", data);
      } else {
        const data = await response.json();
        console.log("Registration Failed", data);
      }
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }

    //console.log("finished");
    // alert('submitted')
  };

  return (
    <>
      <section>
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
    </>
  );
}
