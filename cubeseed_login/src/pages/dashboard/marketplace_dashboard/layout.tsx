import React, { ReactNode } from "react"
import "@/styles/global.css"
import MarketPlaceSideBar from "@/component/dashboard/MarketPlaceProfile/MarketplaceSidebar"
import TopHelpBar from "../../../component/dashboard/MarketPlaceProfile/TopHelpBar"
import CategoryInputField from "../../../component/dashboard/MarketPlaceProfile/CategoryInputField"
import ProfileLinks from "../../../component/dashboard/MarketPlaceProfile/ProfileIdLinks"
import styles from "@/styles/marketplaceprofile.module.css"

interface IdDashboardLayoutProps {
  title: string
  children: ReactNode
  sideBarOpenContainer: boolean
}

const IdDashboardLayout: React.FC<IdDashboardLayoutProps> = ({
  title,
  children,
  sideBarOpenContainer,
}) => {
  return (
    <div className={styles.profileWrapper}>
      <MarketPlaceSideBar />
      <div
        className={`${
          sideBarOpenContainer ? styles.homeExpanded : styles.homeCollapsed
        }`}
      >
        <TopHelpBar />
        <CategoryInputField />
        <ProfileLinks />
        <hr
          className={`${
            sideBarOpenContainer ? styles.hrExpanded : styles.hrCollapsed
          }`}
        />
        <div className={styles.accountTile}>
          <p>{title}</p>
        </div>
        <hr
          className={`${
            sideBarOpenContainer ? styles.accountTileHr : styles.accountTileHr2
          }`}
        />
        <div className={styles.accountInfo}>{children}</div>
      </div>
    </div>
  )
}

export default IdDashboardLayout
