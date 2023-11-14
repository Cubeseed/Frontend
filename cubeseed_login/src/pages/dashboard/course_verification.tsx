import CourseVerificationStyle from "@/styles/CourseVerification.module.scss"
import upload from "../../assets/icons/upload.png"
import { useEffect, useState } from "react"
import Image from "next/image"

const CourseVerification = () => {
  const [selectedFile, setSelectedFile] = useState("")

  useEffect(() => {}, [selectedFile])

  return (
    <div className={CourseVerificationStyle.main}>
      <div className={CourseVerificationStyle.courseVerificationHeader}>
        <h3>Course Verification</h3>
        <p>
          Once the course is completed, you will need to verify completion by
          providing one of the following. Please choose a method for
          verification.
        </p>
      </div>

      <form className={CourseVerificationStyle.verificationContainer}>
        <div className={CourseVerificationStyle.verification}>
          <div className={CourseVerificationStyle.code}>
            <p>Enter Confirmation Code</p>
            <div className={CourseVerificationStyle.codeGroup}>
              <label
                htmlFor="code"
                className={CourseVerificationStyle.codeLabel}
              >
                Code
              </label>
              <input
                type="password"
                className={CourseVerificationStyle.addCode}
              />
            </div>
          </div>

          <div className="divider">
            <div className={CourseVerificationStyle.dividerTop}></div>
            <p>or</p>
            <div className={CourseVerificationStyle.dividerBottom}></div>
          </div>
          <div className={CourseVerificationStyle.uploadCertificate}>
            <p>Upload Certification</p>
            <div className={CourseVerificationStyle.formGroup}>
              <Image src={upload.src} alt="" />
              <div className={CourseVerificationStyle.selectedFile}>
                <p className={CourseVerificationStyle.p}>
                  {selectedFile ? `Selected File: ${selectedFile}` : " "}
                </p>
              </div>
              <span>Supports: JPG, PNG, PDF</span>
              <label
                htmlFor="upload-cert"
                className={CourseVerificationStyle.uploadLabel}
              >
                Upload from Device
                <input
                  type="file"
                  id="upload-cert"
                  accept="image/*,.pdf"
                  onChange={(e) => setSelectedFile(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className={CourseVerificationStyle.submitCourse}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CourseVerification
