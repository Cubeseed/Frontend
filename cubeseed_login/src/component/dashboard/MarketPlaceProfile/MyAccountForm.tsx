import React, { useState } from "react"
import Link from "next/link"
import styles from "@/styles/marketplaceprofile.module.css"
import ProfileImg from "./ProfileImg"
import useProfile from "./hooks/useProfile"
import { Input } from "@cs/stories/Input"
import useProfilePhoto from "./hooks/useProfilePhoto"
import ProfileLinks from "./ProfileIdLinks"
import HorizontalRule from "./HorizontalRule"

interface PersonalDetailFormProps {
  sideBarOpenContainer: boolean
}

const PersonalDetailForm: React.FC<PersonalDetailFormProps> = ({
  sideBarOpenContainer,
}) => {
  const { errors, formData, handleUserInputs, handleSubmit } = useProfile()
  const { uploading, selectedImage, handleFileChange, error } =
    useProfilePhoto()

  return (
    <>
      <ProfileLinks />
      <HorizontalRule sideBarOpenContainer={sideBarOpenContainer} />
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
          <form className={styles.personalDetails}>
            <p>Personal Detail</p>

            <div className="flex flex-col justify-between gap-4 pt-8">
              <Input
                label="Name"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.name && <div className={styles.error}>{errors.name}</div>}

              <Input
                type="tel"
                name="phone_number"
                label="Phone Number"
                value={formData.phone_number}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.phone_number && (
                <div className={styles.error}>{errors.phone_number}</div>
              )}

              <Input
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}

              <Input
                id="location"
                type="text"
                label="Location"
                name="location"
                value={formData.location}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.location && (
                <div className={styles.error}>{errors.location}</div>
              )}
            </div>
            <hr />
            <div className="flex flex-col justify-between gap-4 pt-8">
              <p>Password</p>
              <Input
                type="password"
                label="Old password"
                name="old_password"
                value={formData.old_password}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.old_password && (
                <div className={styles.error}>{errors.old_password}</div>
              )}

              <Input
                type="password"
                label="New Password"
                name="new_password"
                value={formData.new_password}
                placeholder=""
                onChange={handleUserInputs}
                required
              />
              {errors.new_password && (
                <div className={styles.error}>{errors.new_password}</div>
              )}
            </div>
          </form>
          <div className={styles.btnBusiness}>
            <button className={styles.btnOutlined} onClick={handleSubmit}>
              {" "}
              Submit{" "}
            </button>
            <button className={styles.btnFilled}>
              <Link href="/dashboard/marketplace_dashboard/mybusinessform/">
                Next
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDetailForm
