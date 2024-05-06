import React from "react"
// import ShopLayout from "./shop_layout"
import ShopLocalContent from "@/component/dashboard/MarketPlaceShop/ShopLocalContent"
import FarmersGrid from "@/component/dashboard/MarketPlaceShop/FeaturedFarmersGrid"
import FarmersNear from "@/component/dashboard/MarketPlaceShop/FarmsNear"
import Reviews from "@/component/dashboard/MarketPlaceShop/Reviews"

const Shop: React.FC = () => {
  return (
    <>
      <ShopLocalContent />
      <FarmersGrid />
      <FarmersNear />
      <Reviews />
    </>
  )
}

export default Shop
