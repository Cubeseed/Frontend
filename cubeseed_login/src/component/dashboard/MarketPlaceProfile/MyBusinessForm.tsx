import React from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"
import ProfileImg from "./ProfileImg"
import useBusiness from "./hooks/useBusiness"
import { Input } from "@cs/stories/Input"
import useProfilePhoto from "./hooks/useProfilePhoto"

const BusinessDetailForm: React.FC = () => {
  const { bizData, handleBizInputs, handleBusinessSubmit, errors } =
    useBusiness()
  const { uploading, selectedImage, handleFileChange, error } =
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
          onSubmit={handleBusinessSubmit}
        >
          <p>Business Detail</p>
          <div className="flex flex-col justify-between gap-4 pt-8">
            <Input
              label="Company Name"
              id="company_name"
              type="text"
              name="comapny_name"
              value={bizData.company_name}
              placeholder=""
              onChange={handleBizInputs}
              required
            />
            {errors.company_name && (
              <div className={styles.error}>{errors.company_name}</div>
            )}

            <Input
              type="email"
              label="Email"
              name="company_email"
              value={bizData.company_email}
              placeholder=""
              onChange={handleBizInputs}
              required
            />
            {errors.company_email && (
              <div className={styles.error}>{errors.company_email}</div>
            )}

            <Input
              type="tel"
              name="company_phone"
              label="Company Phone"
              value={bizData.company_phone}
              placeholder=""
              onChange={handleBizInputs}
              required
            />
            {errors.company_phone && (
              <div className={styles.error}>{errors.company_phone}</div>
            )}
            <div className="flex justify-between gap-4">
              <select className="w-72 border p-4">
                {category?.length ? (
                  category.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))
                ) : (
                  <option>Add options</option>
                )}
              </select>
            </div>
            {errors.category && (
              <div className={styles.error}>{errors.category}</div>
            )}
          </div>
          <hr />
          <div className="flex flex-col justify-between gap-4 pt-8">
            <p>Business Address</p>
            <Input
              id="business_address"
              type="text"
              label="Business Address"
              name="business_address"
              value={bizData.business_address}
              placeholder=""
              onChange={handleBizInputs}
            />
            {errors.business_address && (
              <div className={styles.error}>{errors.business_address}</div>
            )}
          </div>
          {/* <hr
            className={`${
              sideBarOpenContainer ? styles.hrExpanded : styles.hrCollapsed
            }`}
          /> */}
          <div className="flex flex-col justify-between gap-4 pt-8">
            <p>Custom Fields</p>
            <Input
              id="custom_fields"
              type="text"
              label="Custom Fields"
              name="custom_fields"
              value={bizData.custom_fields}
              placeholder=""
              onChange={handleBizInputs}
            />
            {errors.custom_fields && (
              <div className={styles.error}>{errors.custom_fields}</div>
            )}
          </div>
          <div className={styles.btnBusiness}>
            <button
              className={styles.btnOutlined}
              onClick={handleBusinessSubmit}
            >
              {" "}
              Submit{" "}
            </button>
            <button className={styles.btnFilled}>
              <Link href="/dashboard/marketplace_dashboard/mydocumentform">
                Next
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BusinessDetailForm

const category = [
  {
    id: 0,
    value: "Select",
    label: "Select the category",
  },
  {
    id: 1,
    value: "catering",
    label: "Catering Companies",
  },
  {
    id: 2,
    value: "Food",
    label: "Foodservices Distributors",
  },
  {
    id: 3,
    value: "institution",
    label: "Institution Buyers (e.g Schools, Hospital)",
  },
  {
    id: 4,
    value: "grocery",
    label: "Grocery Store Chain",
  },
]
