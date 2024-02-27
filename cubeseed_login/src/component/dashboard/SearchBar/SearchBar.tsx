import React from "react"
import {
  MenuOutline,
  SearchOutline,
  EllipsisVerticalOutline,
  FilterOutline,
} from "react-ionicons"
import styles from "@/styles/searchBar.module.css"

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className={`${styles.searchContainer} flex justify-between`}>
        <div className="flex items-center">
          <div className="ms-3">
            <MenuOutline color={"#00000"} title={"Menu"} height="20px" />
          </div>
          <input
            type="text"
            placeholder="Hinted search text..."
            className={styles.searchInput}
          />
        </div>
        <div className="flex items-center">
          <div className="me-4">
            <SearchOutline color={"#00000"} title={"Search"} height="15px" />
          </div>
          <div className="me-3">
            <EllipsisVerticalOutline
              color={"#00000"}
              title={"Menu"}
              height="15px"
            />
          </div>
        </div>
      </div>
      <div className="ms-3">
        <FilterOutline color={"#03656b"} title={"Filter"} height="30px" />
      </div>
      <select className={`${styles.dateSelect} ms-3`}>
        <option className={styles.selectOption}>Date</option>
        <option>Date 1</option>
        <option>Date 2</option>
        <option>Date 3</option>
      </select>
    </div>
  )
}

export default SearchBar
