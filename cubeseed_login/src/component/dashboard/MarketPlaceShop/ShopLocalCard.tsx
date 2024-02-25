import React from "react"
import "@/styles/global.css"
import styles from "@/styles/marketplacemansory.module.css"
import Image from "next/image"
import OverlayButton from "./OverlayButton"

const ShopLocalCard: React.FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.mansoryGallary}>
        <div className={styles.eachCardImg}>
          <Image
            src="/assets/marketplace/chickens.jpg"
            alt="blog post one"
            width={800}
            height={200}
            className="h-full w-full object-cover object-center"
          />
          <div className={styles.eachCardOverlay}>
            <button className={styles.overlayButton}>Shop Chickens</button>
          </div>
        </div>
        <div className={styles.eachCardImg}>
          <Image
            src="/assets/marketplace/eggs.jpg"
            alt="blog post one"
            width={500}
            height={100}
            className="h-full w-full object-cover object-center"
          />
          <div className={styles.eachCardOverlay}>
            <button className={styles.overlayButton}>Shop Eggs</button>
          </div>
        </div>
        <div className={styles.eachCardImg}>
          <Image
            src="/assets/marketplace/chicks.jpg"
            alt="blog post one"
            width={300}
            height={100}
            className="h-full w-full object-cover object-center"
          />
          <OverlayButton />
        </div>
      </div>
    </div>
  )
}

export default ShopLocalCard
