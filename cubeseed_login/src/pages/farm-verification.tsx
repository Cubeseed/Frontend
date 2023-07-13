import DashboardSidePannel from '@/comps/dashboard/DashboardSidePannel'
import Profile from '@/comps/dashboard/DashboardNavbar/DashboardNavbar'
import styles from '@/styles/FarmVerification.module.scss'
import React, { useState } from 'react'
import DropdownSelect from '@/comps/DropdownSelect'
import Upload from '@/comps/Upload'
import Link from 'next/link'

const FarmVerification = () => {
  const [address, setAddress] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };


  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <DashboardSidePannel />
      {/*<Profile />*/}
      <div className={styles.verify_container}>
        <h1>Farm Verification</h1>
        <br/>
        <br/>
        <p>CubeSeed required proof of farm verification. You will need to upload two forms of identification of your farm</p>
        <form className={styles.verifyform}>
          <div className={styles.inputwrap}>
            <label className={styles.addresslabel}>Farm Address</label>
            <input
              className={styles.addressinput}
              type="text"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className={styles.dropdownright}>
            <label className={styles.dropdownright_label}>Document Type1</label>
            <div className={styles.dropdownright_selection}>
              <DropdownSelect/>
            </div>
            
          </div>
          <div className={styles.dropdownleft}>
            <label className={styles.dropdownleft_label}>Document Type1</label>
            <div className={styles.dropdownleft_selection}>
              <DropdownSelect/>
            </div>
            
          </div>
          <div className={styles.uploadleft}>
            <Upload/>
          </div>
          <div className={styles.uploadright}>
            <Upload/>
          </div>
          <div className={styles.confirm}>
            <input type="checkbox" id="confirmCheckbox" className={styles.confirmCheck} />
            <label className={styles.confirmLabel} htmlFor="confirmCheckbox">I confirm that I uploaded valid documents for farm identification.</label>
          </div>
          <div className={styles.completeButton}>
          <Link href="#" legacyBehavior className={styles.completebutton}>
          <a className={styles.button}>Complete</a>
        </Link>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default FarmVerification