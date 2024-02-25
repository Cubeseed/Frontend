import React, { ReactNode } from "react"
import "@/styles/global.css"
import MarketPlaceSideBar from "@/component/dashboard/MarketPlaceProfile/MarketplaceSidebar"
import ShopHeader from "@/component/dashboard/MarketPlaceShop/ShopHeader"
import styles from "@/styles/marketplaceshop.module.css"
import HorizontalRule from "@/component/dashboard/MarketPlaceProfile/horizontalRule"
import TinyFooter from "@/component/dashboard/MarketPlaceShop/TinyFooter"

interface ShopLayoutProps {
  children: ReactNode
  sideBarOpenContainer: boolean
}

const ShopLayout: React.FC<ShopLayoutProps> = ({
  children,
  sideBarOpenContainer,
}) => {
  return (
    <div className={styles.container}>
      <MarketPlaceSideBar sideBarOpenContainer={sideBarOpenContainer} />
      <div className={styles.contentWrapper}>
        <ShopHeader />
        <HorizontalRule sideBarOpenContainer={sideBarOpenContainer} />
        <div className={styles.content}>
          <div className={styles.accountInfo}>{children}</div>
        </div>
        <br />
        <HorizontalRule sideBarOpenContainer={sideBarOpenContainer} />
        <TinyFooter />
      </div>
    </div>
  )
}

export default ShopLayout
