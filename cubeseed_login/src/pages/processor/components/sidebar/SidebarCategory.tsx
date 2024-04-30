import Link from "next/link"
import { ReactElement } from "react"
import { IconType } from "react-icons"

interface SidebarItem {
  name: string
  icon: ReactElement<IconType>
}

interface SidebarCategoryProps {
  name: string
  items: SidebarItem[]
  borderBottom: boolean
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({
  name,
  items,
  borderBottom,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-[14px] text-gray-500">{name.toUpperCase()}</span>
      {/* TODO: Highlight the text when selected */}
      <div className="flex flex-shrink-0 flex-col gap-2">
        {items.map((item, index) => (
          <Link href="/">
            <div
              key={index}
              className="-ml-4 flex flex-row items-center gap-3 rounded-3xl p-2 px-4 hover:bg-[#cbe5e5]"
            >
              {item.icon}
              <span className="text-[12px]">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
      {borderBottom ? (
        <div className="relative flex w-full items-center">
          <div className="flex-grow border-t border-[#7ea9ab]"></div>
          <div className="flex-grow border-t border-[#7ea9ab]"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SidebarCategory
