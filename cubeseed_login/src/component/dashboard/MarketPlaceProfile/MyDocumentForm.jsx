import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
// import  Box  from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import styles from "@/styles/marketplaceprofile.module.css";
import ProfileImg from "./ProfileImg";
import useDocument from "./hooks/useDocument";
import { PiCaretDownBold } from "react-icons/pi";

const DocumentUploadForm = () => {
  const { docInfo, error, handleDocumentUpload, handleDocumentSubmit } = useDocument(
    {}
  );

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
              error={error.business_tax_id}
              helperText={error.business_tax_id}
            />

            <TextField
              type="text"
              label="EIN"
              name="EIN"
              variant="outlined"
              value={docInfo.EIN}
              placeholder="EMployer ID Number"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleDocumentUpload}
              error={error.EIN}
              helperText={error.EIN}
            />

            <TextField
              type="text"
              name="SSN"
              label="SSN"
              variant="outlined"
              value={docInfo.SSN}
              placeholder="Company phone"
              InputProps={{ style: inputStyles }}
              InputLabelProps={{ style: labelStyles, shrink: true }}
              onChange={handleDocumentUpload}
              error={error.SSN}
              helperText={error.SSN}
            />
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
                label="Document Type 1"
                value={docInfo.uploadEIN}
                variant="outlined"
                placeholder="Select a Document Type"
                InputProps={{ style: inputStyles }}
                InputLabelProps={{ style: labelStyles, shrink: true  }}
                endIcon={<PiCaretDownBold />}
                onChange={handleDocumentUpload}
                error={error.uploadEIN}
                helperText={error.uploadEIN}
              >
                <VisuallyHiddenInput type="file" />
              </TextField>

              <TextField
                id="uploadSSN"
                name="uploadSSN"
                label="Document Type 2"
                value={docInfo.uploadSSN}
                variant="outlined"
                placeholder="Select a Document Type"
                InputProps={{ style: inputStyles }}
                InputLabelProps={{ style: labelStyles, shrink: true  }}
                endIcon={<PiCaretDownBold />}
                onChange={handleDocumentUpload}
                error={error.SSN}
                helperText={error.uploadSSN}
              >
                <VisuallyHiddenInput type="file" />
              </TextField>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
