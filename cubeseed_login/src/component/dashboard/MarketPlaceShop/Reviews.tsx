import React from "react"
import ShopHeading from "./ShopHeading"
import ReviewCard from "./ReviewCard"
import { reviewData } from "@/pages/api/reviews"

const Reviews: React.FC = () => {
  return (
    <>
      <ShopHeading shopHeading="Recent-5-Star-Review" location="" />
      <div className="flex flex-row gap-8 pt-12">
        {reviewData.map((review) => (
          <div key={review.id} className="w-full">
            <ReviewCard reviewer={review} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Reviews
