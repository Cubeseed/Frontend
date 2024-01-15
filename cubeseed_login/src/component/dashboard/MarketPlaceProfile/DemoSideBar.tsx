import React, { useState } from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import styles from "@/styles/marketplaceprofile.module.css"

interface DemoSideBarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DemoSideBar: React.FC<DemoSideBarProps> = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(true)

  const handleSidebarToggle = () => {
    setOpen(!open)
    setSidebarOpen(!open)
  }

  return (
    <div className={styles.sidebar} style={{ width: open ? "25%" : "10%" }}>
      <BsArrowLeftShort
        className="absolute right-4 top-9 cursor-pointer items-end justify-end rounded-full border bg-black text-4xl text-green-500"
        onClick={handleSidebarToggle}
      />
    </div>
  )
}

export default DemoSideBar
