import React, { useState } from "react"
import "@/styles/global.css";
import DemoSideBar from '../../../component/dashboard/MarketPlaceProfile/DemoSideBar'
import TopHelpBar from '../../../component/dashboard/MarketPlaceProfile/TopHelpBar';
import CategoryInputField from '../../../component/dashboard/MarketPlaceProfile/CategoryInputField';
import ProfileLinks from '../../../component/dashboard/MarketPlaceProfile/ProfileLinks';
import styles from "@/styles/marketplaceprofile.module.css";

const DashboardLayout = ({ title, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return(
    <div className={styles.profileWrapper}>
       <DemoSideBar setSidebarOpen={setSidebarOpen} />
      <div className={`${sidebarOpen ? styles.homeExpanded : styles.homeCollapsed }`} >
        <TopHelpBar />
        <CategoryInputField />
        <ProfileLinks />
       <hr className={`${sidebarOpen ? styles.hrExpanded : styles.hrCollapsed }`}  />
       <div className={styles.accountTile}>
      <p>{title}</p>
      <hr className={`${sidebarOpen ? styles.accountTileHr : styles.accountTileHr2 }`} />
     </div>

       <div className={styles.accountInfo}>
        {children}
       </div>
       </div>
       </div>
  )
}
export default DashboardLayout;