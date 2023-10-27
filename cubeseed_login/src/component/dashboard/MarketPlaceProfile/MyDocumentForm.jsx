import React, { useRef } from "react";
import { TextField, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
// import  Box  from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from "./ProfileImg";
import useDocument from "./hooks/useDocument";
import { PiCaretDownBold } from "react-icons/pi";

const DocumentUploadForm = () => {
  const { docInfo, errors, handleDocumentUpload, handleDocumentSubmit } = useDocument({});
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    if (fileInputRef) {
      fileInputRef.current.click();
    }
  };

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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className={styles.mainContent}>
      <div className={styles.profileImg}>
        <ProfileImg />
      </div>
      <div className={styles.profileContent}>
        <form
          className={styles.personalDetails}
          onSubmit={handleDocumentSubmit}
        >
          <p>Basic Information</p>
          <div className={styles.inputForm}>
            <TextField
              id="business_taxId"
              type="text"
              label="Business Tax Id"
              name="business_tax_id"
              variant="outlined"
              value={docInfo.business_tax_id}
              placeholder="Enter your Tax ID"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleDocumentUpload}
              />
            {errors.business_tax_id && <div className={styles.error}>{errors.business_tax_id}</div>}
            <TextField
              type="text"
              label="EIN"
              name="EIN"
              variant="outlined"
              value={docInfo.EIN}
              placeholder="Employer ID Number"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleDocumentUpload}
            />
            {errors.EIN && <div className={styles.error}>{errors.EIN}</div>}

            <TextField
              type="text"
              name="SSN"
              label="SSN"
              variant="outlined"
              value={docInfo.SSN}
              placeholder="Social Security Number"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleDocumentUpload}
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
                organization's status
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
            <TextField
      id="uploadEIN"
      name="uploadEIN"
      label="Upload File"
      variant="outlined"
      placeholder="Select a Document Type"
      InputProps={{ style: inputStyles }}
      InputLabelProps={{ style: labelStyles, shrink: true }}
      endIcon={<PiCaretDownBold />}
      Input={Input}
      type="file"
    />
  
              {errors.uploadEIN && <div className={styles.error}>{errors.uploadEIN}</div>
            
            </div>
            <div className={styles.btnBusiness}>
            {/* <button className={styles.btnOutlined} onClick={handleBusinessSubmit}> Submit </button> */}
          {/* <button onClick={handleBusinessSubmit} className={styles.btn}>Submit </button> */}
      <button className={styles.btnFilled} onClick={handleDocumentSubmit}>Submit</button>
      </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
