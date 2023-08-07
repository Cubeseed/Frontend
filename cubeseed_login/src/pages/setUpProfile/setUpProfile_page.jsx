import React from "react";
import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel";
import styles from "@/styles/setUpProfile.module.scss";
import UploadImage from "@/component/uploadimage/UploadImage";
import { useState } from "react";
import InputWrap from "@/component/inputwrap/InputWrap";
import DropdownTemplate from "@/component/dropdowntemplate/DropdownTemplate";
import ButtonTemplate from "@/component/buttonTemplate/ButtonTemplate";
import { Link } from "react-router-dom";

const setUpProfile_page = () => {
  const [aboutMe, setAboutMe] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.sidepannel}>
        <DashboardSidePannel />
      </div>
      <div className={styles.profile}>
        <div className={styles.description}>
          <h1>Set-up your profile</h1>
          <br />
          <br />
          <p>
            This will help investors learn more about you! We recommend
            completing 100% of the profile sections.
          </p>
        </div>
        <div className={styles.avatarblock}>
          <div className={styles.uploadimage}>
            <UploadImage />
          </div>
          <div className={styles.aboutme}>
            <label htmlFor="aboutme-text">About me</label>
            <input
              type="text"
              name=""
              id="aboutme-text"
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.infoblock}>
          <div className={styles.farmname}>
            <InputWrap labeltext={"Farm Name"} placeholder={"input"} />
          </div>
          <div className={styles.farmsize}>
            <InputWrap labeltext={"Farm Size"} placeholder={"input"} />
          </div>
          <div className={styles.crops}>
            <DropdownTemplate
              labeltext={"Crops"}
              options={[
                { value: "option1", label: "option1" },
                { value: "option2", label: "option2" },
                { value: "option3", label: "option3" },
                { value: "option4", label: "option4" },
              ]}
            />
          </div>
          <div className={styles.livestock}>
            <DropdownTemplate
              labeltext={"Livestock"}
              options={[
                { value: "option1", label: "option1" },
                { value: "option2", label: "option2" },
                { value: "option3", label: "option3" },
                { value: "option4", label: "option4" },
              ]}
            />
          </div>
        </div>
        <div className={styles.ownershipblock}>
          <p>Do you own or rent your farm?</p>
          <div className={styles.ownershipgroup}>
            <div className={styles.owner}>
              <input type="radio" id="owner" />
              <p>I own my farm</p>
            </div>
            <div className={styles.renter}>
              <input type="radio" id="renter" />
              <p>I am renting my farm</p>
            </div>
          </div>
        </div>
        <div className={styles.nextbutton}>
          <ButtonTemplate
            containerclass={styles.buttoncontainer}
            buttonclass={styles.button}
            buttontext={"Next"}
            redirection={"/farm_verify_page/farm-verification"}
          />
        </div>
      </div>
    </div>
  );
};

export default setUpProfile_page;
