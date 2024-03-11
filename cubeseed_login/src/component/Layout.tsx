import React, { ReactNode } from "react"
import Navbar from "./navbar/Navbar"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "68px" }}>{children}</div>
    </div>
  )
}

export default Layout
