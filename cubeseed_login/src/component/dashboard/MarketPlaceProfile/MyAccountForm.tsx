import React from "react";
import Link from "next/link";
import { TextField } from "@mui/material";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from "./ProfileImg";
import useProfile from "./hooks/useProfile";

interface PersonalDetailFormProps {
  uploading: boolean;
  selectedImage: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDetailForm: React.FC<PersonalDetailFormProps> = ({
  uploading,
  selectedImage,
  handleFileChange,
}) => {
  const { errors, formData, handleUserInputs, handleSubmit } = useProfile();

  const inputStyles: React.CSSProperties = {
    height: "40px",
    fontSize: "12px",
    borderColor: "#002629",
    color: "#99A19F",
    paddingTop: "18px",
    paddingBottom: "18px",
    opacity: "0.5",
  };

  const labelStyles: React.CSSProperties = {
    color: "#002629",
    fontWeight: "400",
    fontSize: "1rem",
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg
          uploading={uploading}
          selectedImage={selectedImage}
          handleFileChange={handleFileChange}
        />
      </div>

      <div className={styles.profileContent}>
        <form className={styles.personalDetails}>
          <p>Personal Detail</p>
          <div className={styles.inputForm}>
            <TextField
              id="name"
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              placeholder="Name of the user"
              InputProps={{ style: inputStyles, autoComplete: "off" }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
          
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}

            <TextField
              type="tel"
              name="phone_number"
              label="Phone Number"
              variant="outlined"
              value={formData.phone_number}
              placeholder="Personal Number"
              InputProps={{ style: inputStyles, autoComplete: "off" }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.phone_number && (
              <div className={styles.error}>{errors.phone_number}</div>
            )}

            <TextField
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              placeholder="amanda@gmail.com"
              InputProps={{ style: inputStyles, autoComplete: "off" }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}

            <TextField
              type="text"
              label="Location"
              name="location"
              value={formData.location}
              placeholder="Enter your location"
              InputProps={{ style: inputStyles, autoComplete: "off" }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.location && (
              <div className={styles.error}>{errors.location}</div>
            )}
          </div>
          <hr />
          <div className={styles.inputForm}>
            <p>Password</p>
            <TextField
              type="password"
              label="Old password"
              name="old_password"
              variant="outlined"
              value={formData.old_password}
              placeholder="Enter old password"
              InputProps={{ style: inputStyles, autoComplete: "off"}}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.old_password && (
              <div className={styles.error}>{errors.old_password}</div>
            )}

            <TextField
              type="password"
              label="New Password"
              name="new_password"
              value={formData.new_password}
              placeholder="At least 8 characters"
              InputProps={{ style: inputStyles, autoComplete: "off" }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.new_password && (
              <div className={styles.error}>{errors.new_password}</div>
            )}
          </div>
          <div className={styles.btnBusiness}>
          <button style={{ marginLeft: "auto" }} className={styles.btnFilled} onClick={handleSubmit}>Next </button>
            <button className={styles.btnFilled}>
              <Link href="/dashboard/marketplace_profile/mydocumentform">Next</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
