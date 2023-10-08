import React from 'react';
import styles from "@/styles/marketplaceprofile.module.css"
import ProfileContent from '../../../component/dashboard/MarketPlaceProfile/ProfileContent';
import AccountTitle from '../../../component/dashboard/MarketPlaceProfile/AccountTitle';
import DemoSideBar from '../../../component/dashboard/MarketPlaceProfile/DemoSideBar';
import AccountLinks from '../../../component/dashboard/MarketPlaceProfile/AccountLinks';
import CategoryInputField from '../../../component/dashboard/MarketPlaceProfile/CategoryInputField';
import TopHelpBar from '../../../component/dashboard/MarketPlaceProfile/TopHelpBar';

const MarketplaceProfile = () => {
  return(
    <div className={styles.profileWrapper}>

    <DemoSideBar />
      <div className={styles.home}>
        <TopHelpBar />
        <CategoryInputField />
        <AccountLinks />
       <hr />
       <div className={styles.accountInfo}>
       <AccountTitle />
      <ProfileContent />
      </div>
      </div>
      
    </div>
  );
}

export default MarketplaceProfile;