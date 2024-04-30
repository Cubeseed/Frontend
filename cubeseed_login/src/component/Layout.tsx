import React, { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"
import NavbarAuthenticated from "./navbar/NavbarAuthenticated"
import Footer from "./footer/Footer"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {isAuthenticated ? <NavbarAuthenticated /> : <Navbar />}
      <div style={{ flex: 1, paddingTop: "68px" }}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
