"use client"

import Image from "next/image"

import { FaStar } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

export interface ServiceCardProps {
  name: string
  serviceImagePath: string
  rating: number
  reviews?: string[]
  description: string
  price: number
  perkg: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  serviceImagePath,
  rating,
  reviews,
  description,
  price,
  perkg,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg">
      <div className="relative block cursor-pointer overflow-hidden rounded-lg">
        <Image
          // onClick={() => router.push("/")}
          className="object-fit block cursor-pointer rounded-lg"
          src={serviceImagePath}
          width={300}
          height={200}
          alt="Service Image"
        />
        <button className="absolute right-2 top-2 rounded-full bg-[#287e82] p-[2%] text-white">
          <FaRegHeart size={16} />
        </button>
      </div>

      {/* Information */}
      <div className="flex max-w-full flex-col gap-2">
        <span className="text-[24px]">{name}</span>
        <div className="flex items-center gap-1">
          <div className="text-yellow-400 ">
            <FaStar size={14} />
          </div>
          <span className="mr-1 text-[14px] text-black">{rating}</span>
          <span className="text-[12px] text-gray-600">
            ({reviews?.length} reviews)
          </span>
        </div>
        <div className="flex flex-row text-[13px] text-gray-700">
          <span className="text-overflow-ellipsis inline-block w-[80%] overflow-hidden whitespace-nowrap">
            {description}
          </span>
          <span>...</span>
        </div>
        <div className="text-[15px]">
          <span className="font-bold">₦ {price}</span>
          <span> / {perkg} kg</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
