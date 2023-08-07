import { useState } from "react";
import Link from "next/link";

import ChooseCourseStyle from "@/styles/ChooseCourse.module.scss";
import verifiedCheck from "../../assets/icons/verifiedCheck.svg";
import ProgressBar from "@/component/progressbar/ProgressBar";

const ChooseCourse = () => {
  const courseOptions = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className={ChooseCourseStyle.container}>
      <ProgressBar index={1} length={[]} />
      <div className={ChooseCourseStyle.header}>
        <h3>Finish Setting up your account</h3>
        <p>
          Please enroll in a course in order to use our system. If you already
          completed a course you may skip to the next step to verify.
        </p>
      </div>
      <div className={ChooseCourseStyle.courseOptions}>
        <div className={ChooseCourseStyle.options}>
          <h4>Cubeseed Course Option</h4>
          <ul>
            {courseOptions.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <Link href="/dashboard/course_verification" legacyBehavior>
            <a href="#">Enroll</a>
          </Link>
          
        </div>
        <div className={ChooseCourseStyle.options}>
          <h4>Outside Source Option</h4>
          <ul>
            {courseOptions.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <a href="https://www.google.com/" target="blank">
            Enroll
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseCourse;
