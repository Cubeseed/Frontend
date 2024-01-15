import React from "react"
import styles from "@/styles/marketplaceprofile.module.css"
import ProfileImg from "./ProfileImg"
import useDocument from "./hooks/useDocument"
import useProfilePhoto from "./hooks/useProfilePhoto"
import { Input } from "@cs/stories/Input"
import FileInput from "./DocumentFIle"

const DocumentUploadForm: React.FC = () => {
  const { docInfo, errors, handleDocumentUpload, handleDocumentSubmit } =
    useDocument()

  const { error, uploading, selectedImage, handleFileChange } =
    useProfilePhoto()

  return (
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg
          uploading={uploading}
          selectedImage={selectedImage}
          handleFileChange={handleFileChange}
          error={error}
        />
      </div>
      <div className={styles.profileContent}>
        <form
          className={styles.personalDetails}
          onSubmit={handleDocumentSubmit}
        >
          <p>Basic Information</p>
          <div className="flex flex-col justify-between gap-4 pt-8">
            <Input
              id="business_taxId"
              type="text"
              label="Business Tax Id"
              name="business_tax_id"
              value={docInfo.business_tax_id}
              placeholder=""
              onChange={handleDocumentUpload}
              required
            />
            {errors.business_tax_id && (
              <div className={styles.error}>{errors.business_tax_id}</div>
            )}
            <Input
              type="text"
              label="EIN"
              name="EIN"
              value={docInfo.EIN}
              placeholder=""
              onChange={handleDocumentUpload}
              required
            />

            {errors.EIN && <div className={styles.error}>{errors.EIN}</div>}

            <Input
              type="text"
              label="SSN"
              name="SSN"
              value={docInfo.EIN}
              placeholder=""
              onChange={handleDocumentUpload}
              required
            />
            {errors.SSN && <div className={styles.error}>{errors.SSN}</div>}
          </div>
          <hr />
          <div className={styles.docs}>
            <p>
              <strong>Official Documents</strong>
            </p>
            <div className="pt-2 ">
              <p>
                Upload a document on official letterhead that shows your
                organization&apos;s status
              </p>
              <p>
                <strong>
                  This will help sellers decide if they would like to work with
                  you! We recommend completing 100% of the profile sections.
                </strong>
              </p>
            </div>
            <div className="pt-5">
              <p>
                <strong>Document 1:&nbsp;</strong>Official documents that
                contain your EIN, or sole proprietor, or individual status.
              </p>
              <p>
                <strong>Document 2:&nbsp;</strong>Official letterhead document
                with employment confirmation.
              </p>
            </div>
            <div className={styles.docUpload}>
              <FileInput
                id="uploadSSN"
                name="uploadSSN"
                label="Document Type 2"
                onChange={handleDocumentUpload}
                error={errors.uploadSSN}
              />
              <FileInput
                id="uploadSSN"
                name="uploadSSN"
                label="Document Type 2"
                onChange={handleDocumentUpload}
                error={errors.uploadSSN}
              />
            </div>
            <div className={styles.btnBusiness}>
              <button
                className={styles.btnFilled}
                style={{ marginLeft: "auto" }}
                onClick={handleDocumentSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DocumentUploadForm
