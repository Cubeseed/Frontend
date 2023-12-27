import React from 'react';
import Link from "next/link";
import styles from "@/styles/marketplaceprofile.module.css"
import SearchBar from './SearchBar';
import { BsCart3, BsPersonCircle } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

const CategoryInputField: React.FC = () => {
  return (
    <div className={styles.categoryInput}>
      <SearchBar />
      <div className="flex">
        <ul className={styles.categoryIcons}>
          <li><Link href=""><BsCart3 /></Link></li>
          <li><Link href=""><FiMessageSquare /></Link></li>
          <li><Link href=""><BsPersonCircle /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryInputField;
