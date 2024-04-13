import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa"
import { MdEdit } from "react-icons/md"

interface StoreNavbarProps {
  backgroundImagePath: string
  logoPath: string
  name: string
  location: string
  businessFunction: string
  rating: number
  reviews: string[]
  // selectedTab: string;
  isAdmin: boolean
}

const StoreNavbar = ({
  backgroundImagePath,
  logoPath,
  name,
  location,
  businessFunction,
  rating,
  reviews,
  // selectedTab = 'Services',
  isAdmin,
}: StoreNavbarProps) => {
  return (
    <div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={backgroundImagePath}
          alt="Service Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center" // Ensures the middle part of the image is shown
        />
        {/* Store info */}
        <div className="absolute bottom-0 left-0 flex h-[60%] w-[60%] flex-row rounded-tr-[50px] bg-white">
          <div className="relative flex w-[30%] items-center justify-center">
            <Image
              className="relative"
              src={logoPath}
              height="160"
              width="160"
              alt="Logo"
            />
            <button className="absolute right-2 top-2 rounded-full bg-[#287e82] p-2 text-white">
              <MdEdit size={12} />
            </button>
          </div>
          <div className="flex w-[70%] flex-col justify-center pl-6">
            <div className="text-[22px] font-bold">{name}</div>
            <div className="mt-1 text-[14px] text-[#03656b]">in {location}</div>
            <div className="mt-1 text-[14px] text-gray-400">
              {businessFunction}
            </div>
            <div className="flex items-center gap-1">
              <div className="text-center text-yellow-400">
                <FaStar size={12} />
              </div>
              <span className="mr-1 text-[12px] text-black">{rating}</span>
              <span className="text-[12px] text-gray-500">
                ({reviews?.length} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-16  w-full flex-row justify-between border-b border-[#7ea9ab] text-[14px]">
        <div className="flex flex-row items-center gap-10 pl-10 text-[#2c8b90]">
          <Link href="/" className="hover:text-[#2f6669]">
            Services
          </Link>
          <Link href="/" className="hover:text-[#2f6669]">
            About us
          </Link>
          <Link href="/" className="hover:text-[#2f6669]">
            Location
          </Link>
        </div>
        {!isAdmin ? (
          <div className="m-4 mr-12 flex items-center justify-center rounded-3xl bg-[#27797e] p-4 px-8 text-center text-white">
            <Link href="/" className="">
              Message Us
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default StoreNavbar
