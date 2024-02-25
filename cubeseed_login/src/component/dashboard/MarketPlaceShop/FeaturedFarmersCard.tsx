import React from "react"
import styles from "@/styles/marketplacemansory.module.css"
import Image from "next/image"
import { FaStar, FaRegHeart } from "react-icons/fa"
import FavouriteButton from "./FavouriteIcon"

interface Product {
  id: number
  image: string
  productPrice: string
}

interface FeaturedFarmersCardProps {
  farmer: {
    id: number
    name: string
    description: string
    stars: number
    reviews: number
    milesAway: number
    products: Product[]
  }
}

const FeaturedFarmersCard: React.FC<FeaturedFarmersCardProps> = ({
  farmer,
}) => {
  const { name, stars, reviews, description, milesAway, products } = farmer

  return (
    <div className={styles.cardWrapper}>
      <div className="relative max-w-sm overflow-hidden rounded pb-4 shadow-lg">
        <Image
          src={products[0].image}
          alt={name}
          width={800}
          height={200}
          className="relative w-full rounded-lg object-contain object-center"
        />
        <FavouriteButton
          icon={<FaRegHeart />}
          className={styles.favouriteButton}
        />

        <div className="px-6 py-4">
          <h3 className="mb-4 text-xl font-bold text-[#002629]">{name}</h3>
          <div className="mb-4 mr-8 flex">
            <span className="mr-8 flex text-[#002629]">
              <FaStar className="mr-2 mt-1 text-[#FFB84C]" /> {stars}
            </span>
            <p className="text-[#6A7370] underline">({reviews} reviews)</p>
          </div>
          <p className="text-base text-[#002629]">{description}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <div className="flex justify-between py-4 text-base">
            <h3 className="font-bold text-[#002629]">Popular Products</h3>
            <p>{milesAway} miles away</p>
          </div>
          <div className="flex">
            {products.map((product) => (
              <div key={product.id} className="mr-2">
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={100}
                  height={100}
                  className="mb-4 rounded-lg"
                />
                <p className="text-base text-[#002629]">
                  {product.productPrice}/ kg
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedFarmersCard
