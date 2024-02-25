import React from "react"
import FeaturedFarmersCard from "./FeaturedFarmersCard"
import { farmerData } from "@/pages/api/marketplacedemofarmers"
import ShopHeading from "./ShopHeading"

const FarmersGrid: React.FC = () => {
  return (
    <>
      <ShopHeading shopHeading="Featured Farmers" location="" />
      <div className="flex flex-row gap-8">
        {farmerData.map((farmer) => (
          <div key={farmer.id} className="w-full">
            <FeaturedFarmersCard farmer={farmer} />
          </div>
        ))}
      </div>
    </>
  )
}

export default FarmersGrid
