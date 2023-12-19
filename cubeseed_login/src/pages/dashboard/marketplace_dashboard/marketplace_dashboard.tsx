import React from 'react'
import MarketPlaceSideBar from './marketplace_sidebar'
import MarketPlaceDashboardStyle from "@/styles/MarketPlaceDashboard.module.css"
import MarketPlaceFooter from './marketplace_footer'


export default function MarketPlaceDashboard() {
  return (
    <>
      <div className={MarketPlaceDashboardStyle.marketPlaceDashboardContainer}>
          <MarketPlaceSideBar/>
          <div className={MarketPlaceDashboardStyle.marketPlaceQuotationsContainer}>
            <div className={MarketPlaceDashboardStyle.marketPlaceDashboard}>
              <div className={MarketPlaceDashboardStyle.marketPlaceHeader}>
                <h1>Quotation requests</h1>
                <button><svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z" fill="white"/>
                </svg> Create New Request</button>
              </div>
              <div className={MarketPlaceDashboardStyle.marketPlaceQuotations}>
                <p>Sent</p>
                <p>Draft</p>
                <p>Archive</p>
              </div>

            </div>
            <MarketPlaceFooter/>
          </div>
      </div>
    </>
  )
}
