import "@/styles/moderatorsearchbar.css"
import Image from "next/image"
import menu from "@/assets/icons/menu.png"
import search from "@/assets/icons/search.png"
import more from "@/assets/icons/more.png"

export default function SearchBar() {
  return (
    <div className="search-box">
      <div className="search-Leading-icon">
        <Image src={menu} alt="" />
      </div>
      <input
        type="search"
        className="search"
        name=""
        id=""
        placeholder="Hinted search text"
      />
      <div className="search-trailing-icons">
        {/* add onclick params to the div to trigger a search function */}
        <div className="iconI">
          <Image src={search} alt="" width={50} />
        </div>
        <div className="iconII">
          <Image src={more} alt="" width={50} />
        </div>
      </div>
    </div>
  )
}
