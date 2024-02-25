import React from "react"
import FeaturedFarmersCard from "./FeaturedFarmersCard"
import { farmerData } from "@/pages/api/marketplacedemofarmers"
import ShopHeading from "./ShopHeading"
import Link from "next/link"

const FarmersNear: React.FC = () => {
  return (
    <>
      <ShopHeading shopHeading="Farm Near You" location="" />
      <div className="flex flex-row gap-8">
        {farmerData.map((farmer) => (
          <div key={farmer.id} className="w-full">
            <FeaturedFarmersCard farmer={farmer} />
          </div>
        ))}
      </div>
      <Link
        href=""
        className="flex items-end justify-end py-8 text-lg text-[#03656B]"
      >
        See More
      </Link>
    </>
  )
}

export default FarmersNear
