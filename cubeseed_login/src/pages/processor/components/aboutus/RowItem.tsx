import Image from "next/image"

interface RowItemProps {
  // imagePath: string;
  // header: string;
  // content: string;
}

const RowItem: React.FC<RowItemProps> = (
  {
    // imagePath, header, content
  }
) => {
  return (
    <div>
      <div className="w-[30%]">
        <Image
          // onClick={() => router.push("/")}
          className="object-fit block cursor-pointer rounded-lg"
          src="/assets/company-strawberry.png"
          width={400}
          height={400}
          alt="Service Image"
        />
      </div>
      <div className="w-[70%]">
        <span>Our Story</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default RowItem
