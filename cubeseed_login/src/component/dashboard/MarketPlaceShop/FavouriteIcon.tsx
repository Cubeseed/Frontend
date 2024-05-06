import React, { ReactNode } from "react"
import styles from "@/styles/marketplacemansory.module.css"

interface FavouriteButtonProps {
  icon: ReactNode
  className?: string
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({
  icon,
  className,
}) => {
  return (
    <div className={`${styles.favouriteButton} ${className}`}>
      <div className="h-12 w-12 overflow-hidden rounded-full bg-[#27797E]">
        <div className="flex h-full items-center justify-center text-base font-semibold text-white">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default FavouriteButton
