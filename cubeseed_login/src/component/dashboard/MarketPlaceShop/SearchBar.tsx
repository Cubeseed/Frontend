import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import styles from "@/styles/marketplaceshop.module.css"

const ShopSearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        id="searchInput"
        placeholder="Search for farms"
        className={styles.input}
      />
      <AiOutlineSearch className={styles.searchIcon} />
    </div>
  )
}

export default ShopSearchBar
