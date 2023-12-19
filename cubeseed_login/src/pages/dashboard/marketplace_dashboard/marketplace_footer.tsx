import React from 'react'
import MarketPlaceFooterStyle from "@/styles/MarketPlaceFooter.module.css"

export default function MarketPlaceFooter() {
  return (
    <div className={MarketPlaceFooterStyle.marketPlaceFooterContainer}>
        <div className={MarketPlaceFooterStyle.marketPlaceFooterLinks}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
        <div>
            <p>© 2023 Cubeseed</p>
        </div>
    </div>
  )
}
