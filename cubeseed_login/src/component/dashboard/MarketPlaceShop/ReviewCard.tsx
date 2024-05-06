import React, { ReactNode } from "react"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import Link from "next/link"
import styles from "@/styles/marketplacereview.module.css"
import { FaQuoteLeft } from "react-icons/fa"

interface ReviewCardProps {
  reviewer: {
    id: number
    reviewerName: string
    farmName: string
    reviewQuote: string
    time: number
    reviewerPhoto: ReactNode
  }
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewer }) => {
  const { reviewerName, farmName, reviewQuote, time, reviewerPhoto } = reviewer

  return (
    <div className={styles.cardWrapper}>
      <Link href="" className={styles.link}>
        <span className="mr-8 flex text-[#45DFA9]">
          <FaQuoteLeft />
        </span>
        <p className={styles.title}>{reviewQuote}</p>
        <div className={styles.stars}>
          <div className={styles.star}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className={styles.time}>{time} hours ago</div>
        </div>
      </Link>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <Image
            src={reviewerPhoto}
            width={100}
            height={100}
            alt={reviewerName}
          />
        </div>
        <div className={styles.details}>
          <h3>{reviewerName}</h3>
          <p>For Chicken Eggs at {farmName}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
