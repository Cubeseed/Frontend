import React, { ReactNode } from "react"
import styles from "@/styles/marketplacemansory.module.css"

interface UserCircleImgProps {
  icon: ReactNode
}

const UserCircleImg: React.FC<UserCircleImgProps> = ({ icon }) => {
  return (
    <div className="h-8 w-8 overflow-hidden rounded-full bg-[#27797E]">
      <div className="flex h-full items-center justify-center text-base font-semibold text-white">
        {icon}
      </div>
    </div>
  )
}

export default UserCircleImg
