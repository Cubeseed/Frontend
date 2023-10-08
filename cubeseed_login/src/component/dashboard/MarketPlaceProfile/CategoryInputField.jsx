import React from 'react';
import styles from "@/styles/marketplaceprofile.module.css"
import SearchBar from './SearchBar';
import { BsCart3, BsPersonCircle } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";



const CategoryInputField = () => {
  return (
    <div className={styles.categoryInput}>
   <SearchBar />


    <div className="flex">
      <ul className={styles.categoryIcons}>
        <li><BsCart3 /></li>
        <li><FiMessageSquare /></li>
        <li><BsPersonCircle /></li>
      </ul>
    </div>

  </div>
  )
}
export default CategoryInputField;
