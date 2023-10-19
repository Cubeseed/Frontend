import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs"
import styles from "@/styles/marketplaceprofile.module.css"


const DemoSideBar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(true);

  const handleSidebarToggle = () => {
    setOpen(!open);
    setSidebarOpen(!open); 
  };
  

  return (
    <div className={styles.sidebar} style={{ width: open ? '25%' : '10%' }}>
      <BsArrowLeftShort className="bg-black text-green-500 text-4xl rounded-full
        absolute top-9 border cursor-pointer justify-end items-end right-4"
        onClick={handleSidebarToggle}
       />

    </div>
  );
};

export default DemoSideBar;
