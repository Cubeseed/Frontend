import React from "react"
import "@/styles/global.css"
import styles from "@/styles/marketplaceprofile.module.css"

interface HorizontalRuleProps {
  sideBarOpenContainer: boolean
}

const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  sideBarOpenContainer,
}) => {
  return (
    <>
      <hr
        className={`${
          sideBarOpenContainer ? styles.hrExpanded : styles.hrCollapsed
        }`}
      />
    </>
  )
}

export default HorizontalRule
