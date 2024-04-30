import SidebarCategory from "./SidebarCategory"

import { GoHome } from "react-icons/go"
import { FaListUl } from "react-icons/fa"
import { GoCalendar } from "react-icons/go"
import { MdStorefront } from "react-icons/md"
import { PiSuitcaseSimpleBold } from "react-icons/pi"
import { FaRegStar } from "react-icons/fa"
import { MdChatBubbleOutline } from "react-icons/md"
import { FaRegUser } from "react-icons/fa6"
import { PiGearBold } from "react-icons/pi"
import { AiOutlineQuestionCircle } from "react-icons/ai"

import Link from "next/link"

const Sidebar: React.FC = () => {
  const dashboardItems = [
    { name: "Home", icon: <GoHome size={16} /> },
    { name: "Orders", icon: <FaListUl size={14} /> },
    { name: "Calendar", icon: <GoCalendar size={14} /> },
  ]
  const storeItems = [
    { name: "Storefont", icon: <MdStorefront size={14} /> },
    { name: "Services", icon: <PiSuitcaseSimpleBold size={14} /> },
    { name: "Reviews", icon: <FaRegStar size={14} /> },
  ]
  const accountItems = [
    { name: "Chat", icon: <MdChatBubbleOutline size={14} /> },
    { name: "Profile", icon: <FaRegUser size={14} /> },
  ]

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex h-screen w-full flex-col justify-between bg-[#e2f5f5] p-6">
        <div className="space-y-4">
          {/* Dashboard */}
          <SidebarCategory
            name="Dashboard"
            items={dashboardItems}
            borderBottom={true}
          />
          {/* Store */}
          <SidebarCategory
            name="Store"
            items={storeItems}
            borderBottom={true}
          />
          {/* Account */}
          <SidebarCategory
            name="Account"
            items={accountItems}
            borderBottom={false}
          />
        </div>

        {/* Other buttons */}
        <div className="mt-auto flex flex-shrink-0 flex-col gap-2">
          <Link href="/">
            <div className="-ml-4 flex flex-row items-center gap-3 rounded-3xl p-2 px-4 hover:bg-[#cbe5e5]">
              <PiGearBold size={14} />
              <span className="text-[12px]">Settings</span>
            </div>
          </Link>
          <Link href="/">
            <div className="-ml-4 flex flex-row items-center gap-3 rounded-3xl p-2 px-4 hover:bg-[#cbe5e5]">
              <AiOutlineQuestionCircle size={14} />
              <span className="text-[12px]">Support</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
