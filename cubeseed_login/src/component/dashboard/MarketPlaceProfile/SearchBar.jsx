import React, { useState, useEffect } from 'react';
import { PiCaretDownBold } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "@/styles/marketplaceprofile.module.css"

const categories = ['Apps', 'eBooks', 'Games', 'Music', 'Videos'];

const SearchBar = () => {
  const [dropdownListVisibility, setDropdownListVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');

  useEffect(() => {
    const dropdownListElement = document.getElementById('list');
    if (dropdownListVisibility) {
      dropdownListElement.classList.add(styles.listShow);
    } else {
      dropdownListElement.classList.remove(styles.listShow);
    }
  }, [dropdownListVisibility]);

  useEffect(() => {
    const searchInputElement = document.getElementById('searchInput');
    searchInputElement.placeholder = `Enter Products/ services to search...  ${selectedCategory}...`;
  }, [selectedCategory]);

  const handleDropdownButtonClick = () => {
    setDropdownListVisibility(!dropdownListVisibility);
  };

  const handleDropdownListItemClick = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  return (
    <div className={styles.searchBar}>
      <button className={styles.dropDown} onClick={handleDropdownButtonClick}>
        <div id="dropText" className={styles.dropDownText}>
          <span>{selectedCategory}</span>
          <PiCaretDownBold id="icon" />
        </div>
        <ul id="list" className={styles.dropDownList}>
          {categories.map((category) => (
            <li
              key={category}
              className={styles.dropDownItems}
              onClick={handleDropdownListItemClick}
            >
              {category}
            </li>
          ))}
        </ul>
      </button>

      <div className={styles.searchBox}>
        <input type="text" id="searchInput" placeholder={`Enter Products/ services to search... ${selectedCategory}...`} className={styles.input} />
        <AiOutlineSearch className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
