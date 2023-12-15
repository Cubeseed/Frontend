import "./searchbar.css"
import Image from "next/image"
import menu from "../../assets/icons/menu.png"
import search from "../../assets/icons/search.png"
import more from "../../assets/icons/more.png"

export default function SearchBar(){
    return(
        <div className="search-box">
            <div className="search-Leading-icon">
                <Image
                src={menu}
                alt=""
                />
            </div>
            <input 
            type="search" 
            className="search" 
            name="" id="" 
            placeholder="Hinted search text"/>
            <div className="search-trailing-icons">
                <div className="iconI">
                    <Image
                    src={search}
                    alt=""/>
                </div>
                <div className="iconII">
                    <Image
                    src={more}
                    alt=""/>
                </div>
            </div> 
        </div>
    )
}