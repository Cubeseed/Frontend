import Image, { StaticImageData } from "next/image"
import React from "react"
import star from "@cs/public/star.svg"

interface ReviewCard {
  src: string | StaticImageData
}

const ReviewCard = ({ src }: ReviewCard) => {
  return (
    <div className="rounded-[20px] bg-primary-700 p-4">
      <div className="flex gap-4">
        <div className="aspect-square h-[62px] w-[62px]">
          <Image
            src={src}
            alt="avatar"
            width={165}
            height={165}
            style={{ height: "100%", width: "100%" }}
            className="rounded-full"
          />
        </div>
        <div>
          <h5>Fathima G.</h5>
          <span className="flex">
            {[...Array(5)].map((el, i) => (
              <Image key={i} src={star} alt="star" width={25} height={25} />
            ))}
          </span>
          <p className="min-w-[211px]">
            “ I would highly recommend investing in this farm. The Farmer is
            very prompt and works hard to meet deadlines.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
