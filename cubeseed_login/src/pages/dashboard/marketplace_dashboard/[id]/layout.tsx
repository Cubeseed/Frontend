import React, { useState, ReactNode } from "react"
import "@/styles/global.css"
import DemoSideBar from "../../../../component/dashboard/MarketPlaceProfile/DemoSideBar"
import TopHelpBar from "../../../../component/dashboard/MarketPlaceProfile/TopHelpBar"
import CategoryInputField from "../../../../component/dashboard/MarketPlaceProfile/CategoryInputField"
import ProfileIdLinks from "../../../../component/dashboard/MarketPlaceProfile/ProfileIdLinks"
import styles from "@/styles/marketplaceprofile.module.css"

interface IdDashboardLayoutProps {
  title: string
  children: ReactNode
}

const IdDashboardLayout: React.FC<IdDashboardLayoutProps> = ({
  title,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  type User = {
    id: string
  }

  // Fetch userId from login information
  function fetchUserIdFromLogin(): User["id"] | null {
    const userId = localStorage.getItem("userId")
    return userId ? userId : null
  }
  // Get the userId from local storage
  const userId: User["id"] | null = fetchUserIdFromLogin()

  return (
    <div className={styles.profileWrapper}>
      <DemoSideBar setSidebarOpen={setSidebarOpen} />
      <div
        className={`${
          sidebarOpen ? styles.homeExpanded : styles.homeCollapsed
        }`}
      >
        <TopHelpBar />
        <CategoryInputField />
        {userId && <ProfileIdLinks userId={userId} />}
        <hr
          className={`${sidebarOpen ? styles.hrExpanded : styles.hrCollapsed}`}
        />
        <div className={styles.accountTile}>
          <p>{title}</p>
          <hr
            className={`${
              sidebarOpen ? styles.accountTileHr : styles.accountTileHr2
            }`}
          />
        </div>

        <div className={styles.accountInfo}>{children}</div>
      </div>
    </div>
  )
}

export default IdDashboardLayout
