import React from "react";
import { TextField } from "@mui/material";
// import  Box  from "@mui/material/Box";
import MenuItem  from "@mui/material/MenuItem";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from "./ProfileImg";
import useBusiness from "./hooks/useBusiness";

const category = [
  {
    value: "Select",
    label: "Select the category",
  },
  {
    value: "catering",
    label: "Catering Companies",
  },
  {
    value: "Food",
    label: "Foodservices Distributors",
  },
  {
    value: "institution",
    label: "Institution Buyers (e.g Schools, Hospital)",
  },
  {
    value: "grocery",
    label: "Grocery Store Chain",
  },
];

const BusinessDetailForm = ({ sidebarOpen }) => {
  const { bizData, handleBizInputs, handleBusinessSubmit, errors } = useBusiness({});

  const inputStyles = {
    height: "40px",
    fontSize: "12px",
    borderColor: "#27797E",
    color: "#99A19F",
    paddingTop: "18px",
    paddingBottom: "18px",
    opacity: "0.5px",
  };

  const labelStyles = {
    color: "#002629",
    fontWeight: "500",
    fontSize: "1rem",
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg />
      </div>

      <div className={styles.profileContent}>
        <form className={styles.personalDetails} onSubmit={handleBusinessSubmit}>
          <p>Business Detail</p>
          <div className={styles.inputForm}>
            <TextField
              id="company_name"
              type="text"
              label="Company Name"
              name="company_name"
              variant="outlined"
              value={bizData.company_name}
              placeholder="Name of the company"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleBizInputs}
            />
            {errors.company_name && <div className={styles.error}>{errors.company_name}</div>}
           
            <TextField
              type="email"
              label="Email"
              name="company__email"
              variant="outlined"
              value={bizData.company_email}
              placeholder="Company email address"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleBizInputs}
            />
            {errors.company_email && <div className={styles.error}>{errors.company_email}</div>}
            
            <TextField
              type="tel"
              name="phone_number"
              label="Company Phone"
              variant="outlined"
              value={bizData.company_phone}
              placeholder="Company phone"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleBizInputs}
            />
            {errors.company_phone && <div className={styles.error}>{errors.company_phone}</div>}
            
            <TextField
              id="outlined-select-category"
              select
              label="Type of Business"
              defaultValue="catering"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles }}
              
            >
              {category.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField> 
            {errors.category && <div className={styles.error}>{errors.category}</div>}
          </div>
          <hr className={`${sidebarOpen ? styles.hrExpanded : styles.hrCollapsed }`}  />
          <div className={styles.inputForm}>
          <p>Business Adress</p>
            <TextField
              id="business_address"
              type="text"
              label="Business Address"
              name="business_address"
              variant="outlined"
              value={bizData.business_address}
              placeholder="Name of the company"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleBizInputs}
            />
            {errors.business_address&& <div className={styles.error}>{errors.business_address}</div>}
          </div>
          <hr className={`${sidebarOpen ? styles.hrExpanded : styles.hrCollapsed }`}  />
          <div className={styles.inputForm}>
          <p>Custom Fields</p>
            <TextField
              id="custom_fields"
              type="text"
              label="Custom Fields"
              name="business_address"
              variant="outlined"
              value={bizData.custom_fields}
              placeholder="Name of the company"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleBizInputs}
            />
            {errors.custom_fields && <div className={styles.error}>{errors.custom_fields}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetailForm;
