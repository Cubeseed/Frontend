import React from "react"
import "@/styles/global.css"
import ShopHeading from "./ShopHeading"
import ShopLocalCard from "./ShopLocalCard"

const ShopLocalContent: React.FC = () => {
  return (
    <>
      <ShopHeading
        shopHeading="Shop Local"
        location="Location"
        showLocation={true}
      />
      <ShopLocalCard />
    </>
  )
}

export default ShopLocalContent
