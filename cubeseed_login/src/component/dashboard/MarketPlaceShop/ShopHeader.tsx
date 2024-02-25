import React, { ReactNode } from "react"
import "@/styles/global.css"
import styles from "@/styles/marketplaceshop.module.css"
import ShopSearchBar from "../MarketPlaceShop/SearchBar"
import ShopIconBar from "./IconsBar"

const ShopHeader: React.FC = () => {
  return (
    <div className={styles.shopHeaderWrapper}>
      <ShopSearchBar />
      <ShopIconBar />
    </div>
  )
}

export default ShopHeader
