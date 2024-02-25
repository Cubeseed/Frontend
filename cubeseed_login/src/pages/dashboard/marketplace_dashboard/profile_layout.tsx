import React, { ReactNode } from "react"
import "@/styles/global.css"
import MarketPlaceSideBar from "@/component/dashboard/MarketPlaceProfile/MarketplaceSidebar"
import TopHelpBar from "../../../component/dashboard/MarketPlaceProfile/TopHelpBar"
import CategoryInputField from "../../../component/dashboard/MarketPlaceProfile/CategoryInputField"
import ProfileLinks from "../../../component/dashboard/MarketPlaceProfile/ProfileLinks"
import styles from "@/styles/marketplaceprofile.module.css"
import HorizontalRule from "@/component/dashboard/MarketPlaceProfile/HorizontalRule"

interface ProfileLayoutProps {
  title: string
  children: ReactNode
  sideBarOpenContainer: boolean
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
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
        <HorizontalRule sideBarOpenContainer={sideBarOpenContainer} />
        <div className={styles.accountTile}>
          <p>{title}</p>
        </div>
        <HorizontalRule sideBarOpenContainer={sideBarOpenContainer} />
        <div className={styles.accountInfo}>{children}</div>
      </div>
    </div>
  )
}

export default ProfileLayout
