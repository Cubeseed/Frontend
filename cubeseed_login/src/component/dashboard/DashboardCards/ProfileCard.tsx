import React from "react"
import styles from "@/styles/ProfileCard.module.css"
import Image from "next/image"
import farmerImage from "../../../../public/assets/farmerImage1.png"
import Button from "@/comps/Button/button"

const ProfileCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className="flex flex-col items-center">
        <Image
          src={farmerImage}
          alt="farmer image"
          width={130}
          height={130}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginTop: 10,
          }}
        />
        <p className={styles.farmerName}>Olakira</p>
      </div>
      <Button
        className={styles.messageButton}
        onClick={() => console.log("Message")}
      >
        {"Message"}
      </Button>
    </div>
  )
}

export default ProfileCard
