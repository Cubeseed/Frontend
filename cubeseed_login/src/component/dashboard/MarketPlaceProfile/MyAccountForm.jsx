import React from "react";
import { TextField } from "@mui/material";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from "./ProfileImg";
import useProfile from "./hooks/useProfile";

const PersonalDetailForm = () => {
  const { 
    errors, 
    formData, 
    handleUserInputs, 
    handleSubmit } = useProfile({});

  const inputStyles = {
    height: "40px",
    fontSize: "12px",
    borderColor: "#002629",
    color: "#99A19F",
    paddingTop: "18px",
    paddingBottom: "18px",
    opacity: "0.5px",
  };

  const labelStyles = {
    color: "#002629",
    fontWeight: "400",
    fontSize: "1rem",
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
      <ProfileImg  />
      </div>

      <div className={styles.profileContent}>
        <form className={styles.personalDetails} >
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
              InputProps={{ style: inputStyles }}
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
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}

            />
            {errors.phone_number && <div className={styles.error}>{errors.phone_number}</div>}

            <TextField
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              placeholder="amanda@gmail.com"
              InputProps={{ style: inputStyles }}
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
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.location && <div className={styles.error}>{errors.location}</div>}
          </div>
          <hr />
          <div className={styles.inputForm}>
            <p>Password</p>
            <TextField
              type={"password"}
              label="Old password"
              name="old_password"
              variant="outlined"
              value={formData.password}
              placeholder="Enter old password"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}
            />
            {errors.old_password && (
              <div className="error">{errors.old_password}</div>
            )}

            <TextField 
              type={"password"}
              label="New Password"
              name="new_password"
              value={formData.password}
              placeholder="At least 8 characters"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleUserInputs}  
            />
            {errors.new_password && (
              <div className="error">{errors.new_password}</div>
            )}

          </div>
          <button onClick={handleSubmit} className={styles.btn}>Submit </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
